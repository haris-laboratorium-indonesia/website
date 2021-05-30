import Link from "next/link";
import Image from "next/image";
import { HiOutlineCamera } from "react-icons/hi";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { HiOutlineCalculator } from "react-icons/hi";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { HiOutlineBookOpen } from "react-icons/hi";
import { HiOutlinePuzzle } from "react-icons/hi";
import { Disclosure } from "@headlessui/react";

export default function Home() {
  const tools = [
    {
      ID:"1",
      SVGPaths:
        "M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5",
      CTALink: "/merchandise",
      CTAName: "Pattern Recognition",
      Description:
        "What seems right is partly is what we're used to seeing on that screen everyday and when it changes immediately there's all kinds of little pattern recognizing in our brain.",
    },
    {
      ID:"2",
      SVGPaths:
        "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
      CTALink: "/merchandise",
      CTAName: "Retention Rate",
      Description:
        "The Ability to retent the information for long time, in order to reuse the information, how to store the information is matters.",
    },
    {
      ID:"3",
      SVGPaths:
        "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
      CTALink: "/merchandise",
      CTAName: "Design",
      Description:
        "We make the design as usefull as delightul as fast as follow laws of ux as possible. So you can meet your need as soon as possible.",
    },
    {
      ID:"4",
      SVGPaths:
        "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
      CTALink: "/merchandise",
      CTAName: "Gamifying",
      Description:
        "Gamifying the learn as fun as collaborative as great human experience as possible. So you  have learned something without realizing it.",
    },
  ];
  return (
    <>
      <section className="mb-10 bg-gradient-to-b from-gray-50 to-white -m-5 sm:mx-0 gap-5 grid grid-cols-1 sm:grid-cols-2">
        <article className="w-full px-5 py-7 sm:pl-10 sm:py-10">
          <div className="w-4/5 sm:w-full text-left text-4xl sm:text-4xl font-bold">
            <span className="text-gray-900">Pelajari Sains</span>{" "}
            <span className="text-gray-600 py-2 font-normal">
              sebagaimana mereka seharusnya dipelajari.
            </span>
          </div>
          <div className="flex mt-7 justify-center sm:justify-start">
            <Link href="/learn/math/homeMath">
              <a className="rounded-full w-full sm:w-1/2 px-5 py-3 sm:py-2.5 bg-blue-600 text-white text-center hover:bg-opacity-90 hover:shadow-inner">
                Belajar Sekarang
              </a>
            </Link>
          </div>
        </article>
        <main className="p-5 sm:p-10 grid grid-cols-4 sm:grid-cols-3 gap-4">
          <Icons to="/learn/math/homeMath" name="Belajar">
            <HiOutlineBookOpen className="w-7 h-7 text-gray-700" />
          </Icons>

          <Icons to="/flashCard/flashCardMath" name="Card">
            <HiOutlineColorSwatch className="w-7 h-7 text-gray-700" />
          </Icons>

          <Icons to="/calculator/calculatorMath" name="Kalkulator">
            <HiOutlineCalculator className="w-7 h-7 text-gray-700" />
          </Icons>

          <Icons to="/animation/animationMath" name="Animasi">
            <HiOutlinePresentationChartLine className="w-7 h-7 text-gray-700" />
          </Icons>

          <Icons to="scan/ScanMath" name="Scan">
            <HiOutlineCamera className="w-7 h-7 text-gray-700" />
          </Icons>

          <Icons to="scan/ScanMath" name="Games">
            <HiOutlinePuzzle className="w-7 h-7 text-gray-700" />
          </Icons>
        </main>
        <div className="hidden sm:block w-1/2 object-none object-center"></div>
      </section>
      {/* Alat */}
      <div className="text-center text-gray-400 mt-16 mb-10 -mx-5 py-3">
        Kami Peduli Tentang
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 px-5 sm:px-10">
        {tools.map((tool) => (
          <div key={tool.ID}>
            {/* icons */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={tool.SVGPaths}
                />
              </svg>
            </div>
            {/* Name */}
            <div className="my-2">
              <Link href={tool.CTALink}>
                <a className="text-gray-700 hover:underline text-xl font-semibold font-mw">
                  {tool.CTAName}
                </a>
              </Link>
            </div>
            {/* description */}
            <div className="text-gray-600">{tool.Description}</div>
          </div>
        ))}
      </section>
      <section className=" grid-cols-1 sm:grid-cols-2 gap-20 sm:gap-5  p-5 -mx-5 hidden">
        <div>
          <div className="font-medium text-xl mb-2 text-gray-700 text-center">
            AKA Trading Indonesia
          </div>
          <div className="rounded-lg border border-gray-200 shadow-xl overflow-hidden">
            <Image
              src="/PortofolioAKA.png"
              width="1534px"
              height="863px"
              priority
            />
          </div>

          <a
            className="mt-4 bg- border border-[#7F957C]  text-[#7F957C] p-2 text-center hover:bg-[#7F957C] hover:bg-opacity-5 rounded-full font-medium block "
            href="https://www.aka-tradingindo.com"
            target="_blank"
          >
            aka-tradingindo.com
          </a>
        </div>
        <div>
          <div className="font-medium text-xl mb-2 text-gray-700 text-center">
            HarisLab
          </div>
          <div className="rounded-lg border border-gray-200 shadow-xl overflow-hidden">
            <Image
              src="/PortofolioHarisLab.png"
              width="1534px"
              height="863px"
              priority
            />
          </div>

          <a
            className="mt-4 border border-blue-600  text-blue-600 hover:bg-blue-100 p-2 text-center hover:bg-opacity-20 rounded-full font-medium block "
            href="https://harislab.vercel.app"
            target="_blank"
          >
            harislab.vercel.app
          </a>
        </div>
      </section>
      <div className="text-center text-gray-400 mt-16 mb-10 -mx-5 py-3">FAQ</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 px-10 -mx-5 ">
        <Disclosure as="div" className="flex flex-col w-full ">
          <Disclosure.Button className=" hover:bg-blue-50 border border-gray-500 text-gray-500 p-2  rounded-md focus:outline-none">
            Apa itu HarisLab ?
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-400 p-2 rounded-md mt-1 border border-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            magnam obcaecati repudiandae illo saepe laudantium in voluptates
            nobis omnis, dolore possimus laboriosam velit voluptatum ratione
            culpa! Tenetur, eum nulla reiciendis ab in quidem soluta asperiores
            nam? Quas aspernatur maxime, tempore adipisci dolore suscipit eum ab
            reicien
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure as="div" className="flex flex-col w-full ">
          <Disclosure.Button className=" hover:bg-blue-50 border border-gray-500 text-gray-500 p-2  rounded-md focus:outline-none">
            Pembayaran lewat apa ?
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-400 p-2 rounded-md mt-1 border border-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            fugiat facere consequuntur, non eveniet inventore nam excepturi a
            accusamus, praesentium perspiciatis quos iure asperiores fugit
            suscipit recusandae magni laboriosam doloremque dicta? Aliquid sit
            modi amet, ipsum iusto dolore dolores culpa hic, saepe, voluptas
            molestiae aperiam excepturi! Vel accusamus ratione quo quisquam
            dolorem aut incidunt provident facere impedit ullam quis saepe,
            porro voluptatum explicabo id quos a, blanditiis soluta. Maxime quam
            quas ex impedit deleniti sint?{" "}
          </Disclosure.Panel>
        </Disclosure>

        <Disclosure as="div" className="flex flex-col w-full ">
          <Disclosure.Button className=" hover:bg-blue-50 border border-gray-500 text-gray-500 p-2  rounded-md focus:outline-none">
            Untuk kelas berapa ?
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-400 p-2 rounded-md mt-1 border border-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo sunt,
            repellendus minima amet iste illo quam architecto veniam
            necessitatibus, nemo dolorum consequatur ut eveniet expedita nihil,
            beatae pariatur voluptate delectus sed tempore obcaecati temporibus.
            Tenetur aliquam tempora, deleniti corrupti amet earum hic voluptatem
            consequatur ad molestias dicta voluptatum enim reprehenderit!{" "}
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure as="div" className="flex flex-col w-full ">
          <Disclosure.Button className=" hover:bg-blue-50 border border-gray-500 text-gray-500 p-2  rounded-md focus:outline-none">
            HeadQuarters HarisLab di mana ?{" "}
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-400 p-2 rounded-md mt-1 border border-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            assumenda cum provident nihil sit illum quasi tempore vel
            blanditiis, totam minima nostrum! Quia tempora blanditiis
            reprehenderit quas perferendis porro, saepe quam eum debitis quos.
            Soluta dolore veritatis culpa repellendus quibusdam.{" "}
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure as="div" className="flex flex-col w-full ">
          <Disclosure.Button className=" hover:bg-blue-50 border border-gray-500 text-gray-500 p-2  rounded-md focus:outline-none">
            HarisLab ada fitur apa saja ?{" "}
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-400 p-2 rounded-md mt-1 border border-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            commodi nobis corporis voluptatum amet molestiae sunt odit
            reiciendis enim mollitia dicta minus itaque doloremque quas
            voluptate quasi non cumque, est deleniti, sit cupiditate, nostrum
            qui veritatis recusandae! Saepe, ex excepturi nam voluptatum magni
            nobis perspiciatis similique officiis. A consequatur veritatis ut
            dolor laborum alias, blanditiis cum dolore fugiat maxime! Adipisci!{" "}
          </Disclosure.Panel>
        </Disclosure>
      </div>
      <div className="min-h-screen"></div>
    </>
  );
}

function Icons({ to, children, name }) {
  return (
    <div className="mx-auto group ">
      <Link href={to}>
        <a>
          <div className="flex justify-centerh-15 w-15 rounded-xl p-3.5 bg-gradient-to-t from-gray-200 to-gray-100 items-center transform hover:translate-y-0.5 -translate-y-0.5 transition duration-200 ease-in-out hover:shadow-inner shadow-hero">
            {children}
          </div>
        </a>
      </Link>
      <div className="text-gray-600 text-xs mt-1 text-center w-14">{name}</div>
    </div>
  );
}
