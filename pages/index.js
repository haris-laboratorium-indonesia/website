import Link from "next/link";
import FAQ from "../components/FAQ";
import { weCareAbouts } from "../lib/weCareAbouts";
import { FAQs } from "../lib/FAQs";
import WeCareAbout from "../components/WeCareAbout";
import { sendInformation } from "../lib/sendInformation";

export default function Home() {
  const td = " text-left text-sm p-2";
  const th = "p-2 text-left text-base font-medium text-blue-500 bg-blue-50"
  return (
    <main className="">
      {/* Hero */}
      <section className="flex justify-center">
        <section className="grid grid-cols-1 gap-5 mx-auto">
          <article className="w-full lg:px-0 sm:py-10 font-inter ">
            <div className="text-4xl font-bold text-center sm:text-6xl font-mw">
              Laboratorium
            </div>
            <div className="text-4xl font-bold text-center text-blue-400 sm:text-6xl font-mw">
              untuk Pelajar
            </div>
            <p className="mt-5 leading-tight text-center ">
              Materi FisMat, Flash Card, Kalkulator, Animasi, Scan soal, Games,
              Booking Les.
            </p>

            <div className="flex justify-center mt-5 ">
              <Link href="/signUp">
                <a className="rounded-lg text-center  w-5/6 sm:w-1/2  py-3 sm:py-2.5 bg-blue-harislab text-white  shadow-md hover:shadow-none hover:bg-opacity-80">
                  Mulai Sekarang
                </a>
              </Link>
            </div>
          </article>
        </section>
      </section>

      {/* Cara kami menyajikan informasi */}
      <div className="py-10 ">
        <header className="mb-10 text-center text-gray-600 ">
          Cara kami menyajikan informasi
        </header>
        <section className="grid grid-cols-1 gap-10 mx-auto sm:grid-cols-3 md:grid-cols-4 ">
          {sendInformation.map((a) => (
            <WeCareAbout
              key={a.id}
              svg={a.svg}
              name={a.title}
              description={a.description}
            />
          ))}
        </section>
      </div>

      {/* Kami peduli tentang */}
      <div className="py-10 ">
        <header className="my-10 text-center text-gray-600">
          Kami Peduli Tentang
        </header>
        <section className="grid grid-cols-1 gap-10 mx-auto sm:grid-cols-3 md:grid-cols-4 ">
          {weCareAbouts.map((a) => (
            <WeCareAbout
              key={a.id}
              svg={a.svg}
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
        <section className="mx-auto overflow-x-auto sm:gap-5 lg:px-0">
          <table className="w-full border border-blue-300">
            <thead >
              <tr className="divide-x divide-blue-300 ">
                <th className={th}>VS</th>
                <th className={th}>HarisLab</th>
                <th className={th}>Zenius</th>
                <th className={th}>Ruangguru</th>
                <th className={th}>Buku Paket</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-300">
              <tr className="divide-x divide-blue-300">
                <td className={td}>Harga</td>
                <td className={td}>25rb/bln</td>
                <td className={td}>50rb/bln</td>
                <td className={td}>80rb/bln</td>
                <td className={td}>200rb/bln</td>
              </tr>
              <tr className="divide-x divide-blue-300">
                <td className={td}>Update Informasi</td>
                <td className={td}>Selalu Update</td>
                <td className={td}>Selalu Update</td>
                <td className={td}>Selalu Update</td>
                <td className={td}>Tidak Update</td>
              </tr>
              <tr className="divide-x divide-blue-300">
                <td className={td}>Durabilitas</td>
                <td className={td}>Aman</td>
                <td className={td}>Aman</td>
                <td className={td}>Aman</td>
                <td className={td}>
                  Mudah rusak jika terkena air dan tekanan
                </td>
              </tr>
              <tr className="divide-x divide-blue-300">
                <td className={td}>Mobilitas</td>
                <td className={td}>Mudah dibawa</td>
                <td className={td}>Mudah dibawa</td>
                <td className={td}>Mudah dibawa</td>
                <td className={td}>Sulit dibawa </td>
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
