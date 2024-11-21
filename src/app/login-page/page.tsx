"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  fetchSaldo,
  fetchHistoricoTransacoes,
  fetchHistoricoAbastecimento,
  realizarRecarga,
} from "../api/saldo/route";

export default function Dashboard() {
  const [usuarioLogado, setUsuarioLogado] = useState<any | null>(null);
  const [saldo, setSaldo] = useState<number | null>(null);
  const [historicoTransacoes, setHistoricoTransacoes] = useState<any[]>([]);
  const [historicoAbastecimento, setHistoricoAbastecimento] = useState<any[]>(
    []
  );
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

  const carregarDados = async () => {
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
  };

  const handleRecarga = async () => {
    if (!valorTransacao) {
      alert("Por favor, preencha o valor da transação.");
      return;
    }

    try {
      console.log({
        id_cliente: usuarioLogado.id_cliente,
        tipo: tipoTransacao,
        valor: parseFloat(valorTransacao),
        id_base: null,
      });
      await realizarRecarga({
        id_cliente: usuarioLogado.id_cliente,
        tipo: tipoTransacao,
        valor: parseFloat(valorTransacao),
        id_base: null,
      });
      alert("Recarga realizada com sucesso!");
      setModalAberto(false);
      carregarDados();
    } catch (error) {
      alert("Erro ao realizar recarga. Tente novamente.");
    }
  };

  useEffect(() => {
    if (usuarioLogado) {
      carregarDados();
    }
  }, [usuarioLogado]);

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

          <div className="w-full max-w-4xl mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Histórico de Transações
            </h3>
            {carregando.transacoes ? (
              <p className="text-gray-500">Carregando...</p>
            ) : historicoTransacoes.length > 0 ? (
              <ul className="list-disc pl-5">
                {historicoTransacoes.map((transacao, index) => (
                  <li key={index} className="text-gray-300">
                    Tipo: {transacao.tipo}, Valor: R$
                    {transacao.valor.toFixed(2)}, Data: {transacao.data}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Nenhuma transação encontrada.</p>
            )}
          </div>

          <div className="w-full max-w-4xl mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Histórico de Abastecimento
            </h3>
            {carregando.abastecimento ? (
              <p className="text-gray-500">Carregando...</p>
            ) : historicoAbastecimento.length > 0 ? (
              <ul className="list-disc pl-5">
                {historicoAbastecimento.map((abastecimento, index) => (
                  <li key={index} className="text-gray-300">
                    Base: {abastecimento.base || "Desconhecida"}, Energia:{" "}
                    {abastecimento.energia_utilizada.toFixed(2)} kWh, Custo: R$
                    {abastecimento.custo.toFixed(2)}, Data: {abastecimento.data}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Nenhum abastecimento registrado.</p>
            )}
          </div>
        </>
      ) : (
        <p>Redirecionando para login...</p>
      )}
    </div>
  );
}
