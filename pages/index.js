import Link from 'next/link'
import FAQ from '../components/FAQ'
import InfoBox from '../components/InfoBox'
import { FAQs } from '../lib/FAQs'
import { weCareAbouts } from '../lib/weCareAbouts'
import { sendInformations } from '../lib/sendInformations'
import Layout from '../components/Layout'
import { RightArrow } from '@/Icons'
import stackblitz from '../public/stackblitz.png'
import Image from 'next/image'

const Beranda = () => {
  const td = ' text-left text-sm p-2'
  const th = 'p-2 text-left text-base font-medium text-blue-500 bg-blue-50'

  return (
    <Layout title="Beranda" description="Laboratorium untuk Pelajar.">
      {/* Hero */}
      <section className="relative w-full py-10 sm:py-20 lg:px-0 font-inter  flex flex-col border-b border-gray-300">
        <p className="text-4xl font-bold sm:text-6xl mb-5 text-left sm:text-center leading-tight">
          Pengganti{' '}
          <span>
            <Link href="/matematika">
              <a className="underline hover:no-underline duration-200"> buku paket</a>
            </Link>
          </span>
          ,{' '}
          <span>
            <Link href="/les">
              <a className="underline hover:no-underline duration-200"> guru les</a>
            </Link>
          </span>
          ,
          <span>
            <Link href="/kalkulator">
              <a className="underline hover:no-underline duration-200"> kalkulator</a>
            </Link>
          </span>
          ,{' '}
          <span>
            <Link href="/kartu">
              <a className="underline hover:no-underline duration-200"> flash card</a>
            </Link>
          </span>{' '}
          <span className="text-harislab">untuk Pelajar</span>
        </p>

        <div className="leading-tight mb-5 text-lg text-left sm:text-center">
          Laboratorium untuk memahami matematika dan fisika yang lebih terstruktur.
        </div>
        <Link href="/signUp">
          <a className="w-full justify-left sm:justify-center text-lg hover:underline text-harislab  flex items-center">
            Pelajari lebih lanjut
            <RightArrow />
          </a>
        </Link>
      </section>
      {/* <section>
        <Image src={stackblitz} alt="Hero" placeholder="blur" layout="responsive" priority />
      </section> */}
      {/* Cara kami menyajikan informasi */}
      <div className="py-14 sm:py-20 border-b border-gray-300">
        <header className="mb-10 text-center font-mw tracking-wide text-gray-600 ">
          Cara kami menyajikan informasi
        </header>
        <section className="grid grid-cols-1 gap-10 mx-auto sm:grid-cols-3 md:grid-cols-4 ">
          {sendInformations.map((a) => (
            <InfoBox key={a.id} svg={a.svg} name={a.title} description={a.description} />
          ))}
        </section>
      </div>
      {/* Kami peduli tentang */}
      <div className="py-14 sm:py-20 border-b border-gray-300">
        <header className="mb-10 text-center font-mw tracking-wide text-gray-600">Kami Peduli Tentang</header>
        <section className="grid grid-cols-1 gap-10 mx-auto sm:grid-cols-3 md:grid-cols-4 ">
          {weCareAbouts.map((a) => (
            <InfoBox key={a.id} svg={a.svg} name={a.title} description={a.description} />
          ))}
        </section>
      </div>
      {/* HarisLab vs Zenius vs Ruangguru vs Buku Paket*/}
      <div className="py-14 sm:py-20 border-b border-gray-300">
        <header className=" mb-10 text-center font-mw tracking-wide ">HarisLab vs Zenius vs Ruangguru</header>
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
      <div className="py-14 sm:py-20 border-b border-gray-300">
        <header className="  mb-10 text-center font-mw tracking-wide ">Frequently Asked Questions</header>
        <section className="grid max-w-xl grid-cols-1 gap-5 mx-auto ">
          {FAQs.map((FAQs) => (
            <div key={FAQs.id}>
              <FAQ button={FAQs.button} panel={FAQs.panel} />
            </div>
          ))}
        </section>
      </div>
    </Layout>
  )
}

export default Beranda

// link ke halaman ini ada di ../components/Layout.js
