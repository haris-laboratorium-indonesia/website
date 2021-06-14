import Link from "next/link";
import FAQ from "../components/FAQ";

import { weCareAbouts } from "../lib/weCareAbouts";
import { FAQs } from "../lib/FAQs";
import WeCareAbout from "../components/WeCareAbout";
import { sendInformation } from "../lib/sendInformation";

export default function Home() {
  const tableColor = "bg-blue-100 text-blue-500 text-center";
  return (
    <main className="">
      {/* Hero */}
      <section className="flex justify-center mt-11">
        <section className="grid grid-cols-1 gap-5 py-5 mx-auto">
          <article className="w-full py-3 lg:px-0 sm:py-10 font-inter ">
            <div className="text-4xl font-bold text-center sm:text-6xl ">
              Laboratorium
            </div>
            <div className="text-4xl font-bold text-center sm:text-6xl ">
              untuk pelajar
            </div>
            <p className="mt-5 text-lg leading-tight text-center ">
              Materi FisMat, Flash Card, Kalkulator, Animasi, Scan soal, Games,
              Booking Les.
            </p>

            <div className="flex justify-center mt-5 ">
              <Link href="/signUp">
                <a className="rounded-lg text-center  w-5/6 sm:w-1/2  py-3 sm:py-2.5 bg-blue-harislab text-white  shadow-md hover:shadow-none hover:bg-opacity-80">
                  Daftar Sekarang
                </a>
              </Link>
            </div>
          </article>
        </section>
      </section>

      {/* Cara kami menyajikan informasi */}
      <div className="py-10 ">
        <header className="mb-10 text-center ">
          Cara kami menyajikan informasi
        </header>
        <section className="grid grid-cols-1 gap-10 mx-auto sm:grid-cols-3 md:grid-cols-4 ">
          {sendInformation.map((a) => (
            <WeCareAbout
              key={a.id}
              name={a.title}
              description={a.description}
            />
          ))}
        </section>
      </div>

      {/* Kami peduli tentang */}
      <div className="py-10 ">
        <header className="mb-10 text-center ">Kami Peduli Tentang</header>
        <section className="grid grid-cols-1 gap-10 mx-auto sm:grid-cols-3 md:grid-cols-4 ">
          {weCareAbouts.map((a) => (
            <WeCareAbout
              key={a.id}
              name={a.title}
              description={a.description}
            />
          ))}
        </section>
      </div>

      {/* HarisLab vs Zenius vs Ruangguru vs Buku Paket*/}
      <div className="py-10 ">
        <header className="py-3 mx-auto my-10 text-center ">
          harislab vs zenius vs ruangguru
        </header>
        <section className="grid grid-cols-1 gap-5 mx-auto sm:gap-5 lg:px-0 ">
          <table className="overscroll-x-auto">
            <thead>
              <tr className="divide-x divide-blue-300">
                <th>vs</th>
                <th>HarisLab</th>
                <th>Zenius</th>
                <th>Ruangguru</th>
                <th>Buku Paket</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-blue-300">
              <tr>
                <td className={tableColor}>Harga</td>
                <td className={tableColor}>25rb/bln</td>
                <td className={tableColor}>50rb/bln</td>
                <td className={tableColor}>80rb/bln</td>
                <td className={tableColor}>200rb/bln</td>
              </tr>
              <tr>
                <td className={tableColor}>Update Informasi</td>
                <td className={tableColor}>Selalu Update</td>
                <td className={tableColor}>Selalu Update</td>
                <td className={tableColor}>Selalu Update</td>
                <td className={tableColor}>Tidak Update</td>
              </tr>
              <tr>
                <td className={tableColor}>Durabilitas</td>
                <td className={tableColor}>Aman</td>
                <td className={tableColor}>Aman</td>
                <td className={tableColor}>Aman</td>
                <td className={tableColor}>
                  Mudah rusak jika terkena air dan tekanan
                </td>
              </tr>
              <tr>
                <td className={tableColor}>Mobilitas</td>
                <td className={tableColor}>Mudah dibawa</td>
                <td className={tableColor}>Mudah dibawa</td>
                <td className={tableColor}>Mudah dibawa</td>
                <td className={tableColor}>Sulit dibawa </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      {/* FAQ */}
      <div className="py-10 ">
        <header className="py-3 mx-auto my-10 text-center ">FAQ</header>
        <section className="grid grid-cols-1 gap-5 mx-auto sm:gap-5 lg:px-0 ">
          {FAQs.map((FAQs) => (
            <div key={FAQs.id}>
              <FAQ button={FAQs.button} panel={FAQs.panel} />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

// link ke halaman ini ada di ../components/Layout.js
