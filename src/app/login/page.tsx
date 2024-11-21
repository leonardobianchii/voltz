"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUsuario } from "../api/saldo/route";
import Image from "next/image";

const Login = () => {
  const [formData, setFormData] = useState({ login: "", senha: "" });
  const [erro, setErro] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (formData.login === "admin" && formData.senha === "admin") {
        setMensagemSucesso("Login de administrador realizado com sucesso!");
        setErro("");

        setTimeout(() => {
          router.push("/admin");
        }, 1000);
        return;
      }

      const usuario = await loginUsuario(formData);
      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
      setMensagemSucesso("Login realizado com sucesso!");
      setErro("");

      setTimeout(() => {
        router.push("/login-page");
      }, 1000);
    } catch (err: any) {
      setErro(err.message || "Erro ao realizar login.");
      setMensagemSucesso("");
    }
  };

  return (
    <div>
      <div className="relative">
        <Image
          src="/img/voltz_Banner.png"
          alt="Banner Image"
          layout="responsive"
          width={1920}
          height={600}
          objectFit="cover"
          priority
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20">
          <h1 className="text-8xl font-bold mb-4">Login</h1>
          <p className="text-xl mb-6">
            Acesse sua conta para aproveitar nossos serviços!
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-8"
      >
        <div className="mb-4">
          <label htmlFor="login" className="block mb-1 text-gray-700">
            Login:
          </label>
          <input
            name="login"
            id="login"
            placeholder="Digite seu login"
            value={formData.login}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="senha" className="block mb-1 text-gray-700">
            Senha:
          </label>
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="Digite sua senha"
            value={formData.senha}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Entrar
        </button>

        {mensagemSucesso && (
          <p className="text-green-500 mt-4">{mensagemSucesso}</p>
        )}
        {erro && <p className="text-red-500 mt-4">{erro}</p>}
      </form>
    </div>
  );
};

export default Login;
