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
import { SayaPeduliTentang, CaraSayaMenyampaikanInformasi, isiFAQ } from '../data/Beranda';

export default function Beranda() {
  const tr: string = 'divide-y divide-x divide-cyan-500';
  const td: string = ' text-left text-sm p-2';
  const th: string = 'p-2 text-left text-base font-medium text-cyan-500 bg-cyan-50';

  return (
    <Layout browserTitle='Beranda' description='Laboratorium untuk Pelajar.'>
      {/* Hero */}
      <section className='grid grid-cols-1 gap-10 mt-10 mb-32 border-b border-gray-400 md:pb-0 sm:pb-5 sm:gap-5 sm:mb-60 sm:grid-cols-2'>
        <section className='flex flex-col items-center justify-center '>
          <div className='text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-landingPage lg:leading-tight '>
            Tempat untuk referensi, kalkulasi, animasi, bimbel matematika dan fisika.
          </div>
          <div className='mt-2 mb-5 text-gray-700'>
            Penuhi kebutuhan matematika dan fisika kalian dari jenjang sd hingga kuliah di Haris
            Laboratory.
          </div>

          <div className='grid w-full grid-cols-1 gap-3 sm:gap-5 sm:grid-cols-2'>
            <Link href='/#fitur'>
              <a className='py-2.5 text-center text-white rounded-md bg-harislab hover:bg-opacity-80'>
                Lihat fitur
              </a>
            </Link>
            <Link href='/#support'>
              <a className='py-2.5 text-center border rounded-md border-harislab text-harislab hover:bg-blue-50 '>
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
      <div id='fitur' className='mb-32 sm:mb-60 '>
        <div className='mb-10 text-2xl font-semibold text-left text-gray-800 sm:text-3xl'>
          Yang bisa kalian lakukan di sini.{' '}
          <span className='text-gray-500'>Referensi, Kalkulasi, Animasi, Bimbel.</span>
        </div>

        <section className='grid grid-cols-1 gap-10 mx-auto sm:gap-5 sm:grid-cols-2 lg:grid-cols-4 '>
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
      </div>

      {/* Cara kami menyajikan informasi */}
      <div className='mb-32 sm:mb-60 '>
        <div className='mb-10 text-2xl font-semibold text-left text-gray-800 sm:text-3xl'>
          Cara kami menyajikan informasi.{' '}
          <span className='text-gray-500'>
            Arsitektur informasi yang didesain untuk pengalaman belajar terbaik.
          </span>
        </div>

        <section className='grid grid-cols-1 gap-10 mx-auto sm:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
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
      </div>

      {/* Kami peduli tentang */}
      <div className='mb-32 sm:mb-60 '>
        <div className='mb-10 text-2xl font-semibold text-left text-gray-800 sm:text-3xl'>
          Kami Peduli.{' '}
          <span className='text-gray-500'>
            Tentang bagaimana arsitektur informasi menunjang kemampuan pelajar dalam belajar.
          </span>
        </div>

        <section className='grid grid-cols-1 gap-10 mx-auto sm:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
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
      </div>

      {/* HarisLab vs Zenius vs Ruangguru vs Buku Paket*/}
      <div className='mb-32 sm:mb-60 '>
        <div className='mb-10 text-2xl font-semibold text-left text-gray-800 sm:text-3xl'>
          Perbandingan.{' '}
          <span className='text-gray-500'>HarisLab vs Zenius vs Ruangguru vs Wikipedia</span>
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
      </div>

      <Inspirasi />

      <div id='support'>
        <Support />
      </div>

      {/* FAQ */}
      <div className='mb-32 sm:mb-60'>
        <div className='mb-10 text-2xl font-semibold text-left text-gray-800 sm:text-3xl'>
          Frequently Asked Questions.{' '}
          <span className='text-gray-500'>Pertanyaan-pertanyaan yang sering ditanyakan.</span>
        </div>
        <section className='grid grid-cols-1 gap-5 sm:grid-cols-2 '>
          {isiFAQ.map(a => (
            <div key={a.id}>
              <FAQ button={a.button} panel={a.panel} />
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
}

const WhatWhatYouCanDo = [
  {
    title: 'Referensi',
    svg: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    to: '/referensi',
    fiturs: [{ fitur: 'Baca Materi' }, { fitur: 'Contoh Soal' }, { fitur: 'Penurunan Rumus' }],
    desc: 'Sumber informasi matematika dan fisika dari jenjang sd sampai sma. Dilengkapi dengan fitur rumus, penurunan rumus, dan contoh soal serta konstanta-konstanta yang lengkap.',
  },
  {
    title: 'Kalkulasi',
    svg: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
    to: '/kalkulasi',
    fiturs: [
      { fitur: 'Kalkulator Klasik' },
      { fitur: 'Kalkulator Saintifik' },
      { fitur: 'Kalkulator Rumus' },
    ],
    desc: 'Dalam proses belajar, siswa membutuhkan perhitungan yang cepat dan akurat. Dalam bidang sains, tidak hanya kalkulator biasa, namun kita juga butuh kalkulator saintifik dan kalkulator rumus.',
  },
  {
    title: 'Animasi',
    svg: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
    to: '/animasi',
    fiturs: [{ fitur: 'Les ke rumah' }, { fitur: 'Booking Les' }, { fitur: 'Paket Les' }],
    desc: 'Tidak semua guru kompeten mengajar,sehingga banyak murid mendatangkan guru bimbel ke rumahnya. Kamu bisa pesan bimbel ke rumah dari HarisLab dengan mudah dan nyaman.',
  },
  {
    title: 'Bimbel',
    svg: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    to: '/bimbel',
    fiturs: [{ fitur: 'Les ke rumah' }, { fitur: 'Booking Les' }, { fitur: 'Paket Les' }],
    desc: 'Tidak semua guru kompeten mengajar,sehingga banyak murid mendatangkan guru bimbel ke rumahnya. Kamu bisa pesan bimbel ke rumah dari HarisLab dengan mudah dan nyaman.',
  },
];
