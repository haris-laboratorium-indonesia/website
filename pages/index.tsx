import Link from 'next/link';
import Image from 'next/image';
import FAQ from '../components/FAQ';
import InfoBox from '../components/InfoBox';
import Layout from '../components/Layout';
import Support from '@/components/Support';
import GambarBeranda from '../public/Img.svg';

import {
  SayaPeduliTentang,
  CaraSayaMenyampaikanInformasi,
  isiFAQ,
  WhatWhatYouCanDo,
} from '../data/Beranda';

export default function Beranda() {
  const BerandaTitle =
    'mb-5 text-xl font-semibold text-center xs:text-left text-gray-600 xs:w-4/5 ';
  const wrapper = 'mb-32 sm:mb-40';
  const sectionBox =
    'grid grid-cols-1 gap-5 mx-auto xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-5 xs:px-0';

  const tr: string = 'border-b border-blue-500 divide-x divide-blue-500';
  const td: string = ' text-left text-sm p-2';
  const th: string = 'p-2 text-left text-base font-medium text-blue-700 bg-blue-100';

  return (
    <Layout browserTitle='Beranda' description='Laboratorium untuk Pelajar.'>
      {/* Hero */}
      <section className='grid grid-cols-1 gap-10 mt-10 mb-32 border-b border-gray-400 md:pb-0 sm:pb-5 sm:gap-5 sm:grid-cols-2'>
        <section className='flex flex-col items-center justify-center '>
          <div className='text-4xl font-extrabold leading-tight text-center text-gray-700 sm:text-left sm:text-5xl sm:leading-tight'>
            Belajar matematika dan fisika online. Kalkulator. Tutor ke rumah.
          </div>
          <div className='w-full mt-2 mb-5 text-center text-gray-700 sm:text-left'>
            SD sampai dengan SMA.
          </div>

          <div className='grid w-full grid-cols-2 gap-3 sm:gap-5'>
            <Link href='/#fitur'>
              <a className='py-2 text-center text-white border rounded-md bg-harislab border-harislab hover:bg-opacity-80'>
                Fitur
              </a>
            </Link>
            <Link href='/#support'>
              <a className='py-2 text-center border rounded-md border-harislab text-harislab hover:bg-blue-50 '>
                Dukung
              </a>
            </Link>
          </div>
        </section>
        <section className='flex items-center justify-center'>
          <Image src={GambarBeranda} width={400} height={400} priority />
        </section>
      </section>

      {/* Fitur */}
      <section id='fitur' className={wrapper}>
        <div className={BerandaTitle}>
          <div>Yang bisa kalian lakukan.</div>
          <div className='text-gray-400'>Store, Matematika, Fisika, Kalkulator, Bimbel.</div>
        </div>

        <section className={sectionBox}>
          {WhatWhatYouCanDo.map(a => (
            <InfoBox
              key={a.title}
              svg={a.svg}
              to={a.to}
              name={a.title}
              description={a.desc}
              color='text-[#FF2D55]'
              // fitur={a.fiturs.map(b => (
              // <FiturBox key={b.fitur} fitur={b.fitur} />
              // ))}
            />
          ))}
        </section>
      </section>

      {/* Cara kami menyajikan informasi */}
      <section className={wrapper}>
        <div className={BerandaTitle}>
          <div>Cara kami menyajikan informasi.</div>
          <div className='text-gray-400'>Agar informasi yang tersedia mudah dipahami.</div>
        </div>
        <section className={sectionBox}>
          {CaraSayaMenyampaikanInformasi.map(a => (
            <InfoBox
              key={a.id}
              svg={a.svg}
              name={a.title}
              description={a.description}
              color='text-[#FF9500]'
              to='/tentang'
            />
          ))}
        </section>
      </section>

      {/* Kami peduli tentang */}
      <section className={wrapper}>
        <div className={BerandaTitle}>
          <div>Kami Peduli.</div>
          <div className='text-gray-400'>
            Hubungan arsitektur informasi dan kemampuan pelajar belajar.
          </div>
        </div>

        <section className={sectionBox}>
          {SayaPeduliTentang.map(a => (
            <InfoBox
              key={a.id}
              svg={a.svg}
              name={a.title}
              description={a.description}
              color='text-emerald-500'
              to='/haris'
            />
          ))}
        </section>
      </section>

      {/* HarisLab vs Zenius vs Ruangguru vs Buku Paket*/}
      <section className={wrapper}>
        <div className={BerandaTitle}>
          <div>Perbandingan.</div>
          <div className='text-gray-400'>HarisLab vs Zenius vs Ruangguru vs Wikipedia</div>
        </div>
        <section className='mx-auto overflow-x-auto sm:gap-5 lg:px-0'>
          <table className='w-full overflow-hidden border border-blue-500'>
            <thead>
              <tr className={tr}>
                <th className={th}>vs</th>
                <th className={th}>HarisLab</th>
                <th className={th}>Zenius</th>
                <th className={th}>Ruangguru</th>
                <th className={th}>Pahamify</th>
                <th className={th}>Wikipedia</th>
                <th className={th}>Buku Paket</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-cyan-500'>
              <tr className={tr}>
                <td className={td}>Harga</td>
                <td className={td}>25rb/bln</td>
                <td className={td}>50rb/bln</td>
                <td className={td}>80rb/bln</td>
                <td className={td}>200rb/bln</td>
                <td className={td}>Aman</td>
                <td className={td}>Aman</td>
              </tr>
              <tr className={tr}>
                <td className={td}>Update Informasi</td>
                <td className={td}>Selalu Update</td>
                <td className={td}>Selalu Update</td>
                <td className={td}>Selalu Update</td>
                <td className={td}>Tidak Update</td>
                <td className={td}>Aman</td>
                <td className={td}>Aman</td>
              </tr>
              <tr className={tr}>
                <td className={td}>Durabilitas</td>
                <td className={td}>Aman</td>
                <td className={td}>Aman</td>
                <td className={td}>Aman</td>
                <td className={td}>Mudah rusak</td>
                <td className={td}>Aman</td>
                <td className={td}>Aman</td>
              </tr>
              <tr className={tr}>
                <td className={td}>Mobilitas</td>
                <td className={td}>Mudah dibawa</td>
                <td className={td}>Mudah dibawa</td>
                <td className={td}>Mudah dibawa</td>
                <td className={td}>Sulit dibawa </td>
                <td className={td}>Aman</td>
                <td className={td}>Aman</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>

      <Support />

      {/* FAQ */}
      <section className={wrapper}>
        <div className={BerandaTitle}>
          <div>Frequently Asked Questions.</div>
          <div className='text-gray-400'>Pertanyaan-pertanyaan yang sering ditanyakan.</div>
        </div>
        <section className='grid grid-cols-1 gap-5 xs:grid-cols-2'>
          {isiFAQ.map(a => (
            <FAQ key={a.id} button={a.button} panel={a.panel} />
          ))}
        </section>
      </section>
    </Layout>
  );
}
