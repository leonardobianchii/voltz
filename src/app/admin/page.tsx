"use client";

import { useState, useEffect } from "react";
import { fetchClientes } from "../api/saldo/route";

export default function AdminDashboard() {
  const [clientes, setClientes] = useState<any[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const carregarClientes = async () => {
      try {
        const data = await fetchClientes();
        setClientes(data);
        setErro("");
      } catch (error) {
        setErro("Erro ao carregar os clientes.");
      } finally {
        setCarregando(false);
      }
    };

    carregarClientes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-8">
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg mt-32">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Menu Administrador
        </h2>
        <div className="bg-gray-700 p-4 rounded shadow">
          <h3 className="text-2xl font-semibold mb-4">Clientes Cadastrados</h3>
          {carregando ? (
            <p className="text-gray-400 text-center">Carregando clientes...</p>
          ) : erro ? (
            <p className="text-red-500 text-center">{erro}</p>
          ) : clientes.length > 0 ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="p-2">ID</th>
                  <th className="p-2">Nome</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">Saldo</th>
                </tr>
              </thead>
              <tbody>
                {clientes.map((cliente) => (
                  <tr key={cliente.id} className="border-b border-gray-600">
                    <td className="p-2">{cliente.id}</td>
                    <td className="p-2">{cliente.nome}</td>
                    <td className="p-2">{cliente.email}</td>
                    <td className="p-2">
                      R${cliente.saldo?.toFixed(2) || "0.00"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-400 text-center">
              Nenhum cliente cadastrado.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
