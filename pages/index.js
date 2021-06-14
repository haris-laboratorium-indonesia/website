import Link from "next/link";
import FAQ from "../components/FAQ";
import { weCareAbouts } from "../lib/weCareAbouts";
import { FAQs } from "../lib/FAQs";
import WeCareAbout from "../components/WeCareAbout";
import { sendInformation } from "../lib/sendInformation";

export default function Home() {
  const table = "bg-blue-50 text-blue-500 text-center text-sm p-2";
  return (
    <main className="">
      {/* Hero */}
      <section className="flex justify-center">
        <section className="grid grid-cols-1 gap-5 py-5 mx-auto">
          <article className="w-full py-3 lg:px-0 sm:py-10 font-inter ">
            <div className="text-4xl font-bold text-center sm:text-6xl ">
              Laboratorium
            </div>
            <div className="text-4xl font-bold text-center sm:text-6xl ">
              untuk pelajar
            </div>
            <p className="mt-5 leading-tight text-center ">
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
        <header className="my-10 text-center text-gray-600 ">
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
          <table className="border border-blue-300 rounded-md">
            <thead >
              <tr className="divide-x divide-blue-300 ">
                <th className="p-2 font-medium">vs</th>
                <th className="p-2 font-medium">HarisLab</th>
                <th className="p-2 font-medium">Zenius</th>
                <th className="p-2 font-medium">Ruangguru</th>
                <th className="p-2 font-medium">Buku Paket</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-300">
              <tr className="divide-x divide-blue-300">
                <td className={table}>Harga</td>
                <td className={table}>25rb/bln</td>
                <td className={table}>50rb/bln</td>
                <td className={table}>80rb/bln</td>
                <td className={table}>200rb/bln</td>
              </tr>
              <tr className="divide-x divide-blue-300">
                <td className={table}>Update Informasi</td>
                <td className={table}>Selalu Update</td>
                <td className={table}>Selalu Update</td>
                <td className={table}>Selalu Update</td>
                <td className={table}>Tidak Update</td>
              </tr>
              <tr className="divide-x divide-blue-300">
                <td className={table}>Durabilitas</td>
                <td className={table}>Aman</td>
                <td className={table}>Aman</td>
                <td className={table}>Aman</td>
                <td className={table}>
                  Mudah rusak jika terkena air dan tekanan
                </td>
              </tr>
              <tr className="divide-x divide-blue-300">
                <td className={table}>Mobilitas</td>
                <td className={table}>Mudah dibawa</td>
                <td className={table}>Mudah dibawa</td>
                <td className={table}>Mudah dibawa</td>
                <td className={table}>Sulit dibawa </td>
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
