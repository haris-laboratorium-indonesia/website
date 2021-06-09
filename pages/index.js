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
import WeCareAbout from "../components/WeCareAbout";

export default function Home() {
  const tableColor = "bg-blue-100 text-blue-500 text-center";
  return (
    <>
      {/* Hero */}
      <section className="flex justify-center bg-gradient-to-b from-gray-200 to-white">
        <section className="grid max-w-4xl grid-cols-1 gap-5 py-5 mx-auto sm:grid-cols-2">
          <article className="w-full px-5 py-3 space-y-5 lg:px-0 sm:py-10 font-inter">
            <p className="block text-4xl font-bold text-center sm:text-5xl sm:text-left">
              Laboratorium untuk pelajar.
            </p>
            <p className="text-lg leading-tight text-center sm:text-xl sm:text-left">
              Materi FisMat, Flash Card, Kalkulator, Animasi, Scan soal, Games,
              Booking Les.
            </p>

            <div className="flex justify-center mt-7 sm:justify-start">
              <Link href="/signUp">
                <a className="rounded-lg text-center  w-2/3 sm:w-1/2 px-5 py-3 sm:py-2.5 bg-blue-harislab text-white  shadow-md hover:shadow-none hover:bg-opacity-80">
                  Daftar Sekarang
                </a>
              </Link>
            </div>
          </article>
          <article className="grid grid-cols-4 gap-5 px-5 py-5 justify-items-center sm:pr-0 sm:p-10 sm:grid-cols-3">
            <Icons to="/math/homeMath" name="Materi">
              <HiOutlineBookOpen className="text-gray-700 w-7 h-7 lg:h-10 lg:w-10" />
            </Icons>
            <Icons to="/flashCardMath" name="Kartu">
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
            <Icons to="/gamesMath" name="Permainan">
              <HiOutlinePuzzle className="text-gray-700 w-7 h-7 lg:h-10 lg:w-10" />
            </Icons>
          </article>
        </section>
      </section>

      {/* Bagaimana kami menyajikan informasi ?*/}
      <section className="py-10 space-y-20 sm:space-y-5">
        <header className="mb-10 text-sm text-center sm:text-base">
          Bagaimana kami menyajikan informasi ?
        </header>
        {/* Kerangka Kerja */}
        <section className="flex flex-col items-center justify-between max-w-4xl px-5 mx-auto space-y-5 font-inter sm:space-y-0 sm:flex-row lg:px-0">
          <div className="w-full space-y-3 sm:w-2/3">
            <div className="text-4xl font-bold ">
              Kerangka Kerja
            </div>
            <div className="text-lg">
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

        {/* Belajar Mandiri */}
        <section className="flex flex-col items-center justify-between max-w-4xl px-5 mx-auto mt-10 space-y-5 font-inter sm:space-y-0 sm:flex-row-reverse lg:px-0 sm:mt-0">
          <div className="w-full space-y-3 sm:w-2/3">
            <div className="text-4xl font-bold ">
              Belajar Mandiri
            </div>
            <div className="text-lg">
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
              src="/AutoLearning.svg"
              height="1000px"
              width="1000px"
              layout="responsive"
              priority
            />
          </div>
        </section>

        {/* Belajar Berdasarkan Proyek */}
        <section className="flex flex-col items-center justify-between max-w-4xl px-5 mx-auto space-y-5 font-inter sm:space-y-0 sm:flex-row lg:px-0">
          <div className="w-full space-y-3 sm:w-2/3">
            <div className="text-4xl font-bold ">
              Belajar Berdasarkan Proyek
            </div>
            <div className="text-lg">
              Belajar berdasarkan proyek (Project-Base Learning) berarti kalian
              diberi masalah dulu baru menggunakan semua materi pelajaran di
              'Belajar' untuk menyelesaikan masalah. Ini meningkatkan sense of
              utility yang selama ini hilang di pendidikan SMA fisika dan
              matematika di Indonesia, murid sering bilang "ini gunanya buat apa
              ?", kita kalimat seperti itu akan jarang terdengar di HarisLab.
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
              src="/Project-BaseLearning.svg"
              height="1000px"
              width="1000px"
              layout="responsive"
              priority
            />
          </div>
        </section>

        {/* No Ads */}
        <section className="flex flex-col items-center justify-between max-w-4xl px-5 mx-auto mt-10 space-y-5 font-inter sm:space-y-0 sm:flex-row-reverse lg:px-0 sm:mt-0">
          <div className="w-full space-y-3 sm:w-2/3">
            <div className="text-4xl font-bold ">Tanpa Iklan</div>
            <div className="text-lg">
              Cukup sudah kamu melihat iklan dimana-mana, di internet, di sosial
              media, di youtube, di jalanan, sekarang waktunya fokus belajar,
              kita tau kalian benci iklan, begitupun kami, maka dari itu,
              HarisLab tanpa iklan, tentu tidak nyaman bukan ketika sedang
              enak-enak baca tiba-tiba muncul konten yang gak berhubungan dengan
              apa yang kita pelajari ?, kami menghargai perhatian anda, sumber
              daya terpenting kedua setelah waktu.
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
              src="/NoAds.svg"
              height="1000px"
              width="1000px"
              layout="responsive"
              priority
            />
          </div>
        </section>
      </section>

      {/* Kami peduli tentang */}
      <div className="px-5 py-10 lg:px-0 bg-gray-50">
        <header className="mb-10 text-center ">Kami Peduli Tentang</header>
        <section className="grid max-w-4xl grid-cols-1 gap-10 mx-auto sm:grid-cols-3 md:grid-cols-4 ">
          {weCareAbouts.map((weCareAbout) => (
            <WeCareAbout
              key={weCareAbout.id}
              svg={weCareAbout.svg}
              name={weCareAbout.name}
              description={weCareAbout.description}
            />
          ))}
        </section>
      </div>

      {/* harislab vs zenius vs ruangguru */}
      <div className="py-10 ">
        <header className="max-w-4xl py-3 mx-auto my-10 text-center ">
          harislab vs zenius vs ruangguru
        </header>
        <section className="grid max-w-4xl grid-cols-1 gap-5 px-5 mx-auto sm:gap-5 lg:px-0 ">
          <table>
            <thead >
              <tr className="divide-x divide-blue-300">
                <th>vs</th>
                <th>harislab</th>
                <th>zenius</th>
                <th>ruangguru</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-blue-300">
              <tr>
                <td className={tableColor}>harga</td>
                <td className={tableColor}>25rb/bln</td>
                <td className={tableColor}>50rb/bln</td>
                <td className={tableColor}>80rb/bln</td>
              </tr>
              <tr>
                <td className={tableColor}>harga</td>
                <td className={tableColor}>25rb/bln</td>
                <td className={tableColor}>50rb/bln</td>
                <td className={tableColor}>80rb/bln</td>
              </tr>
              <tr>
                <td className={tableColor}>harga</td>
                <td className={tableColor}>25rb/bln</td>
                <td className={tableColor}>50rb/bln</td>
                <td className={tableColor}>80rb/bln</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      {/* FAQ */}
      <div className="py-10 ">
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

// link ke halaman ini ada di ../components/Layout.js
