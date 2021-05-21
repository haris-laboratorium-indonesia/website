import Link from "next/link";
import { HiOutlineCamera } from "react-icons/hi";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { HiOutlineCalculator } from "react-icons/hi";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { HiOutlineBookOpen } from "react-icons/hi";

export default function Home() {
  return (
    <>
      <section className="mb-10 bg-gray-100 -m-5 space-y-5 py-10 border-b">
        <div className="text-center text-2xl sm:text-3xl font-bold w-5/6 sm:w-1/2 mx-auto ">
          Pelajari Fisika dan Matematika <span className="text-blue-500">
            sebagaimana mereka seharusnya
            dipelajari.
          </span>
        </div>
        <div className="flex flex-col sm:flex-row justify-center w-2/3 sm:1/2 mx-auto space-y-5 sm:space-y-0 sm:space-x-5">
          <Link href="/learn/math/homeMath">
            <a className="rounded-md p-2 sm:py-1.5 bg-black hover:bg-white border border-black hover:text-black text-white text-center">
              Belajar Matematika
            </a>
          </Link>
          <Link href="/learn/phy/homePhy">
            <a className="rounded-md p-2 sm:py-1.5 bg-black hover:bg-white border border-black hover:text-black text-white text-center">
              Belajar Fisika
            </a>
          </Link>
        </div>
      </section>
      <div className="text-center text-gray-500 my-5">Atau coba fitur lainnya</div>
      <main className="grid grid-cols-4 sm:grid-cols-5 sm:w-2/3 gap-5 mx-auto ">
        <div className="mx-auto">
          <Link href="/learn/math/homeMath">
            <a>
              <div className="h-15 w-15 rounded-md p-3 bg-gray-100 border border-gray-200  hover:bg-white items-center">
                <HiOutlineBookOpen className="w-8 h-8 " />
              </div>
            </a>
          </Link>

          <div className="text-xs mt-1 text-center w-14 ">Belajar</div>
        </div>

        <div className="mx-auto">
          <Link href="/flashCard/flashCardMath">
            <a>
              <div className="h-15 w-15 rounded-md p-3 bg-gray-100 border border-gray-200  hover:bg-white items-center">
                <HiOutlineColorSwatch className="w-8 h-8 " />
              </div>
            </a>
          </Link>
          <div className="text-xs mt-1 text-center w-14">FlashCard</div>
        </div>

        <div className="mx-auto">
          <Link href="/calculator/calculatorMath">
            <a>
              <div className="h-15 w-15 rounded-md p-3 bg-gray-100 border border-gray-200  hover:bg-white items-center">
                <HiOutlineCalculator className="w-8 h-8 " />
              </div>
            </a>
          </Link>
          <div className="text-xs mt-1 text-center w-14">Kalkulator</div>
        </div>

        <div className="mx-auto">
          <Link href="/animation/animationMath">
            <a>
              <div className="h-15 w-15 rounded-md p-3 bg-gray-100 border border-gray-200  hover:bg-white items-center">
                <HiOutlinePresentationChartLine className="w-8 h-8 " />
              </div>
            </a>
          </Link>
          <div className="text-xs mt-1 text-center w-14">Animasi</div>
        </div>

        <div className="mx-auto">
          <Link href="/scan/scanMath">
            <a>
              <div className="h-15 w-15 rounded-md p-3 bg-gray-100 border border-gray-200  hover:bg-white items-center">
                <HiOutlineCamera className="w-8 h-8 " />
              </div>
            </a>
          </Link>

          <div className="text-xs mt-1 text-center w-14">Scan</div>
        </div>
      </main>
    </>
  );
}
