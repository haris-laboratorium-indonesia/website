import Link from 'next/link';
import Image from 'next/image';
import FAQ from '../components/FAQ';
import InfoBox from '../components/InfoBox';
import Layout from '../components/Layout';
import Support from '@/components/Support';
import GambarBeranda from '../public/Img.svg';
import logo from '../public/logo.png';
import {
  SayaPeduliTentang,
  CaraSayaMenyampaikanInformasi,
  isiFAQ,
  WhatWhatYouCanDo,
} from '../data/Beranda';
import { InternalLink } from '@/components/Materi';
import InfoBoxFitur from '@/components/InfoBoxFitur';

export default function Beranda() {
  const BerandaTitle = 'mb-7 text-4xl font-semibold text-center  text-gray-700 space-y-2 ';
  const subBerandaTitle = 'text-2xl font-normal text-gray-500';
  const wrapper = 'mb-32 sm:mb-40';
  const sectionBox =
    'grid grid-cols-1 gap-5 mx-auto xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-3 xs:px-0';
  const tr = 'border-b border-gray-600 divide-x divide-gray-600';
  const td = ' text-left text-sm p-2';
  const th = 'p-2 text-left text-base font-medium text-gray-800 bg-gray-200';

  return (
    <Layout browserTitle='Home' description='Laboratorium untuk Pelajar.'>
      <section className='flex flex-col items-center justify-center py-16 space-y-3 xs:py-20'>
        {/* <div className='text-gray-700 '>Welcome to</div> */}
        <div className='w-24 h-24 rounded-full drop-shadow-xl'>
          <Image src={logo} height={150} width={150} priority />
        </div>
        <div className='text-5xl font-bold text-center text-gray-800 xs:text-5xl xs:space-x-2'>
          Haris Laboratory
        </div>
        <div className='w-full text-2xl text-center text-gray-600 xs:text-3xl md:w-3/5'>
          Sumber referensi belajar matematika dan fisika yang komperhensif
        </div>
        <Link href='/#fitur'>
          <a className='flex items-center space-x-2 text-xl cursor-pointer text-harislab hover:underline'>
            Apa yang bisa kalian lakukan
            <RightArrow />
          </a>
        </Link>
      </section>

      <div className='w-1/2 mx-auto mb-20 border-b border-gray-500'></div>

      {/* Fitur */}
      <section id='fitur' className={wrapper}>
        <div className={BerandaTitle}>
          <div>Yang bisa kalian lakukan di sini</div>
          <div className={subBerandaTitle}>Store, Matematika, Fisika, Kalkulator, Bimbel.</div>
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

      <div className='w-1/2 mx-auto mb-20 border-b border-gray-500'></div>

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
              to='/tentang'
            />
          ))}
        </section>
      </section>

      <div className='w-1/2 mx-auto mb-20 border-b border-gray-500'></div>

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
              to='/haris'
            />
          ))}
        </section>
      </section>

      <div className='w-1/2 mx-auto mb-20 border-b border-gray-500'></div>

      {/* HarisLab vs Zenius vs Ruangguru vs Buku Paket*/}
      <section className={wrapper}>
        <div className={BerandaTitle}>
          <div>Perbandingan</div>
          <div className={subBerandaTitle}>HarisLab vs Zenius vs Ruangguru vs Wikipedia</div>
        </div>
        <section className='mx-auto overflow-x-auto sm:gap-5 lg:px-0'>
          <table className='w-full overflow-hidden border border-gray-600'>
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
    </Layout>
  );
}

const RightArrow = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-5 h-5 text-harislab'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
    </svg>
  );
};
