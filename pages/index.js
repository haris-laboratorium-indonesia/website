import Link from "next/link";
import FAQ from "../components/FAQ";
import { weCareAbouts } from "../lib/weCareAbouts";
import { FAQs } from "../lib/FAQs";
import InfoBox from "../components/InfoBox";
import { sendInformations } from "../lib/sendInformations";

const Beranda = () => {
  const td = " text-left text-sm p-2";
  const th = "p-2 text-left text-base font-medium text-blue-500 bg-blue-50";
  return (
    <main className="">
      {/* Hero */}

      <article className="relative w-full py-5 lg:py-16 lg:px-0 font-inter ">
        <div className="text-4xl font-bold text-center text-black sm:text-6xl ">
          Laboratorium
        </div>
        <div className="text-4xl font-bold text-center text-blue-500 sm:text-6xl ">
          untuk Pelajar
        </div>
        <p className="mt-5 leading-tight text-center text-black">
          Materi FisMat, Flash Card, Kalkulator, Animasi, Scan soal, Games,
          Booking Les.
        </p>
        <div className="flex justify-center mt-5 ">
          <Link href="/signUp">
            <a className="rounded-lg text-center w-1/2 sm:w-1/6 px-3 py-2.5 bg-blue-harislab text-white  shadow-md hover:shadow-none hover:bg-opacity-80">
              Mulai Sekarang
            </a>
          </Link>
        </div>
      </article>

      {/* Cara kami menyajikan informasi */}
      <div className="py-10 ">
        <header className="mb-10 text-center text-gray-600 ">
          Cara kami menyajikan informasi
        </header>
        <section className="grid grid-cols-1 gap-10 mx-auto sm:grid-cols-3 md:grid-cols-4 ">
          {sendInformations.map((a) => (
            <InfoBox
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
            <InfoBox
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
            <thead>
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
                <td className={td}>Mudah rusak jika terkena air dan tekanan</td>
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
        <header className="py-3 mx-auto my-10 text-center ">
          Frequently Asked Questions
        </header>
        <section className="grid max-w-xl grid-cols-1 gap-5 mx-auto ">
          {FAQs.map((FAQs) => (
            <div key={FAQs.id}>
              <FAQ button={FAQs.button} panel={FAQs.panel} />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Beranda;

// link ke halaman ini ada di ../components/Layout.js
