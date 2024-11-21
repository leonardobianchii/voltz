import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
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
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20">
          <h1 className="text-8xl font-bold mb-4">Voltz</h1>
          <p className="text-xl mb-6">
            Transforme seu caminho com energia limpa e sustentabilidade.
            Carregue o futuro com Voltz!
          </p>
          <Link
            href="/cadastro"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
          >
            Faça seu cadastro
          </Link>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full md:w-1/2 px-8">
            <h3 className="text-4xl font-bold mb-4">Conheça nosso projeto</h3>
            <p className="mb-6">
              Conheça a Voltz, um projeto inovador que leva estações de
              carregamento solar para áreas públicas e rurais, promovendo a
              mobilidade elétrica sustentável. Com painéis solares e baterias de
              armazenamento, nossas estações oferecem energia limpa para
              veículos elétricos, mesmo em locais com infraestrutura limitada.
              Através de um sistema inteligente de monitoramento, garantimos
              eficiência e sustentabilidade, impulsionando a transição para um
              futuro mais verde e acessível para todos.
            </p>
            <Link
              href="/about"
              className="btn bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
            >
              Descubra como funciona
            </Link>
          </div>
          <div className="w-full md:w-1/2 px-8 mt-8 md:mt-0 flex justify-center">
            <Image
              src="/img/voltz_image3.png"
              alt="Recife artificial"
              width={400}
              height={300}
              quality={100}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full md:w-1/2 px-8 order-2 md:order-1 mt-8 md:mt-0 flex justify-center">
            <Image
              src="/img/voltz_image.png"
              alt="Recife artificial"
              width={400}
              height={300}
              quality={100}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 px-8 order-1 md:order-2">
            <h3 className="text-4xl font-bold mb-4">Nossos serviços</h3>
            <p className="mb-6">
              Nossos serviços oferecem soluções completas para a mobilidade
              elétrica sustentável. Com estações de carregamento solar,
              proporcionamos acesso à energia limpa para veículos elétricos em
              áreas públicas e rurais. Através de tecnologia de monitoramento
              inteligente, garantimos operação eficiente e contínua. Além disso,
              oferecemos suporte para empresas e comunidades, promovendo a
              sustentabilidade e facilitando a transição para uma mobilidade
              mais verde e acessível.
            </p>
            <Link
              href="/produto"
              className="btn bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
            >
              Saiba mais aqui
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">O que dizem sobre?</h3>
          <p className="mb-8">Veja histórias de Impacto Real</p>
          <div className="flex flex-wrap justify-center">
            <div className="bg-blue-100 p-6 rounded-lg text-center w-80 m-4 transition duration-300 hover:bg-blue-600 hover:text-white">
              <Image
                src="/img/icone_fazendeiro.png"
                alt="icone fazendeiro"
                width={80}
                height={80}
                className="mx-auto rounded-full"
              />
              <p className="font-semibold text-xl mt-4">Morador Rural, Jorge</p>
              <p className="mt-2">
                "Aqui no campo, sempre foi difícil encontrar pontos de
                carregamento. As estações solares do Voltz trouxeram uma solução
                sustentável e eficiente, garantindo que eu carregue meu carro
                com energia limpa."
              </p>
            </div>
            <div className=" bg-blue-100 p-6 rounded-lg text-center w-80 m-4 transition duration-300 hover:bg-blue-600 hover:text-white">
              <Image
                src="/img/icone_pessoa.png"
                alt="icone coordenador"
                width={80}
                height={80}
                quality={100}
                className="mx-auto rounded-full"
              />
              <p className="font-semibold text-xl mt-4">Cidadão, Rogerio</p>
              <p className="mt-2">
                "A solução de carregamento solar do Voltz é perfeita para a
                cidade. Carregar meu carro com energia renovável enquanto estou
                em áreas públicas é prático e sustentável!"
              </p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg text-center w-80 m-4 transition duration-300 hover:bg-blue-600 hover:text-white">
              <Image
                src="/img/icone_empresario.png"
                alt="icone mergulhador"
                width={80}
                height={80}
                className="mx-auto rounded-full"
              />
              <p className="font-semibold text-xl mt-4">
                Dono de uma instalação Voltz, Julio Souza
              </p>
              <p className="mt-2">
                "Como responsável pela instalação, posso garantir que o sistema
                de monitoramento via IoT e as baterias de 20 kWh garantem
                operação contínua e eficiente, mesmo em dias nublados ou à
                noite."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="parceiros py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-4">Nossos parceiros</h3>
          <p className="mb-8">Conheça as empresas que apoiam o projeto Voltz</p>
          <div className="flex flex-wrap justify-around items-center">
            <Image
              src="/img/fia_logo.png"
              alt="Logo Fia"
              width={150}
              height={150}
              quality={100}
            />
            <Image
              src="/img/fiap_logo.png"
              alt="Logo FIAP"
              width={150}
              height={150}
              quality={100}
            />
            <Image
              src="/img/sap_logo.png"
              alt="Logo Sap"
              width={150}
              height={150}
              quality={100}
            />
            <Image
              src="/img/mahindra_logo.png"
              alt="Logo Mahindra"
              width={150}
              height={150}
              quality={100}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
