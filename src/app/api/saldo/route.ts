export const cadastroUsuario = async (dados: any) => {
  const response = await fetch(`http://127.0.0.1:5000/api/cadastro`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.erro || "Erro ao realizar cadastro.");
  }
  return await response.json();
};

export const loginUsuario = async (dados: any) => {
  const response = await fetch(`http://127.0.0.1:5000/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.erro || "Erro ao realizar login.");
  }
  return await response.json();
};

export const fetchSaldo = async (id_cliente: number) => {
  const response = await fetch(`http://127.0.0.1:5000/api/saldo/${id_cliente}`);
  if (!response.ok) {
    throw new Error("Erro ao carregar saldo.");
  }
  return await response.json();
};

export const fetchHistoricoTransacoes = async (id_cliente: number) => {
  const response = await fetch(
    `http://127.0.0.1:5000/api/historico_transacoes/${id_cliente}`
  );
  if (!response.ok) {
    throw new Error("Erro ao carregar histórico de transações.");
  }
  return await response.json();
};

export const fetchHistoricoAbastecimento = async (id_cliente: number) => {
  const response = await fetch(
    `http://127.0.0.1:5000/api/historico_abastecimento/${id_cliente}`
  );
  if (!response.ok) {
    throw new Error("Erro ao carregar histórico de abastecimento.");
  }
  return await response.json();
};

export const realizarRecarga = async (dados: {
  id_cliente: number;
  tipo: string;
  valor: number;
  id_base: number | null;
}) => {
  const response = await fetch(
    `http://127.0.0.1:5000/api/historico_transacoes/${dados.id_cliente}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao realizar recarga.");
  }

  return await response.json();
};

export const fetchClientes = async () => {
  try {
    const response = await fetch("http://localhost:8080/clientes");
    if (!response.ok) {
      throw new Error(
        `Erro ao buscar clientes: ${response.status} - ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro no fetchClientes:");
    throw error;
  }
};
