import Image from "next/image";

export default function Produto() {
  return (
    <main>
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
          <h1 className="text-8xl font-bold mb-4">Serviços</h1>
          <p className="text-xl mb-6">
            Facilitamos sua mobilidade elétrica com recargas práticas,
            tecnologia avançada e energia 100% sustentável.
          </p>
        </div>
      </div>
      <section className="py-16">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full md:w-1/2 px-8">
            <h3 className="text-4xl font-bold mb-4">Recarga rápida e facil!</h3>
            <p className="mb-6">
              Com a Voltz, recarregar sua conta é simples e flexível. Você pode
              adicionar créditos diretamente na estação de recarga, utilizando
              métodos de pagamento como cartão de crédito ou débito, ou acessar
              nosso site, atraves do seu cadastro ou login e fazer a recarga de
              onde estiver. Na plataforma online, é possível acompanhar seu
              saldo em tempo real e garantir que nunca falte energia para
              carregar seu veículo. Pensando na sua conveniência, nossa solução
              oferece praticidade para quem busca mobilidade elétrica
              sustentável de forma fácil e acessível.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-8 mt-8 md:mt-0 flex justify-center">
            <Image
              src="/img/voltz_image6.png"
              alt="Imagem VoltzEco"
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
              src="/img/voltz_image7.png"
              alt="Imagem VoltzEco"
              width={400}
              height={300}
              quality={100}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 px-8 order-1 md:order-2">
            <h3 className="text-4xl font-bold mb-4">
              Monitoramento de energia e gastos
            </h3>
            <p className="mb-6">
              Nosso sistema permite que você acompanhe todo o seu consumo de
              energia de forma detalhada. Após cada recarga, visualize quanto de
              energia foi utilizada para carregar seu veículo, o custo
              correspondente e acesse seu histórico completo de recargas.
              Através da plataforma online ou diretamente no totem, tenha
              controle total dos seus gastos e consuma de forma consciente. A
              transparência e a eficiência da Voltz garantem uma experiência
              única na gestão da sua energia limpa e sustentável.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
