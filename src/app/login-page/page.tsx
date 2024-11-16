

export default function Dashboard() {
  const usuario = {
    nome: 'João Silva',
    saldo: 120.50,
    historico: ['R$50 recarregado em 12/11', 'R$30 recarregado em 10/11', 'R$40 recarregado em 08/11'],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-8">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between bg-gray-800 p-6 rounded-lg shadow-lg mt-32">
        <h2 className="text-3xl font-bold mb-4 md:mb-0">Bem-vindo de volta, {usuario.nome}!</h2>
        <div className="flex flex-col items-center">
          <p className="text-xl mb-2">Saldo: <span className="text-green-500">R${usuario.saldo.toFixed(2)}</span></p>
          <button className="mt-4 bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded">
            Recarregar
          </button>
        </div>
      </div>

      <div className="w-full max-w-4xl mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Histórico de Recargas</h3>
        {usuario.historico.length > 0 ? (
          <ul className="list-disc pl-5">
            {usuario.historico.map((recarga, index) => (
              <li key={index} className="text-gray-300">{recarga}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Nenhuma recarga realizada ainda.</p>
        )}
      </div>
    </div>
  );
}
