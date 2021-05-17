import Link from "next/link";
import { HiOutlineCamera } from "react-icons/hi";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { HiOutlineCalculator } from "react-icons/hi";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { HiOutlineLibrary } from "react-icons/hi";

export default function Home() {
  return (
    <main className="grid grid-cols-4 sm:grid-cols-10 gap-5 mx-auto">
      <div>
        <Link href="/learn/math/homeMath">
          <a>
            <div className="h-14 w-14 rounded-md p-3 bg-gray-100 border border-gray-200  hover:bg-[#f9f5f1] items-center">
              <HiOutlineLibrary className="w-8 h-8 " />
            </div>
          </a>
        </Link>

        <div className="text-xs mt-1 text-center w-14 ">Belajar</div>
      </div>

      <div>
        <Link href="/flashCard/flashCardMath">
          <a>
            <div className="h-14 w-14 rounded-md p-3 bg-gray-100 border border-gray-200  hover:bg-[#f9f5f1] items-center">
              <HiOutlineColorSwatch className="w-8 h-8 " />
            </div>
          </a>
        </Link>
        <div className="text-xs mt-1 text-center w-14">FlashCard</div>
      </div>

      <div>
        <Link href="/calculator/calculatorMath">
          <a>
            <div className="h-14 w-14 rounded-md p-3 bg-gray-100 border border-gray-200  hover:bg-[#f9f5f1] items-center">
              <HiOutlineCalculator className="w-8 h-8 " />
            </div>
          </a>
        </Link>
        <div className="text-xs mt-1 text-center w-14">Kalkulator</div>
      </div>

      <div>
        <Link href="/animation/animationMath">
          <a>
            <div className="h-14 w-14 rounded-md p-3 bg-gray-100 border border-gray-200  hover:bg-[#f9f5f1] items-center">
              <HiOutlinePresentationChartLine className="w-8 h-8 " />
            </div>
          </a>
        </Link>
        <div className="text-xs mt-1 text-center w-14">Animasi</div>
      </div>

      <div>
        <Link href="/scan/scanMath">
          <a>
            <div className="h-14 w-14 rounded-md p-3 bg-gray-100 border border-gray-200  hover:bg-[#f9f5f1] items-center">
              <HiOutlineCamera className="w-8 h-8 " />
            </div>
          </a>
        </Link>

        <div className="text-xs mt-1 text-center w-14">Scan</div>
      </div>
    </main>
  );
}
