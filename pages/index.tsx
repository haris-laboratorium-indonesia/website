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
import { InternalLink } from '@/components/DesignSystem';
import InfoBoxFitur from '@/components/InfoBoxFitur';

export default function Beranda() {
  const BerandaTitle = 'mb-7 text-4xl font-bold text-center  text-gray-700 space-y-2 ';
  const subBerandaTitle = 'text-2xl font-normal text-gray-500';
  const wrapper = 'mb-32 sm:mb-40';
  const sectionBox =
    'grid grid-cols-1 gap-5 mx-auto xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 xs:px-0';
  const tr = 'border-b border-gray-600 divide-x divide-gray-600';
  const td = ' text-left text-sm p-2';
  const th = 'p-2 text-left text-base font-medium text-gray-800 bg-gray-200';

  return (
    <Layout browserTitle='Beranda' description='Laboratorium untuk Pelajar.'>
      <section className='flex flex-col items-center justify-center py-16 space-y-5 xs:py-20'>
        {/* <div className='text-gray-700 '>Welcome to</div> */}
        <div className='w-20 h-20 rounded-full shadow'>
          <Image src={logo} height={150} width={152} priority />
        </div>
        <div className='text-5xl font-bold text-center text-gray-700 xs:space-x-2'>
          Haris Laboratory
        </div>
        <div className='flex flex-col w-full text-2xl text-center text-gray-600 xs:text-3xl md:w-4/5'>
          Pelajari Matematika dan Fisika secara komperhensif
        </div>
        <div className='flex flex-col items-center justify-center w-full mx-auto space-y-4 md:w-2/3 lg:w-1/2 md:space-y-0 md:space-x-2 lg:space-x-4 md:flex-row'>
          <Link href='/'>
            <a className='flex flex-row items-center justify-center w-2/3 py-2 pl-4 pr-3 space-x-1 font-medium text-gray-100 duration-100 bg-blue-600 rounded-full shadow md:w-1/2 hover:bg-blue-700 hover:shadow-none active:ring-2 active:ring-blue-300 lg:w-auto'>
              Coba gratis sekarang
              <RightArrow />
            </a>
          </Link>
          <Link href='/'>
            <a className='flex flex-row items-center justify-center w-2/3 py-2 pl-4 pr-3 space-x-1 font-medium text-blue-500 duration-100 bg-white border border-gray-300 rounded-full shadow md:w-1/2 hover:bg-opacity-70 hover:shadow-none active:ring-2 active:ring-blue-300 lg:w-auto'>
              Selengkapnya
              <RightArrowAbout />
            </a>
          </Link>
        </div>
      </section>

      <div className='w-1/2 mx-auto mb-20 border-b border-gray-400'></div>

      {/* Fitur */}
      <section id='fitur' className={wrapper}>
        <div className={BerandaTitle}>
          <div>
            Yang bisa kalian lakukan di{' '}
            <span className='font-mw'>
              <span className='text-gray-700'>Haris</span>
              <span className='text-gray-500'>Lab</span>
            </span>
          </div>
          <div className={subBerandaTitle}>Store, Calculator, Tutoring, Math, and Physics.</div>
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

      <div className='w-1/2 mx-auto mb-20 border-b border-gray-400'></div>

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

      <div className='w-1/2 mx-auto mb-20 border-b border-gray-400'></div>

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

      <div className='w-1/2 mx-auto mb-20 border-b border-gray-400'></div>

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

      {/* Try Haris Lab for free */}
      <div className='flex flex-col items-center justify-center space-y-5'>
        <div className='text-3xl font-bold text-center text-gray-700'>
          Coba{' '}
          <span className='underline font-mw'>
            <span className='text-gray-600'>Haris</span>
            <span className='text-gray-500'>Lab</span>
          </span>{' '}
          sekarang
        </div>
        <div className='mx-auto text-xl text-center text-gray-600 sm:w-1/2'>
          Mulai gratis dan gunakan fitur advance ketika ketika level pelajaranmu meningkat.
        </div>

        <Link href='/'>
          <a className='flex flex-row items-center py-2 pl-4 pr-3 space-x-1 font-medium text-gray-100 duration-300 bg-blue-600 rounded-full shadow hover:bg-blue-700 hover:shadow-none active:ring-2 active:ring-blue-300'>
            Coba gratis sekarang
            <RightArrow />
          </a>
        </Link>
      </div>
    </Layout>
  );
}

const RightArrow = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-5 h-5 pt-0.5 text-gray-200 sm:pt-0 '
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
    </svg>
  );
};

const RightArrowAbout = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-5 h-5 pt-0.5 text-blue-400 sm:pt-0 '
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
    </svg>
  );
};
