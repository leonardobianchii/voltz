"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center text-center">
      <div className="mt-24">
        <Image
          src="/img/voltz_Banner.png"
          alt="Voltz Banner"
          width={575}
          height={200}
          priority
          className="rounded-lg mb-8 ml-20"
        />
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Página não encontrada</h2>
        <p className="text-lg text-gray-400 mb-8">
          Oops! Parece que você se perdeu. A página que você está procurando não
          existe.
        </p>
        <button
          onClick={() => router.push("/")}
          className="py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Voltar para a Página Inicial
        </button>
      </div>
    </div>
  );
}
