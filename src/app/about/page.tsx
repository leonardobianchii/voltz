import Image from "next/image";
import Link from "next/link";

export default function About() {
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
          <h1 className="text-8xl font-bold mb-4">Conheça nosso projeto</h1>
          <p className="text-xl mb-6">
            Conheça nosso projeto e desfrute de uma experiencia inesquecivel!
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full md:w-1/2 px-8">
            <h3 className="text-4xl font-bold mb-4">Nossas instalações</h3>
            <p className="mb-6">
              As instalações Voltz são projetadas para atender a diferentes
              realidades, levando a mobilidade elétrica sustentável a áreas com
              infraestrutura limitada. Equipadas com painéis solares de alta
              eficiência, nossas estações geram energia limpa e a armazenam em
              baterias de 20 kWh, garantindo carregamento contínuo para veículos
              elétricos, mesmo à noite ou em dias nublados. A tecnologia IoT
              integrada permite o monitoramento remoto, otimização do consumo e
              gestão eficiente das cargas, assegurando uma operação sustentável
              e de baixo custo. VoltzEco é a solução inteligente para um futuro
              mais verde e acessível.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-8 mt-8 md:mt-0 flex justify-center">
            <Image
              src="/img/voltz_image2.png"
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
              src="/img/voltz_image5.png"
              alt="Imagem VoltzEco"
              width={400}
              height={300}
              quality={100}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 px-8 order-1 md:order-2">
            <h3 className="text-4xl font-bold mb-4">Energia Sustentável</h3>
            <p className="mb-6">
              A energia sustentável é fundamental para a preservação do planeta
              e para o futuro das gerações vindouras. Ao optar por fontes de
              energia renováveis, como a solar, contribuímos para a redução da
              emissão de gases poluentes e do impacto ambiental. O uso de
              energia limpa, como o sistema de carregamento solar do VoltzEco,
              não só diminui a dependência de fontes fósseis, mas também garante
              um futuro mais verde e sustentável. Adotar práticas de consumo
              consciente é essencial para transformar nosso mundo em um lugar
              mais equilibrado e saudável.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2 className="text-4xl font-bold text-center mb-8 mt-8">
            Criadores
          </h2>
          <div className="flex justify-center flex-wrap gap-5 mt-10 mb-16">
            <div className="bg-gray-800 shadow-md p-5 rounded-lg w-full sm:w-[calc(33.333%-20px)] text-center flex flex-col items-center text-white">
              <Image
                src="/img/leonardo.png"
                alt="Leonardo Bianchi"
                width={100}
                height={110}
                quality={100}
                className="rounded-full mb-2"
              />
              <h3>Leonardo Bianchi</h3>
              <p>RM: 558576</p>
              <p>Scrum Master/Product Owner</p>
              <div className="social-links mt-7 underline">
                <a
                  href="https://github.com/leonardobianchii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-1 text-white"
                >
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/lvxzin_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-1 text-white"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-1 text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="bg-gray-800 shadow-md p-5 rounded-lg w-full sm:w-[calc(33.333%-20px)] text-center flex flex-col items-center text-white">
              <Image
                src="/img/angello.png"
                alt="Imagem Angello"
                width={100}
                height={110}
                quality={100}
                className="rounded-full mb-2"
              />
              <h3>Angello Turano</h3>
              <p>RM: 556511</p>
              <p>Full Stack Developer</p>
              <div className="social-links mt-7 underline">
                <a
                  href="https://github.com/AngelloTDC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-1 text-white"
                >
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/angello_tdc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-1 text-white"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/angello-turano-1321b4212/ "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-1 text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="bg-gray-800 shadow-md p-5 rounded-lg w-full sm:w-[calc(33.333%-20px)] text-center flex flex-col items-center text-white">
              <Image
                src="/img/caua.png"
                alt="Imagem Cauã"
                width={100}
                height={110}
                quality={100}
                className="rounded-full mb-2"
              />
              <h3>Cauã Sanches</h3>
              <p>RM: 558317</p>
              <p>Back-End Developer</p>
              <div className="social-links mt-7 underline">
                <a
                  href="https://github.com/C4zin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-1 text-white"
                >
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/c4zinnn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-1 text-white"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-1 text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
