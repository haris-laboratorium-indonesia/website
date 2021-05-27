import Link from "next/link";
import Image from "next/image";
import { HiOutlineCamera } from "react-icons/hi";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { HiOutlineCalculator } from "react-icons/hi";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Disclosure } from "@headlessui/react";

export default function Home() {
  return (
    <>
      <section className="mb-10 bg-gradient-to-br from-gray-50 to-gray-200 -m-5 py-10 border-b">
        <div className="text-center text-3xl sm:text-4xl font-bold w-5/6 sm:w-1/2 mx-auto">
          <span className="text-gray-800">Pelajari Fisika dan Matematika</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 py-2">
            sebagaimana mereka seharusnya dipelajari.
          </span>
        </div>
        <div className="flex justify-center w-2/3 sm:1/2 mx-auto mt-5">
          <Link href="/learn/math/homeMath">
            <a className="rounded-full px-5 py-2 sm:py-1.5 bg-blue-600 hover:bg-opacity-80 text-sm text-white text-center">
              Belajar Sekarang
            </a>
          </Link>
        </div>
      </section>
      <div className="text-center text-gray-600 mt-16 -mx-5 py-3 border-t">
        Atau coba fitur lainnya
      </div>
      <main className="grid grid-cols-4 sm:grid-cols-5 sm:w-2/3 gap-5 mx-auto mb-10 border-t border-b p-5">
        <Icons to="/learn/math/homeMath" name="Scan">
          <HiOutlineBookOpen className="w-7 h-7 group-hover:text-blue-600 text-gray-700" />
        </Icons>

        <Icons to="/flashCard/flashCardMath" name="Scan">
          <HiOutlineColorSwatch className="w-7 h-7 group-hover:text-blue-600 text-gray-700" />
        </Icons>

        <Icons to="/calculator/calculatorMath" name="Kalkulator">
          <HiOutlineCalculator className="w-7 h-7 group-hover:text-blue-600 text-gray-700" />
        </Icons>

        <Icons to="/animation/animationMath" name="Scan">
          <HiOutlinePresentationChartLine className="w-7 h-7 group-hover:text-blue-600 text-gray-700" />
        </Icons>

        <Icons to="scan/ScanMath" name="Scan">
          <HiOutlineCamera className="w-7 h-7 group-hover:text-blue-600 text-gray-700" />
        </Icons>
      </main>
      <div className="text-center text-gray-600 mt-16 -mx-5 py-3 border-t">
        Portofolio
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-20 sm:gap-5  p-5 -mx-5 border-t border-b">
        <div>
          <div className="font-medium text-xl mb-2 text-gray-700 text-center">
            AKA Trading Indonesia
          </div>
          <div className="rounded-lg hover:shadow-2xl border border-gray-700 overflow-hidden">
            <Image
              src="/PortofolioAKA.png"
              width="1894px"
              height="940px"
              priority
            />
          </div>
          <div className="bg-[#7F957C] bg-opacity-30 text-green-900 p-2 text-center hover:bg-white border border-gray-700 rounded-md mt-3 font-medium">
            <a href="https://www.aka-tradingindo.com" target="_blank">
              aka-tradingindo.com
            </a>
          </div>
        </div>
        <div>
          <div className="font-medium text-xl mb-2 text-gray-700 text-center">
            HarisLab
          </div>
          <div className="rounded-lg hover:shadow-2xl border border-gray-700 overflow-hidden">
            <Image
              src="/PortofolioHarisLab.png"
              width="1894px"
              height="940px"
              priority
            />
          </div>
          <div className="bg-blue-100  text-gray-900 p-2 text-center hover:bg-white border border-gray-700 rounded-md mt-3 font-medium">
            <a href="https://harislab.vercel.app" target="_blank">
              harislab.vercel.app
            </a>
          </div>
        </div>
      </section>
      <div className="text-center text-gray-600 mt-16 -mx-5 py-3 border-t">
        F.A.Q
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Disclosure as="div" className="flex flex-col w-full ">
          <Disclosure.Button className=" bg-blue-500 text-white p-2  rounded-md focus:outline-none">
            Apa itu HarisLab ?
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500 p-2 rounded-md mt-1 border border-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            magnam obcaecati repudiandae illo saepe laudantium in voluptates
            nobis omnis, dolore possimus laboriosam velit voluptatum ratione
            culpa! Tenetur, eum nulla reiciendis ab in quidem soluta asperiores
            nam? Quas aspernatur maxime, tempore adipisci dolore suscipit eum ab
            reicien
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure as="div" className="flex flex-col w-full ">
          <Disclosure.Button className=" bg-blue-500 text-white p-2  rounded-md focus:outline-none">
            Pembayaran lewat apa ?
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500 p-2 rounded-md mt-1 border border-gray-500">
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
          <Disclosure.Button className=" bg-blue-500 text-white p-2  rounded-md focus:outline-none">
            Untuk kelas berapa ?
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500 p-2 rounded-md mt-1 border border-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo sunt,
            repellendus minima amet iste illo quam architecto veniam
            necessitatibus, nemo dolorum consequatur ut eveniet expedita nihil,
            beatae pariatur voluptate delectus sed tempore obcaecati temporibus.
            Tenetur aliquam tempora, deleniti corrupti amet earum hic voluptatem
            consequatur ad molestias dicta voluptatum enim reprehenderit!{" "}
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure as="div" className="flex flex-col w-full ">
          <Disclosure.Button className=" bg-blue-500 text-white p-2  rounded-md focus:outline-none">
            HeadQuarters HarisLab di mana ?{" "}
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500 p-2 rounded-md mt-1 border border-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            assumenda cum provident nihil sit illum quasi tempore vel
            blanditiis, totam minima nostrum! Quia tempora blanditiis
            reprehenderit quas perferendis porro, saepe quam eum debitis quos.
            Soluta dolore veritatis culpa repellendus quibusdam.{" "}
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure as="div" className="flex flex-col w-full ">
          <Disclosure.Button className=" bg-blue-500 text-white p-2  rounded-md focus:outline-none">
            HarisLab ada fitur apa saja ?{" "}
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500 p-2 rounded-md mt-1 border border-gray-500">
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
    <div className="mx-auto group">
      <Link href={to}>
        <a>
          <div className="h-15 w-15 rounded-xl p-3 border group-hover:border-blue-600 border-gray-400 items-center">
            {children}
          </div>
        </a>
      </Link>
      <div className="group-hover:text-blue-600 text-xs mt-1 text-center w-14">
        {name}
      </div>
    </div>
  );
}
