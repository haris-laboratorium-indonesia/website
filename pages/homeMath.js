import ChapterBox from "../components/ChapterBox";
import { HiOutlineCamera } from "react-icons/hi";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { HiOutlineCalculator } from "react-icons/hi";
import { HiOutlineColorSwatch } from "react-icons/hi";
import Link from "next/link";

export default function homeMath() {
  return (
    <main>
      {/* features */}
      <h1 className="font-semibold text-2xl mb-1">Tools</h1>
      <section className="grid grid-cols-1 sm:grid-cols-4 divide-y divide-gray-400 sm:divide-y-0">
        <article className="group hover:bg-black  flex items-center hover:rounded-md px-2 py-1 ">
          <HiOutlineCalculator className="group-hover:text-white w-6 h-6 text-black mr-2" />
          <Link href="featuresMath/calculator">
            <a className="w-full truncate group-hover:text-white">Kalkulator</a>
          </Link>
        </article>
        <article className="group hover:bg-black  flex items-center hover:rounded-md px-2 py-1">
          <HiOutlineColorSwatch className="group-hover:text-white w-6 h-6 text-black mr-2" />
          <Link href="featuresMath/flashCard">
            <a className="w-full truncate group-hover:text-white">Flash Card</a>
          </Link>
        </article>
        <article className="group hover:bg-black  flex items-center hover:rounded-md px-2 py-1">
          <HiOutlinePresentationChartLine className="group-hover:text-white w-6 h-6 text-black mr-2" />
          <Link href="featuresMath/animation">
            <a className="w-full truncate group-hover:text-white">Animasi</a>
          </Link>
        </article>
        <article className="group hover:bg-black  flex items-center hover:rounded-md px-2 py-1">
          <HiOutlineCamera className="group-hover:text-white w-6 h-6 text-black mr-2" />
          <Link href="featuresMath/scan">
            <a className="w-full truncate group-hover:text-white">Scan</a>
          </Link>
        </article>
      </section>

      {/* chapters */}
      <h1 className="font-semibold text-2xl mb-1 mt-5 text-[#007aff]">
        Matematika
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-4 divide-y divide-gray-400 sm:divide-y-0">
        <ChapterBox title="Lingkaran" toPage="ChapterMath/linear" />
        <ChapterBox title="Integral Tentu" toPage="ChapterMath/linear" />
        <ChapterBox title="Integral Tak Tentu" toPage="ChapterMath/linear" />
        <ChapterBox title="Linear" toPage="ChapterMath/linear" />
        <ChapterBox title="Kuadrat" toPage="ChapterMath/linear" />
        <ChapterBox title="Suku Banyak" toPage="ChapterMath/linear" />
        <ChapterBox title="Matriks" toPage="ChapterMath/linear" />
        <ChapterBox title="Transformasi Geometri" toPage="ChapterMath/linear" />
        <ChapterBox title="Geometri" toPage="ChapterMath/linear" />
        <ChapterBox title="Trigonometri" toPage="ChapterMath/linear" />
        <ChapterBox title="Logaritma" toPage="ChapterMath/linear" />
        <ChapterBox title="Eksponen" toPage="ChapterMath/linear" />
        <ChapterBox title="Turunan" toPage="ChapterMath/linear" />
        <ChapterBox title="Limit" toPage="ChapterMath/linear" />
        <ChapterBox title="Dimensi 3" toPage="ChapterMath/linear" />
        <ChapterBox title="Vektor" toPage="ChapterMath/linear" />
        <ChapterBox title="Barisan" toPage="ChapterMath/linear" />
        <ChapterBox title="Deret" toPage="ChapterMath/linear" />
        <ChapterBox title="Statistika" toPage="ChapterMath/linear" />
        <ChapterBox title="Peluang" toPage="ChapterMath/linear" />
      </section>
    </main>
  );
}
