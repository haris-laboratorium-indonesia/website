import Link from 'next/link';
import Image from 'next/image';
import FAQ from '../components/FAQ';
import InfoBox from '../components/Beranda/InfoBox';
import Layout from '../components/Layout';
import Support from '@/components/Support';
import Inspirasi from '@/components/Inspirasi';
import GambarBeranda from '../public/Img.svg';
import WhatYouCanDo from '@/components/Beranda/WhatYouCanDo';
import { FiturBox } from '@/components/Beranda/WhatYouCanDo';
import {
  SayaPeduliTentang,
  CaraSayaMenyampaikanInformasi,
  isiFAQ,
  WhatWhatYouCanDo,
} from '../data/Beranda';

export default function Beranda() {
  const BerandaTitle = 'mb-5 text-2xl font-semibold text-left text-gray-800 xs:w-4/5';
  const wrapper = 'mb-32 sm:mb-40';

  const tr: string = 'divide-y divide-x divide-cyan-500';
  const td: string = ' text-left text-sm p-2';
  const th: string = 'p-2 text-left text-base font-medium text-cyan-500 bg-cyan-50';

  return (
    <Layout browserTitle='Beranda' description='Laboratorium untuk Pelajar.'>
      {/* Hero */}
      <section className='grid grid-cols-1 gap-10 mt-10 mb-32 border-b border-gray-400 md:pb-0 sm:pb-5 sm:gap-5 sm:mb-60 sm:grid-cols-2'>
        <section className='flex flex-col items-center justify-center '>
          <div className='text-4xl font-extrabold leading-tight text-center text-gray-700 sm:text-5xl sm:leading-tight sm:text-left'>
            Matematika. Fisika. Kalkulator. Bimbel.
          </div>
          <div className='w-full mt-2 mb-5 text-center text-gray-700 sm:text-left'>
            SD sampai dengan SMA.
          </div>

          <div className='grid w-full grid-cols-1 gap-3 sm:gap-5 sm:grid-cols-2'>
            <Link href='/#fitur'>
              <a className='py-2 text-center text-white border rounded-lg bg-harislab border-harislab hover:bg-opacity-80'>
                Lihat fitur
              </a>
            </Link>
            <Link href='/#support'>
              <a className='py-2 text-center border rounded-lg border-harislab text-harislab hover:bg-blue-50 '>
                Dukung kami
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
          <div>Yang bisa kalian lakukan di sini.</div>
          <div className='text-gray-500'>Matematika, Fisika, Kalkulator, Bimbel.</div>
        </div>

        <section className='grid grid-cols-1 gap-5 mx-auto xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 '>
          {WhatWhatYouCanDo.map(a => (
            <WhatYouCanDo
              key={a.title}
              svg={a.svg}
              to={a.to}
              title={a.title}
              fitur={a.fiturs.map(b => (
                <FiturBox key={b.fitur} fitur={b.fitur} />
              ))}
              desc={a.desc}
            />
          ))}
        </section>
      </section>

      {/* Cara kami menyajikan informasi */}
      <section className={wrapper}>
        <div className={BerandaTitle}>
          <div>Cara kami menyajikan informasi.</div>
          <div className='text-gray-500'>Agar informasi yang tersedia mudah dipahami.</div>
        </div>
        <section className='grid grid-cols-1 gap-5 mx-auto xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 '>
          {CaraSayaMenyampaikanInformasi.map(a => (
            <InfoBox
              key={a.id}
              svg={a.svg}
              name={a.title}
              description={a.description}
              color='text-amber-500'
              to='/tentang'
            />
          ))}
        </section>
      </section>

      {/* Kami peduli tentang */}
      <section className={wrapper}>
        <div className={BerandaTitle}>
          <div>Kami Peduli.</div>
          <div className='text-gray-500'>
            Hubungan arsitektur informasi dan kemampuan pelajar belajar.
          </div>
        </div>

        <section className='grid grid-cols-1 gap-5 mx-auto xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 '>
          {SayaPeduliTentang.map(a => (
            <InfoBox
              key={a.id}
              svg={a.svg}
              name={a.title}
              description={a.description}
              color='text-green-500'
              to='/haris'
            />
          ))}
        </section>
      </section>

      {/* HarisLab vs Zenius vs Ruangguru vs Buku Paket*/}
      <section className={wrapper}>
        <div className={BerandaTitle}>
          <div>Perbandingan.</div>
          <div className='text-gray-500'>HarisLab vs Zenius vs Ruangguru vs Wikipedia</div>
        </div>
        <section className='mx-auto overflow-x-auto sm:gap-5 lg:px-0'>
          <table className='w-full overflow-hidden border border-cyan-500'>
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
          <div className='text-gray-500'>Pertanyaan-pertanyaan yang sering ditanyakan.</div>
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
