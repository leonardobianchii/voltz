export interface Cliente {
    id: number;
    nome: string;
    email: string;
    saldo: number;
  }
  
  export interface CadastroUsuario {
    nome: string;
    email: string;
    telefone: string;
    login: string;
    senha: string;
    saldo?: number;
  }
  
  export interface LoginUsuario {
    login: string;
    senha: string;
  }
  
  export interface UsuarioResponse {
    id_cliente: number;
    nome: string;
    email: string;
    telefone: string;
    saldo: number;
  }
  
  export interface FormDataCadastro {
    nome: string;
    email: string;
    telefone: string;
    login: string;
    senha: string;
  }

  export interface UsuarioLogado {
    id_cliente: number;
    nome: string;
  }
  
  export interface Transacao {
    tipo: string;
    valor: number;
    data: string;
  }
  
 export interface Abastecimento {
    base: string | null;
    energia_utilizada: number;
    custo: number;
    data: string;
  }