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
import { HiOutlineChevronRight } from "react-icons/hi";
import { weCareAbouts } from "../lib/weCareAbouts";
import { FAQs } from "../lib/FAQs";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="flex justify-center bg-gradient-to-b from-gray-200 to-white">
        <section className="grid max-w-4xl grid-cols-1 gap-5 py-10 mx-auto sm:grid-cols-2">
          <article className="w-full px-5 py-3 lg:px-0 sm:py-10">
            <div className="w-full text-4xl text-center lg:text-6xl sm:text-left font-inter">
              <span className="font-bold ">Pelajari sains</span>{" "}
              <span className="py-2 text-3xl leading-snug tracking-tighter lg:text-5xl">
                sebagaimana mereka seharusnya dipelajari.
              </span>
            </div>
            <div className="flex justify-center mt-7 sm:justify-start">
              <Link href="/math/homeMath">
                <a className="rounded-lg text-center  w-2/3 sm:w-1/2 px-5 py-3 sm:py-2.5 bg-blue-harislab text-white hover:bg-opacity-90  ">
                  Belajar Sekarang
                </a>
              </Link>
            </div>
          </article>
          <article className="grid content-start grid-cols-4 gap-5 px-5 py-5 lg:gap-y-14 sm:pr-0 sm:p-10 sm:grid-cols-3">
            <Icons to="/math/homeMath" name="Belajar">
              <HiOutlineBookOpen className="text-gray-700 w-7 h-7 lg:h-10 lg:w-10" />
            </Icons>
            <Icons to="/flashCardMath" name="Card">
              <HiOutlineColorSwatch className="text-gray-700 w-7 h-7 lg:h-10 lg:w-10" />
            </Icons>
            <Icons to="/calculatorMath" name="Kalkulator">
              <HiOutlineCalculator className="text-gray-700 w-7 h-7 lg:h-10 lg:w-10" />
            </Icons>
            <Icons to="/animationMath" name="Animasi">
              <HiOutlinePresentationChartLine className="text-gray-700 w-7 h-7 lg:h-10 lg:w-10" />
            </Icons>
            <Icons to="/scanMath" name="Scan">
              <HiOutlineCamera className="text-gray-700 w-7 h-7 lg:h-10 lg:w-10" />
            </Icons>
            <Icons to="/gamesMath" name="Games">
              <HiOutlinePuzzle className="text-gray-700 w-7 h-7 lg:h-10 lg:w-10" />
            </Icons>
          </article>
        </section>
      </section>

      <div className="py-10 space-y-10 sm:space-y-5">
        {/* Bagaimana kami menyajikan informasi ?*/}
        <header className="mb-10 text-sm text-center sm:text-base">
          Bagaimana kami menyajikan informasi ?
        </header>
        {/* Framework */}
        <section className="flex flex-col items-center justify-between max-w-4xl px-5 mx-auto space-y-5 font-inter sm:space-y-0 sm:flex-row lg:px-0">
          <div className="w-full space-y-3 sm:w-2/3">
            <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text">
              Framework
            </div>
            <div className="text-lg font-medium">
              Di HarisLab, semua bab pelajaran dibuat sebuah struktur informasi
              sedemikia rupa agar mudah diingat. Sehingga kita bisa
              berekspektasi kepada setiap bab nya, bahwa ini yang akan kita
              pelajari. Coba dan rasakan kemudahannya.
            </div>
            <div className="text-blue-harislab hover:underline">
              <Link href="/menyajikanInformasi">
                <a>
                  Selengkapnya <HiOutlineChevronRight className="inline" />
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full sm:w-1/3">
            <Image
              src="/Framework.svg"
              height="1000px"
              width="1000px"
              layout="responsive"
              priority
            />
          </div>
        </section>

        {/* Auto Learning */}
        <section className="flex flex-col items-center justify-between max-w-4xl px-5 mx-auto mt-10 space-y-5 font-inter sm:space-y-0 sm:flex-row-reverse lg:px-0 sm:mt-0">
          <div className="w-full space-y-3 sm:w-2/3">
            <div className="text-4xl font-bold text-transparent bg-gradient-to-tr from-red-500 to-yellow-400 bg-clip-text">
              Auto Learning
            </div>
            <div className="text-lg font-medium">
              HarisLab didesain agar siapapun terutama murid agar bisa belajar
              mandiri tanpa guru, bahkan tanpa buku panduan. Di sini kalian bisa
              mendapatkan materi apapun, menggunakan kalkulator, men-track
              progress belajar, bahkan kalian bisa mengenerate animasi dari
              soal.
            </div>
            <div className="text-blue-harislab hover:underline">
              <Link href="/menyajikanInformasi">
                <a>
                  Selengkapnya <HiOutlineChevronRight className="inline" />
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full sm:w-1/3">
            <Image
              src="/Framework.svg"
              height="1000px"
              width="1000px"
              layout="responsive"
              priority
            />
          </div>
        </section>
        
        {/* Project-Base Learning */}
        <section className="flex flex-col items-center justify-between max-w-4xl px-5 mx-auto space-y-5 font-inter sm:space-y-0 sm:flex-row lg:px-0">
          <div className="w-full space-y-3 sm:w-2/3">
            <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
              Project-Base Learning
            </div>
            <div className="text-lg font-medium">
              Project-Base learning berarti kalian diberi masalah dulu baru
              menggunakan semua materi pelajaran di 'Belajar' untuk
              menyelesaikan masalah. Ini meningkatkan sense of utility yang
              selama ini hilang di pendidikan SMA fisika dan matematika di
              Indonesia, murid sering bilang "ini gunanya buat apa ?", kita
              kalimat seperti itu akan jarang terlihat di HarisLab.
            </div>
            <div className="text-blue-harislab hover:underline">
              <Link href="/menyajikanInformasi">
                <a>
                  Selengkapnya <HiOutlineChevronRight className="inline" />
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full sm:w-1/3">
            <Image
              src="/Framework.svg"
              height="1000px"
              width="1000px"
              layout="responsive"
              priority
            />
          </div>
        </section>
      </div>

      <div className="px-5 py-10 lg:px-0 bg-gray-50">
        {/* Kami peduli tentang */}
        <header className="mb-10 text-center ">Kami Peduli Tentang</header>
        <section className="grid max-w-4xl grid-cols-1 gap-10 mx-auto sm:grid-cols-3 md:grid-cols-4 ">
          {weCareAbouts.map((weCareAbout) => (
            <div key={weCareAbout.id}>
              {/* icon */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-blue-harislab"
                  responsive="none"
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
                  <a className="text-xl font-semibold text-gray-700 hover:underline">
                    {weCareAbout.CTAName}
                  </a>
                </Link>
              </div>
              {/* description */}
              <div className="text-gray-600">{weCareAbout.description}</div>
            </div>
          ))}
        </section>
      </div>
      <div className="py-10 ">
        {/* FAQ */}
        <header className="max-w-4xl py-3 mx-auto my-10 text-center ">
          FAQ
        </header>
        <section className="grid max-w-4xl grid-cols-1 gap-5 px-5 mx-auto sm:gap-5 lg:px-0 ">
          {FAQs.map((FAQs) => (
            <div key={FAQs.id}>
              <FAQ button={FAQs.button} panel={FAQs.panel} />
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
