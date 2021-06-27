import Link from "next/link";
import FAQ from "../components/FAQ";
import InfoBox from "../components/InfoBox";
import { FAQs } from "../lib/FAQs";
import { weCareAbouts } from "../lib/weCareAbouts";
import { sendInformations } from "../lib/sendInformations";
import Layout from "../components/Layout";
import { RightArrow } from "@/Icons";
const Beranda = () => {
  const td = " text-left text-sm p-2";
  const th = "p-2 text-left text-base font-medium text-blue-500 bg-blue-50";

  return (
    <Layout browserTitle="Beranda" description="Laboratorium untuk Pelajar.">
      {/* Hero */}
      <section className="relative z-40 flex flex-col w-full py-10 bg-white border-b border-gray-400 lg:px-0 font-inter">
        <p className="mb-5 text-4xl font-bold leading-tight text-left sm:text-6xl sm:text-center">
          Pengganti{" "}
          <span>
            <Link href="/matematika">
              <a> buku paket,</a>
            </Link>
          </span>{" "}
          <span>
            <Link href="/bimbel">
              <a> guru les,</a>
            </Link>
          </span>
          <span>
            <Link href="/kalkulator">
              <a> kalkulator,</a>
            </Link>
          </span>{" "}
          <span>
            <Link href="/kartu">
              <a> flash card</a>
            </Link>
          </span>{" "}
          <span className="text-harislab">untuk Pelajar</span>
        </p>

        <div className="mb-5 text-lg leading-tight text-left sm:text-center">
          Laboratorium untuk memahami matematika dan fisika yang lebih
          terstruktur.
        </div>
        <Link href="/signUp">
          <a className="flex items-center w-full text-lg justify-left sm:justify-center hover:underline text-harislab">
            Pelajari lebih lanjut
            <RightArrow />
          </a>
        </Link>
      </section>

      {/* Cara kami menyajikan informasi */}
      <div className="py-10 border-b border-gray-400 ">
        <header className="mb-10 tracking-wide text-center text-gray-600 font-mw ">
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
      <div className="py-10 border-b border-gray-400 ">
        <header className="mb-10 tracking-wide text-center text-gray-600 font-mw">
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
      <div className="py-10 border-b border-gray-400 ">
        <header className="mb-10 tracking-wide text-center font-mw">
          HarisLab vs Zenius vs Ruangguru
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
                <td className={td}>Mudah rusak jika terkena air dan tekanan</td>
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
      <div className="py-10 border-b border-gray-400 ">
        <header className="mb-10 tracking-wide text-center font-mw">
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
    </Layout>
  );
};

export default Beranda;

// link ke halaman ini ada di ../components/Layout.js
