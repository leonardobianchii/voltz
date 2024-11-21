"use client";

import { Abastecimento, UsuarioLogado, Transacao } from "../../../types";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  fetchSaldo,
  fetchHistoricoTransacoes,
  fetchHistoricoAbastecimento,
  realizarRecarga,
} from "../api/saldo/route";


export default function Dashboard() {
  const [usuarioLogado, setUsuarioLogado] = useState<UsuarioLogado | null>(
    null
  );
  const [saldo, setSaldo] = useState<number | null>(null);
  const [historicoTransacoes, setHistoricoTransacoes] = useState<Transacao[]>(
    []
  );
  const [historicoAbastecimento, setHistoricoAbastecimento] = useState<
    Abastecimento[]
  >([]);
  const [carregando, setCarregando] = useState({
    saldo: true,
    transacoes: true,
    abastecimento: true,
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

    try {
      const transacoesData = await fetchHistoricoTransacoes(
        usuarioLogado.id_cliente
      );
      setHistoricoTransacoes(transacoesData.historico_transacoes || []);
    } catch {
      setHistoricoTransacoes([]);
    } finally {
      setCarregando((prev) => ({ ...prev, transacoes: false }));
    }

    try {
      const abastecimentoData = await fetchHistoricoAbastecimento(
        usuarioLogado.id_cliente
      );
      setHistoricoAbastecimento(
        abastecimentoData.historico_abastecimento || []
      );
    } catch {
      setHistoricoAbastecimento([]);
    } finally {
      setCarregando((prev) => ({ ...prev, abastecimento: false }));
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
          {/* Modal de recarga e demais componentes mantidos */}
        </>
      ) : (
        <p>Redirecionando para login...</p>
      )}
    </div>
  );
}