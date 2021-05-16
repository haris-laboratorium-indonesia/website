import { Disclosure } from "@headlessui/react";

import Link from "next/link";
export default function Home() {
  return (
    <main>
      {/* fisika & matematika */}
      <section className="grid grid-cols-1 sm:grid-cols-2 my-5 gap-3 sm:gap-5">
        <Link href="/homeMath">
          <a>
            <div className="bg-[#007aff] text-white py-3 text-center rounded-md hover:bg-white hover:text-[#007aff] border border-[#007aff]">
              Matematika
            </div>
          </a>
        </Link>
        <Link href="/homePhy">
          <a>
            <div className="bg-[#ff2d55] text-white py-3 text-center rounded-md hover:bg-white hover:text-[#ff2d55] border border-[#ff2d55]">
              Fisika
            </div>
          </a>
        </Link>
      </section>
      {/* features */}
      <section className=" grid grid-cols-1 sm:grid-cols-4 gap-5">
        {/* calculator */}
        <Disclosure as="div">
          <Disclosure.Button className=" text-center py-3 bg-black text-white  focus:outline-none font-medium  w-full hover:bg-white border border-black hover:text-black rounded-md">
            Kalkulator
          </Disclosure.Button>
          <Disclosure.Panel className=" text-center rounded-b-lg border border-t-0 border-gray-500 p-1 -mt-1 bg-[#F9F5F1]">
            <div className="py-2 border-b border-gray-500">
              <Link href="/featuresMath/calculator">
                <a>Kalkulator Matematika</a>
              </Link>
            </div>
            <div className="py-2">
              <Link href="/featuresPhy/calculator">
                <a>Kalkulator Fisika</a>
              </Link>
            </div>
          </Disclosure.Panel>
        </Disclosure>

        {/* flashCard */}
        <Disclosure as="div">
          <Disclosure.Button className=" text-center py-3 bg-black text-white focus:outline-none font-medium  w-full hover:bg-white border border-black hover:text-black rounded-md">
            Flash Card
          </Disclosure.Button>
          <Disclosure.Panel className="text-center rounded-b-lg border border-t-0 border-gray-500 p-1 -mt-1 bg-[#F9F5F1]">
            <div className="py-2 border-b border-gray-500">
              <Link href="/featuresMath/flashCard">
                <a>Flash Card Matematika</a>
              </Link>
            </div>
            <div className="py-2">
              <Link href="/featuresPhy/flashCard">
                <a>Flash Card Fisika</a>
              </Link>
            </div>
          </Disclosure.Panel>
        </Disclosure>
        {/* animation */}
        <Disclosure as="div">
          <Disclosure.Button className=" text-center py-3 bg-black text-white focus:outline-none font-medium  w-full hover:bg-white border border-black hover:text-black rounded-md">
            Animasi
          </Disclosure.Button>
          <Disclosure.Panel className="text-center rounded-b-lg border border-t-0 border-gray-500 p-1 -mt-1 bg-[#F9F5F1]">
            <div className="py-2 border-b border-gray-500">
              <Link href="/featuresMath/animation">
                <a>Animasi Matematika</a>
              </Link>
            </div>
            <div className="py-2">
              <Link href="/featuresPhy/animation">
                <a>Animasi Fisika</a>
              </Link>
            </div>
          </Disclosure.Panel>
        </Disclosure>
        {/* scan */}
        <Disclosure as="div">
          <Disclosure.Button className=" text-center py-3 bg-black text-white focus:outline-none font-medium  w-full hover:bg-white border border-black hover:text-black rounded-md">
            Scan
          </Disclosure.Button>
          <Disclosure.Panel className="text-center rounded-b-lg border border-t-0 border-gray-500 p-1 -mt-1 bg-[#F9F5F1]">
            <div className="py-2 border-b border-gray-500">
              <Link href="/featuresMath/scan">
                <a>Scan Matematika</a>
              </Link>
            </div>
            <div className="py-2">
              <Link href="/featuresPhy/scan">
                <a>Scan Fisika</a>
              </Link>
            </div>
          </Disclosure.Panel>
        </Disclosure>
      </section>
    </main>
  );
}
