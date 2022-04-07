import Link from 'next/link';
import FAQ from '../components/FAQ';
import InfoBox from '../components/InfoBox';
import Layout from '../components/Layout';
import Support from '@/components/Support';
import {
  SayaPeduliTentang,
  CaraSayaMenyampaikanInformasi,
  isiFAQ,
  WhatWhatYouCanDo,
} from '../data/Beranda';
import InfoBoxFitur from '@/components/InfoBoxFitur';
import { InternalLink } from '@/components/DesignSystem';

export default function Beranda() {
  const BerandaTitle = 'mb-7 text-lg sm:text-4xl font-bold text-center  text-zinc-700 space-y-2 ';
  const subBerandaTitle = 'text-base sm:text-2xl font-normal text-zinc-500';
  const wrapper = 'mb-32 sm:mb-40';
  const sectionBox =
    'grid grid-cols-1 gap-5 mx-auto xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 xs:px-0';
  const tr = 'border-b border-zinc-600 divide-x divide-zinc-600';
  const td = ' text-left text-sm p-2';
  const th = 'p-2 text-left text-base font-medium text-zinc-800 bg-zinc-200';

  return (
    <Layout browserTitle='Beranda' description='Laboratorium untuk Pelajar.'>
      <section className='flex flex-col items-center py-16 xs:py-28 text-left sm:w-2/3 mx-auto space-y-4'>
        <div className='text-5xl text-zinc-800 font-semibold text-center'>
          Belajar matematika fisika online dan pesan bimbel
        </div>
        <div className='sm:text-lg text-zinc-600 text-center w-full'>
          Dilengkapi dengan fitur kalkulator, rumus, contoh soal, latihan soal, kontrol animasi, dan
          laporan pembelajaran.
        </div>

        {/* LINK KE BELAJAR DAN PESAN BIMBEL */}
        <div className='flex items-center justify-center flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10  w-full text-blue-500'>
          <Link href='/matematika'>
            <a className='items-center flex w-auto cursor-pointer justify-center duration-300 ease-in-out'>
              <div className='hover:underline text-lg font-medium'>Belajar online</div>
              <RightArrowBlue />
            </a>
          </Link>
          <Link href='/fisika'>
            <a className='items-center flex w-auto cursor-pointer justify-center duration-300 ease-in-out'>
              <div className='hover:underline text-lg font-medium'>Pesan bimbel</div>
              <RightArrowBlue />
            </a>
          </Link>
        </div>
      </section>

      <div className='w-full mx-auto mb-20 border-b border-zinc-100'></div>

      {/* Fitur */}
      <section id='fitur' className={wrapper}>
        <div className={BerandaTitle}>
          <div>
            Yang bisa kalian lakukan di <span className='text-zinc-700'>Haris Lab</span>
          </div>
          <div className={subBerandaTitle}>Kalkulator, Matematika, Fisika, Bimbel</div>
        </div>

        <section className={sectionBox}>
          {WhatWhatYouCanDo.map(a => (
            <InfoBoxFitur
              key={a.title}
              svg={a.svg}
              to={a.to}
              name={a.title}
              description={a.desc}
              ResultOfTheAction={a.ResultOfTheAction}
              // fitur={a.fiturs.map(b => (
              // <FiturBox key={b.fitur} fitur={b.fitur} />
              // ))}
            />
          ))}
        </section>
      </section>

      <div className='w-1/2 mx-auto mb-20 border-b border-zinc-100'></div>

      {/* Cara kami menyajikan informasi */}
      <section className={wrapper}>
        <div className={BerandaTitle}>
          <div>Cara kami menyajikan informasi</div>
          <div className={subBerandaTitle}>Agar informasi yang tersedia mudah dipahami.</div>
        </div>
        <section className={sectionBox}>
          {CaraSayaMenyampaikanInformasi.map(a => (
            <InfoBox
              key={a.id}
              svg={a.svg}
              name={a.title}
              description={a.description}
              to='/about'
            />
          ))}
        </section>
      </section>

      <div className='w-1/2 mx-auto mb-20 border-b border-zinc-100'></div>

      {/* Kami peduli tentang */}
      <section className={wrapper}>
        <div className={BerandaTitle}>
          <div>Kami peduli tentang</div>
          <div className={subBerandaTitle}>
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
              to='/about'
            />
          ))}
        </section>
      </section>

      <div className='w-1/2 mx-auto mb-20 border-b border-zinc-100'></div>

      {/* HarisLab vs Zenius vs Ruangguru vs Buku Paket*/}
      <section className={wrapper}>
        <div className={BerandaTitle}>
          <div>Perbandingan</div>
          <div className={subBerandaTitle}>HarisLab vs Zenius vs Ruangguru vs Wikipedia</div>
        </div>
        <section className='mx-auto overflow-x-auto sm:gap-5 lg:px-0'>
          <table className='w-full overflow-hidden border border-zinc-600'>
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
          <div>Frequently asked questions</div>
          <div className={subBerandaTitle}>Pertanyaan-pertanyaan yang sering ditanyakan.</div>
        </div>
        <section className='grid grid-cols-1 gap-5 xs:grid-cols-2'>
          {isiFAQ.map(a => (
            <FAQ key={a.id} button={a.button} panel={a.panel} />
          ))}
        </section>
      </section>

      {/* Try Haris Lab for free */}
      <div className='flex flex-col items-center justify-center space-y-3'>
        <div className='text-3xl font-bold text-center text-zinc-700'>Coba Haris Lab sekarang</div>
        <div className='mx-auto text-xl text-center text-zinc-500 sm:w-1/2'>
          Mulai gratis dan gunakan fitur advance ketika ketika level pelajaranmu meningkat.
        </div>

        <InternalLink name='Mulai belajar' to='/matematika' />
      </div>
    </Layout>
  );
}

const RightArrow = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-5 h-5 pt-0.5 text-zinc-200 sm:pt-0 '
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
    </svg>
  );
};

const RightArrowBlue = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-5 h-5 text-blue-500 group-hover:text-orange-600'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M9 5l7 7-7 7' />
    </svg>
  );
};
