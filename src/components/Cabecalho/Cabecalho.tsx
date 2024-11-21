"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [Scroll, setScrollOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOn(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-30 transition-colors duration-300 ${
        Scroll ? "bg-gray-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/img/voltz_logo.png" alt="Logo" width={70} height={70} />
        </Link>

        <nav className="flex items-center space-x-8">
          <Link
            href="/"
            className="text-white hover:text-blue-500 relative group"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all"></span>
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-blue-500 relative group"
          >
            Sobre nós
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all"></span>
          </Link>
          <Link
            href="/produto"
            className="text-white hover:text-blue-500 relative group"
          >
            Serviços
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all"></span>
          </Link>
          <Link
            href="/login"
            className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition-colors relative group"
          >
            Login
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 "></span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
