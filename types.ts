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