import Link from "next/link";
import FAQ from "../components/FAQ";
import InfoBox from "../components/InfoBox";
import { FAQs } from "../lib/FAQs";
import { weCareAbouts } from "../lib/weCareAbouts";
import { sendInformations } from "../lib/sendInformations";
import Layout from "../components/Layout";

const Beranda = () => {
  const td = " text-left text-sm p-2";
  const th = "p-2 text-left text-base font-medium text-blue-500 bg-blue-50";

  return (
    <Layout title="Beranda" description="Laboratorium untuk Pelajar.">
      <main>
        {/* Hero */}
        <article className="relative w-full py-10 lg:py-16 lg:px-0 font-inter ">
          <div className="text-4xl font-bold text-center text-black sm:text-6xl ">
            Laboratorium
          </div>
          <div className="text-4xl font-bold text-center text-harislab sm:text-6xl ">
            untuk Pelajar
          </div>
          <p className="mt-5 text-sm leading-tight text-center text-black">
            Materi FisMat, Flash Card, Kalkulator, Animasi, Scan soal, Games,
            Booking Les.
          </p>
          <Link href="/signUp">
            <a className="w-full  mt-5 flex text-center items-center justify-center  px-3 py-2.5 underline hover:no-underline text-harislab   hover:bg-opacity-80">
              Pelajari lebih lanjut
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`text-harislab w-5 h-5`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </Link>
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
            <table className="w-full border border-harislab">
              <thead>
                <tr className="divide-x divide-harislab ">
                  <th className={th}>VS</th>
                  <th className={th}>HarisLab</th>
                  <th className={th}>Zenius</th>
                  <th className={th}>Ruangguru</th>
                  <th className={th}>Buku Paket</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-harislab">
                <tr className="divide-x divide-harislab">
                  <td className={td}>Harga</td>
                  <td className={td}>25rb/bln</td>
                  <td className={td}>50rb/bln</td>
                  <td className={td}>80rb/bln</td>
                  <td className={td}>200rb/bln</td>
                </tr>
                <tr className="divide-x divide-harislab">
                  <td className={td}>Update Informasi</td>
                  <td className={td}>Selalu Update</td>
                  <td className={td}>Selalu Update</td>
                  <td className={td}>Selalu Update</td>
                  <td className={td}>Tidak Update</td>
                </tr>
                <tr className="divide-x divide-harislab">
                  <td className={td}>Durabilitas</td>
                  <td className={td}>Aman</td>
                  <td className={td}>Aman</td>
                  <td className={td}>Aman</td>
                  <td className={td}>
                    Mudah rusak jika terkena air dan tekanan
                  </td>
                </tr>
                <tr className="divide-x divide-harislab">
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
    </Layout>
  );
};

export default Beranda;

// link ke halaman ini ada di ../components/Layout.js
