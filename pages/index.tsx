import Link from 'next/link';
import FAQ from '../components/FAQ';
import InfoBox from '../components/InfoBox';
import { FAQs } from '../lib/FAQs';
import { weCareAbouts } from '../lib/weCareAbouts';
import { sendInformations } from '../lib/sendInformations';
import Layout from '../components/Layout';
import { RightArrow } from '@/Icons';

const Beranda = () => {
  const tr: string = 'divide-y divide-x divide-blue-500';
  const td: string = ' text-left text-sm p-2';
  const th: string = 'p-2 text-left text-base font-medium text-blue-500 bg-blue-50';

  return (
    <Layout browserTitle="Beranda" description="Laboratorium untuk Pelajar.">
      {/* Hero */}
      <section className="relative z-40 flex flex-col w-full py-10 bg-white border-b border-gray-400 sm:pt-24 sm:pb-0 lg:px-0 font-inter">
        <p className="mb-5 text-4xl font-bold leading-tight text-center sm:text-6xl">
          Pengganti{' '}
          <span>
            <Link href="/matematika">
              <a> buku paket,</a>
            </Link>
          </span>{' '}
          <span>
            <Link href="/bimbel">
              <a> guru les,</a>
            </Link>
          </span>
          <span>
            <Link href="/kalkulator">
              <a> kalkulator,</a>
            </Link>
          </span>{' '}
          <span>
            <Link href="/kartu">
              <a> flash card</a>
            </Link>
          </span>{' '}
          {/* <span className="text-harislab">untuk Pelajar</span> */}
        </p>

        <div className="text-lg leading-tight text-center sm:mb-12">
          Laboratorium untuk pelajar dalam memahami matematika dan fisika yang lebih terstruktur.
        </div>
        <Link href="/signUp">
          <a className="flex items-center justify-center w-full mt-5 text-lg hover:underline text-harislab sm:mt-0 sm:my-12">
            Pelajari lebih lanjut
            <RightArrow color="" />
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
            <InfoBox key={a.id} svg={a.svg} name={a.title} description={a.description} />
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
            <InfoBox key={a.id} svg={a.svg} name={a.title} description={a.description} />
          ))}
        </section>
      </div>

      <div className="py-10 border-b border-gray-400 ">
        <div className="mb-10 text-center font-mw">
          Website ini di desain dengan prinsip yang ada pada sumber berikut :
        </div>
        <div className="grid grid-cols-1 gap-5 font-medium text-center sm:grid-cols-2">
          <a
            className="p-2 text-white duration-200 border rounded-md hover:drop-shadow-none drop-shadow-xl bg-cyan-500 hover:bg-white hover:text-cyan-500 border-cyan-500 "
            href="https://www.tailwindcss.com"
            target="_blank"
          >
            Tailwind CSS
          </a>
          <a
            className="p-2 text-white duration-200 bg-red-500 border border-red-500 rounded-md hover:drop-shadow-none drop-shadow-xl hover:bg-white hover:text-red-500"
            href="https://www.nngroup.com"
            target="_blank"
          >
            NNGroup
          </a>
          <a
            className="p-2 text-white duration-200 bg-gray-800 border border-gray-800 rounded-md hover:drop-shadow-none drop-shadow-xl hover:bg-white hover:text-gray-800"
            href="https://developer.apple.com"
            target="_blank"
          >
            Apple Developer
          </a>
          <a
            className="p-2 text-white duration-200 border rounded-md hover:drop-shadow-none drop-shadow-xl bg-amber-500 border-amber-500 hover:bg-white hover:text-amber-500"
            href="https://www.lawsofux.com"
            target="_blank"
          >
            Laws of UX
          </a>
        </div>
      </div>

      {/* HarisLab vs Zenius vs Ruangguru vs Buku Paket*/}
      <div className="py-10 border-b border-gray-400 ">
        <header className="mb-10 tracking-wide text-center font-mw">
          HarisLab vs Zenius vs Ruangguru
        </header>
        <section className="mx-auto overflow-x-auto sm:gap-5 lg:px-0">
          <table className="w-full overflow-hidden border border-cyan-500">
            <thead>
              <tr className={tr}>
                <th className={th}></th>
                <th className={th}>HarisLab</th>
                <th className={th}>Zenius</th>
                <th className={th}>Ruangguru</th>
                <th className={th}>Buku Paket</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyan-500">
              <tr className={tr}>
                <td className={td}>Harga</td>
                <td className={td}>25rb/bln</td>
                <td className={td}>50rb/bln</td>
                <td className={td}>80rb/bln</td>
                <td className={td}>200rb/bln</td>
              </tr>
              <tr className={tr}>
                <td className={td}>Update Informasi</td>
                <td className={td}>Selalu Update</td>
                <td className={td}>Selalu Update</td>
                <td className={td}>Selalu Update</td>
                <td className={td}>Tidak Update</td>
              </tr>
              <tr className={tr}>
                <td className={td}>Durabilitas</td>
                <td className={td}>Aman</td>
                <td className={td}>Aman</td>
                <td className={td}>Aman</td>
                <td className={td}>Mudah rusak jika terkena air dan tekanan</td>
              </tr>
              <tr className={tr}>
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
      <div className="py-10">
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
