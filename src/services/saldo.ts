import {
    CadastroUsuario,
    LoginUsuario,
    UsuarioResponse,
    Transacao,
    Abastecimento,
    Cliente,
  } from "../../types";
  
  // Serviço para cadastro de usuário
  export const cadastroUsuario = async (dados: CadastroUsuario): Promise<UsuarioResponse> => {
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
  
  // Serviço para login de usuário
  export const loginUsuario = async (dados: LoginUsuario): Promise<UsuarioResponse> => {
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
  
  // Serviço para buscar saldo
  export const fetchSaldo = async (id_cliente: number): Promise<{ saldo: number }> => {
    const response = await fetch(`http://127.0.0.1:5000/api/saldo/${id_cliente}`);
    if (!response.ok) {
      throw new Error("Erro ao carregar saldo.");
    }
    return await response.json();
  };
  
  // Serviço para buscar histórico de transações
  export const fetchHistoricoTransacoes = async (
    id_cliente: number
  ): Promise<{ historico_transacoes: Transacao[] }> => {
    const response = await fetch(
      `http://127.0.0.1:5000/api/historico_transacoes/${id_cliente}`
    );
    if (!response.ok) {
      throw new Error("Erro ao carregar histórico de transações.");
    }
    return await response.json();
  };
  
  // Serviço para buscar histórico de abastecimento
  export const fetchHistoricoAbastecimento = async (
    id_cliente: number
  ): Promise<{ historico_abastecimento: Abastecimento[] }> => {
    const response = await fetch(
      `http://127.0.0.1:5000/api/historico_abastecimento/${id_cliente}`
    );
    if (!response.ok) {
      throw new Error("Erro ao carregar histórico de abastecimento.");
    }
    return await response.json();
  };
  
  // Serviço para realizar recarga
  export const realizarRecarga = async (dados: {
    id_cliente: number;
    tipo: string;
    valor: number;
    id_base: number | null;
  }): Promise<{ mensagem: string }> => {
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
  
  // Serviço para buscar todos os clientes
  export const fetchClientes = async (): Promise<Cliente[]> => {
    try {
      const response = await fetch("http://localhost:8080/clientes");
      if (!response.ok) {
        throw new Error(
          `Erro ao buscar clientes: ${response.status} - ${response.statusText}`
        );
      }
      return await response.json();
    } catch (error) {
      console.error("Erro no fetchClientes:", error);
      throw error;
    }
  };
  