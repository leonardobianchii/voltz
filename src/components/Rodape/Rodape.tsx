export default function Rodape() {
  return (
    <footer className="bg-gray-800 text-white text-center py-5">
      <div className="flex flex-wrap justify-around mx-auto p-5">
        <div className="flex-1 min-w-[300px] m-2">
          <h3 className="mb-2">Contato</h3>
          <p>Email: voltzenergia01@gmail.com</p>
          <p>Telefone: (11) 98683-9381</p>
        </div>
        <div className="flex-1 min-w-[300px] m-2">
          <h3 className="mb-2">Redes Sociais</h3>
          <a
            href="https://www.facebook.com"
            className="block mb-1 hover:underline"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com"
            className="block mb-1 hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com"
            className="block mb-1 hover:underline"
          >
            Instagram
          </a>
        </div>
        <div className="flex-1 min-w-[300px] m-2">
          <h3 className="mb-2">Endereço</h3>
          <p>Av. Paulista, 1106</p>
          <p>Bela Vista, São Paulo</p>
          <p>CEP: 01311-000</p>
        </div>
      </div>
    </footer>
  );
}
