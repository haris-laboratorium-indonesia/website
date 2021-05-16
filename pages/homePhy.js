import ChapterBox from "../components/ChapterBox";
import { HiOutlineCamera } from "react-icons/hi";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { HiOutlineCalculator } from "react-icons/hi";
import { HiOutlineColorSwatch } from "react-icons/hi";
import Link from "next/link";

export default function homePhy() {
  return (
    <main>
      {/* features */}
      <h1 className="font-semibold text-2xl mb-1">Tools</h1>
      <section className="grid grid-cols-1 sm:grid-cols-4 divide-y divide-gray-400 sm:divide-y-0">
        <div className="group hover:bg-black  flex items-center hover:rounded px-2 py-1">
          <HiOutlineCalculator className="group-hover:text-white w-6 h-6 text-black mr-2" />
          <Link href="featuresMath/calculator">
            <a className="w-full truncate group-hover:text-white">Kalkulator</a>
          </Link>
        </div>
        <div className="group hover:bg-black  flex items-center hover:rounded px-2 py-1">
          <HiOutlineColorSwatch className="group-hover:text-white w-6 h-6 text-black mr-2" />
          <Link href="featuresMath/flashCard">
            <a className="w-full truncate group-hover:text-white">Flash Card</a>
          </Link>
        </div>
        <div className="group hover:bg-black  flex items-center hover:rounded px-2 py-1">
          <HiOutlinePresentationChartLine className="group-hover:text-white w-6 h-6 text-black mr-2" />
          <Link href="featuresMath/animation">
            <a className="w-full truncate group-hover:text-white">Animasi</a>
          </Link>
        </div>
        <div className="group hover:bg-black  flex items-center hover:rounded px-2 py-1">
          <HiOutlineCamera className="group-hover:text-white w-6 h-6 text-black mr-2" />
          <Link href="featuresMath/scan">
            <a className="w-full truncate group-hover:text-white">Scan</a>
          </Link>
        </div>
      </section>

      {/* chapters */}
      <h1 className="font-semibold text-2xl mb-1 mt-5 text-[#ff2d55]">
        Fisika
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-4 divide-y divide-gray-400 sm:divide-y-0">
        <ChapterBox title="Fluida Statis" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Fluida Dinamis" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Termodinamika" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Gelombang Mekanik" toPage="ChapterPhy/fluida" />
        <ChapterBox
          title="Gelombang Elektromagnetik"
          toPage="ChapterPhy/fluida"
        />
        <ChapterBox title="Kinematika" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Dinamika" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Kesetimbangan" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Besaran & Pengukuran" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Radiasi Benda Hitam" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Relativitas Khusus" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Kuantum" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Inti" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Magnet" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Listrik Statis" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Listrik Dinamis" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Gelombang Bunyi" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Optik" toPage="ChapterPhy/fluida" />
      </section>
    </main>
  );
}
