"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { fetchSaldo, realizarRecarga } from "../../services/saldo";
import { UsuarioLogado } from "../../../types";

export default function Dashboard() {
  const [usuarioLogado, setUsuarioLogado] = useState<UsuarioLogado | null>(
    null
  );
  const [saldo, setSaldo] = useState<number | null>(null);
  const [carregando, setCarregando] = useState({
    saldo: true,
  });
  const [modalAberto, setModalAberto] = useState(false);
  const [tipoTransacao, setTipoTransacao] = useState<string>("credito");
  const [valorTransacao, setValorTransacao] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    const usuario = localStorage.getItem("usuarioLogado");
    if (usuario) {
      setUsuarioLogado(JSON.parse(usuario));
    } else {
      router.push("/login");
    }
  }, [router]);

  const carregarDados = useCallback(async () => {
    if (!usuarioLogado || !usuarioLogado.id_cliente) {
      router.push("/login");
      return;
    }

    try {
      const saldoData = await fetchSaldo(usuarioLogado.id_cliente);
      setSaldo(saldoData.saldo);
    } catch {
      setSaldo(0);
    } finally {
      setCarregando((prev) => ({ ...prev, saldo: false }));
    }
  }, [usuarioLogado, router]);

  const handleRecarga = async () => {
    if (!valorTransacao) {
      alert("Por favor, preencha o valor da transação.");
      return;
    }

    try {
      await realizarRecarga({
        id_cliente: usuarioLogado?.id_cliente || 0,
        tipo: tipoTransacao,
        valor: parseFloat(valorTransacao),
        id_base: null,
      });
      alert("Recarga realizada com sucesso!");
      setModalAberto(false);
      carregarDados();
    } catch {
      alert("Erro ao realizar recarga. Tente novamente.");
    }
  };

  useEffect(() => {
    if (usuarioLogado) {
      carregarDados();
    }
  }, [usuarioLogado, carregarDados]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-8">
      {usuarioLogado ? (
        <>
          <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between bg-gray-800 p-6 rounded-lg shadow-lg mt-32">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">
              Bem-vindo de volta, {usuarioLogado?.nome || "Usuário"}!
            </h2>
            <div className="flex flex-col items-center">
              <p className="text-xl mb-2">
                Saldo:{" "}
                {carregando.saldo ? (
                  "Carregando..."
                ) : (
                  <span
                    className={`text-${
                      saldo && saldo > 0 ? "green-500" : "gray-500"
                    }`}
                  >
                    R${saldo?.toFixed(2) || "0.00"}
                  </span>
                )}
              </p>
              <button
                onClick={() => setModalAberto(true)}
                className="mt-4 bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded"
              >
                Recarregar
              </button>
            </div>
          </div>

          {/* Modal de Recarga */}
          {modalAberto && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white text-black p-6 rounded shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Realizar Recarga</h2>
                <label className="block mb-2">
                  Tipo de Transação:
                  <select
                    value={tipoTransacao}
                    onChange={(e) => setTipoTransacao(e.target.value)}
                    className="w-full p-2 border rounded"
                  >
                    <option value="credito">Crédito</option>
                    <option value="debito">Débito</option>
                  </select>
                </label>
                <label className="block mb-2">
                  Valor (R$):
                  <input
                    type="number"
                    value={valorTransacao}
                    onChange={(e) => setValorTransacao(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </label>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => setModalAberto(false)}
                    className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleRecarga}
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                  >
                    Creditar Saldo
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <p>Redirecionando para login...</p>
      )}
    </div>
  );
}
