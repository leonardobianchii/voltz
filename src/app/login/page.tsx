"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroLogin, setErroLogin] = useState("");
  const [mensagemSucessoLogin, setMensagemSucessoLogin] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = usuarios.find(
      (usuario) => usuario.email === email && usuario.senha === senha
    );

    if (usuario) {
      setMensagemSucessoLogin("Login realizado com sucesso!");
      setErroLogin("");
      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

      // Redireciona para a página de agendamento após o login
      setTimeout(() => {
        router.push("/login-page");
      }, 2000);
    } else {
      setErroLogin("Email ou senha incorretos.");
      setMensagemSucessoLogin("");

      setTimeout(() => {
        setErroLogin("");
      }, 3000);
    }
  };

  return (
    <>
      <div className="relative">
        <Image
          src="/img/voltz_Banner.png"
          alt="Banner Image"
          layout="responsive"
          width={1920}
          height={600}
          quality={100}
          objectFit="cover"
          priority
          className="w-full h-[600px] object-cover"
        />
        {/* Overlay preto */}
        <div className="absolute inset-0 bg-black opacity-80"></div>

        {/* Texto centralizado no banner */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20">
          <h1 className="text-8xl font-bold mb-4">Login</h1>
          <p className="text-xl mb-6">
            {" "}
            Faça login para acessar seu painel e aproveitar todas as
            funcionalidades do nosso sistema.
          </p>
        </div>
      </div>

      <main className="flex justify-center py-10">
        <div className="login-container w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <form className="login-form text-center">
            <div className="login-form-group mb-5">
              <label htmlFor="email" className="login-label block mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="login-input w-full p-2 border border-gray-300 rounded"
                placeholder="Insira seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-form-group mb-5">
              <label htmlFor="senha" className="login-label block mb-1">
                Senha:
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                className="login-input w-full p-2 border border-gray-300 rounded"
                placeholder="Insira sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={handleLogin}
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            >
              Entrar
            </button>

            {erroLogin && <p className="text-red-500 mt-2">{erroLogin}</p>}
            {mensagemSucessoLogin && (
              <p className="text-green-500 mt-2">{mensagemSucessoLogin}</p>
            )}
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
