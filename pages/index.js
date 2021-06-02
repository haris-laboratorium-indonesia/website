import Link from "next/link";
import Image from "next/image";
import Icons from "../components/Icons";
import FAQ from "../components/FAQ";
import { HiOutlineCamera } from "react-icons/hi";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { HiOutlineCalculator } from "react-icons/hi";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { HiOutlineBookOpen } from "react-icons/hi";
import { HiOutlinePuzzle } from "react-icons/hi";
import { weCareAbouts } from "../lib/weCareAbouts";
import { FAQs } from "../lib/FAQs";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className=" flex justify-center bg-gradient-to-b from-gray-100 to-white">
        <section className=" gap-5 grid grid-cols-1 sm:grid-cols-2 max-w-5xl mx-auto py-10 sm:py-5">
          <article className="w-full px-5 py-3 lg:pl-0 sm:py-10">
            <div className="w-full text-center sm:text-left text-4xl sm:text-4xl font-mw">
              <span className=" font-extrabold ">Pelajari Sains</span>{" "}
              <span className="py-2 font-normal">
                sebagaimana mereka seharusnya dipelajari.
              </span>
            </div>
            <div className="flex mt-7 justify-center sm:justify-start">
              <Link href="/math/homeMath">
                <a className="rounded-full text-center  w-2/3 sm:w-1/2 px-5 py-3 sm:py-2.5 bg-blue-harislab text-white hover:bg-opacity-90 hover:shadow-inner shadow-hero">
                  Belajar Sekarang
                </a>
              </Link>
            </div>
          </article>
          <article className="px-5 py-5 sm:pr-0 sm:p-10 grid grid-cols-4 sm:grid-cols-3 gap-4">
            <Icons to="/math/homeMath" name="Belajar">
              <HiOutlineBookOpen className="w-7 h-7" />
            </Icons>
            <Icons to="/flashCardMath" name="Card">
              <HiOutlineColorSwatch className="w-7 h-7" />
            </Icons>
            <Icons to="/calculatorMath" name="Kalkulator">
              <HiOutlineCalculator className="w-7 h-7" />
            </Icons>
            <Icons to="/animationMath" name="Animasi">
              <HiOutlinePresentationChartLine className="w-7 h-7" />
            </Icons>
            <Icons to="/scanMath" name="Scan">
              <HiOutlineCamera className="w-7 h-7" />
            </Icons>
            <Icons to="/gamesMath" name="Games">
              <HiOutlinePuzzle className="w-7 h-7" />
            </Icons>
          </article>
        </section>
      </section>

      {/* Bagaimana kami menyajikan informasi ?*/}
      <header className="w-2/3 sm:w-full text-center text-gray-400 mb-10 mt-20 sm:mb-2 py-3 max-w-5xl mx-auto">
        Bagaimana kami menyajikan informasi ?
      </header>
      {/* Framework */}
      <section className="  max-w-5xl mx-auto space-y-5 sm:space-y-0 flex flex-col sm:flex-row justify-between items-center  px-5 sm:px-0">
        <div className="w-full sm:w-1/2">
          <div className="text-4xl font-semibold mb-2 font-mw">Framework</div>
          <div className="text-lg">
            Di HarisLab, semua bab pelajaran dibuat sebuah struktur informasi
            sedemikia rupa agar mudah diingat. Sehingga kita bisa berekspektasi
            kepada setiap bab nya, bahwa ini yang akan kita pelajari. Coba dan
            rasakan kemudahannya.
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <Image
            src="/Framework.svg"
            height="650px"
            width="881px"
            layout="intrinsic"
            priority
          />
        </div>
      </section>

      {/* Kami peduli tentang */}
      <header className="text-center font-light text-gray-400 mb-10 mt-20  py-3 max-w-5xl mx-auto">
        Kami Peduli Tentang
      </header>
      <section className=" max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 px-5 sm:px-0">
        {weCareAbouts.map((weCareAbout) => (
          <div key={weCareAbout.id}>
            {/* icon */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={weCareAbout.svg}
                />
              </svg>
            </div>
            {/* Name */}
            <div className="my-2">
              <Link href={weCareAbout.CTALink}>
                <a className="text-gray-700 hover:underline text-xl font-semibold font-mw">
                  {weCareAbout.CTAName}
                </a>
              </Link>
            </div>
            {/* description */}
            <div className="text-gray-600">{weCareAbout.description}</div>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <header className="text-center font-light text-gray-400 mb-10 mt-20 max-w-5xl mx-auto py-3">
        FAQ
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 px-5 sm:px-0 max-w-5xl mx-auto ">
        {FAQs.map((FAQs) => (
          <FAQ button={FAQs.button} panel={FAQs.panel} />
        ))}
      </section>
    </>
  );
}
