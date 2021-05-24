import Link from "next/link";
import { HiOutlineCamera } from "react-icons/hi";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { HiOutlineCalculator } from "react-icons/hi";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { HiOutlineBookOpen } from "react-icons/hi";

export default function Home() {
  return (
    <> 
    {/* "@mdx-js/loader": "^0.15.7",
    "@mdx-js/react": "^1.6.22",
    "@next/mdx": "^10.2.2", */}
      <section className="mb-10 bg-gray-50 -m-5 py-10 border-b">
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
      <div className="text-center text-gray-500 my-5">
        Atau coba fitur lainnya
      </div>
      <main className="grid grid-cols-4 sm:grid-cols-5 sm:w-2/3 gap-5 mx-auto ">
        <div className="mx-auto">
          <Link href="/learn/math/homeMath">
            <a>
              <div className="h-14 w-14 rounded-xl shadow-md p-3 hover:bg-gray-100 border border-gray-400 items-center justify-center">
                <HiOutlineBookOpen
                  className="w-7 h-7 text-gray-700  "
                  strokeWidth={1}
                />
              </div>
            </a>
          </Link>

          <div className="text-xs mt-1 text-center w-14 ">Belajar</div>
        </div>

        <div className="mx-auto">
          <Link href="/flashCard/flashCardMath">
            <a>
              <div className="h-15 w-15 rounded-xl shadow-md p-3 hover:bg-gray-100 border border-gray-400 items-center">
                <HiOutlineColorSwatch className="w-7 h-7 text-gray-700 " />
              </div>
            </a>
          </Link>
          <div className="text-xs mt-1 text-center w-14">FlashCard</div>
        </div>

        <div className="mx-auto">
          <Link href="/calculator/calculatorMath">
            <a>
              <div className="h-15 w-15 rounded-xl shadow-md p-3 hover:bg-gray-100 border border-gray-400 items-center">
                <HiOutlineCalculator className="w-7 h-7 text-gray-700 " />
              </div>
            </a>
          </Link>
          <div className="text-xs mt-1 text-center w-14">Kalkulator</div>
        </div>

        <div className="mx-auto">
          <Link href="/animation/animationMath">
            <a>
              <div className="h-15 w-15 rounded-xl shadow-md p-3 hover:bg-gray-100 border border-gray-400 items-center">
                <HiOutlinePresentationChartLine className="w-7 h-7 text-gray-700 " />
              </div>
            </a>
          </Link>
          <div className="text-xs mt-1 text-center w-14">Animasi</div>
        </div>

        <div className="mx-auto">
          <Link href="/scan/scanMath">
            <a>
              <div className="h-15 w-15 rounded-xl shadow-md p-3 hover:bg-gray-100 border border-gray-400 items-center">
                <HiOutlineCamera className="w-7 h-7 text-gray-700 " />
              </div>
            </a>
          </Link>

          <div className="text-xs mt-1 text-center w-14">Scan</div>
        </div>
      </main>
      <div className="min-h-screen"></div>
    </>
  );
}
