import Link from 'next/link';
import FAQ from '../components/FAQ';
import InfoBox from '../components/InfoBox';
import Layout from '../components/Layout';
import Support from '@/components/Support';
import Inspirasi from '@/components/Inspirasi';
import Image from 'next/image';

import { isiFAQ } from '../data/Beranda';
import { SayaPeduliTentang } from '../data/Beranda';
import { CaraSayaMenyampaikanInformasi } from '../data/Beranda';
import TextSlider from '@/components/delba/TextSlider';

export default function Beranda() {
  const tr: string = 'divide-y divide-x divide-cyan-500';
  const td: string = ' text-left text-sm p-2';
  const th: string = 'p-2 text-left text-base font-medium text-cyan-500 bg-cyan-50';

  return (
    <Layout browserTitle='Beranda' description='Laboratorium untuk Pelajar.'>
      {/* Hero */}
      <section className='relative z-40 flex flex-col w-full mt-20 mb-20 sm:mb-60 font-inter'>
        <TextSlider slides={['Referensi.', 'Kalkulasi.', 'Animasi.']} />
        <div className='my-5 text-lg leading-tight text-center text-gray-700 sm:text-xl'>
          Tempat terbaik untuk <span className='underline'>referensi</span>,{' '}
          <span className='underline'>kalkulasi</span>, <span className='underline'>animasi</span>{' '}
          Matematika dan Fisika.
        </div>
        <div className='grid w-4/5 grid-cols-1 gap-4 mx-auto sm:grid-cols-2 md:w-1/2'>
          <Link href='/#fitur'>
            <a className='inline-block px-6 py-2 text-lg text-center text-white duration-200 rounded-md hover:bg-opacity-80 bg-harislab '>
              Lihat fitur
            </a>
          </Link>
          <Link href='/#support'>
            <a className='inline-block px-6 py-2 text-lg text-center text-gray-700 duration-200 border border-gray-700 rounded-md cursor-pointer hover:border-gray-400 hover:text-gray-500 '>
              Dukung kami
            </a>
          </Link>
        </div>
      </section>

      {/* Fitur */}
      <div id='fitur' className='mb-32 sm:mb-60 '>
        <div className='text-2xl font-bold text-left sm:text-center sm:text-4xl bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 trns'>
          Apa yang bisa kalian lakukan di HarisLab ?
        </div>
        <div className='mt-2 mb-10 text-left text-gray-600 sm:text-center '>
          Referensi, Kalkulasi, Animasi, Bimbel.
        </div>

        <section className='grid grid-cols-1 mx-auto gap-7 sm:gap-5 sm:grid-cols-2 md:grid-cols-3 '>
          {WhatYouCanDo.map(a => (
            <YouCanDo
              key={a.title}
              title={a.title}
              img={a.img}
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
        <div className='text-2xl font-bold text-left sm:text-center sm:text-4xl bg-gradient-to-r from-pink-600 via-fuschsia-600 to-purple-600 trns'>
          Cara kami menyajikan informasi
        </div>
        <div className='mt-2 mb-10 text-left text-gray-600 sm:text-center '>
          Arsitektur informasi yang didesain untuk pengalaman belajar terbaik.
        </div>

        <section className='grid grid-cols-1 gap-10 mx-auto sm:grid-cols-3 md:grid-cols-4 '>
          {CaraSayaMenyampaikanInformasi.map(a => (
            <InfoBox
              key={a.id}
              svg={a.svg}
              name={a.title}
              description={a.description}
              color='text-pink-600'
              borderColor='border-pink-600'
              to='/haris'
            />
          ))}
        </section>
      </div>

      {/* Kami peduli tentang */}
      <div className='mb-32 sm:mb-60 '>
        <header className='text-2xl font-bold text-left sm:text-center bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 trns sm:text-4xl'>
          Kami Peduli Tentang
        </header>
        <div className='mt-2 mb-10 text-left text-gray-600 sm:text-center'>
          Bagaimana arsitektur informasi menunjang kemampuan pelajar dalam belajar.
        </div>

        <section className='grid grid-cols-1 gap-10 mx-auto sm:grid-cols-3 md:grid-cols-4 '>
          {SayaPeduliTentang.map(a => (
            <InfoBox
              key={a.id}
              svg={a.svg}
              name={a.title}
              description={a.description}
              color='text-green-600'
              borderColor='border-green-600'
              to='/haris'
            />
          ))}
        </section>
      </div>

      {/* HarisLab vs Zenius vs Ruangguru vs Buku Paket*/}
      <div className='mb-32 sm:mb-60 '>
        <header className='mb-10 text-2xl font-bold text-left sm:text-center bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 sm:text-4xl trns'>
          HarisLab vs Zenius vs Ruangguru
        </header>
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

      {/* FAQ */}
      <div className='mb-32 sm:mb-60'>
        <header className='mb-10 text-2xl font-bold text-left text-gray-800 sm:text-center sm:text-4xl'>
          Frequently Asked Questions
        </header>
        <section className='grid max-w-xl grid-cols-1 gap-5 mx-auto '>
          {isiFAQ.map(a => (
            <div key={a.id}>
              <FAQ button={a.button} panel={a.panel} />
            </div>
          ))}
        </section>
      </div>

      <div id='support'>
        <Support />
      </div>
    </Layout>
  );
}

const WhatYouCanDo = [
  {
    title: 'Matematika',
    img: '/public/fisika/GelombangElektromagnetikImage.jpg',
    fiturs: [{ fitur: 'Baca Materi' }, { fitur: 'Contoh Soal' }, { fitur: 'Penurunan Rumus' }],
    desc: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: 'Fisika',
    img: '/public/fisika/GelombangElektromagnetikImage.jpg',
    fiturs: [{ fitur: 'Baca Materi' }, { fitur: 'Contoh Soal' }, { fitur: 'Penurunan Rumus' }],
    desc: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: 'Kartu',
    img: '/public/fisika/GelombangElektromagnetikImage.jpg',
    fiturs: [{ fitur: 'Baca Materi' }, { fitur: 'Contoh Soal' }, { fitur: 'Penurunan Rumus' }],
    desc: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: 'Kalkulator',
    img: '/public/fisika/GelombangElektromagnetikImage.jpg',
    fiturs: [
      { fitur: 'Kalkulator Klasik' },
      { fitur: 'Kalkulator Saintifik' },
      { fitur: 'Kalkulator Rumus' },
    ],
    desc: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: 'Bimbel',
    img: '/public/fisika/GelombangElektromagnetikImage.jpg',
    fiturs: [{ fitur: 'Les ke rumah' }, { fitur: 'Booking Les' }, { fitur: 'Paket Les' }],
    desc: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

const YouCanDo = ({ img, title, fitur, desc }) => {
  return (
    <Link href='/#fitur'>
      <a className={`w-full p-4 duration-300 rounded-xl bg-gray-50 shadow-xl `}>
        <div className='flex flex-row items-end space-x-2'>
          <div className={`bg-gray-500 rounded w-7 h-7`}></div>
          <div className='text-xl font-semibold'>{title}</div>
        </div>
        <div className='mt-4 mb-5 text-gray-600 text-tiny'>{desc}</div>
        <div className='flex justify-between mb-1'>
          <div className='text-sm font-semibold text-gray-500 '>Fitur Utama</div>
          <Link href='/#fitur'>
            <a className='text-sm text-gray-600 hover:underline'>Selengkapnya</a>
          </Link>
        </div>
        <div className='flex flex-col space-y-2'>{fitur}</div>
      </a>
    </Link>
  );
};

const FiturBox = ({ fitur }) => {
  return (
    <Link href='/design'>
      <a className='flex flex-row items-center justify-between p-2 duration-100 bg-white rounded-lg shadow hover:shadow-none hover:bg-gray-300 hover:translate-y-0.5 group'>
        <div className='flex space-x-2'>
          <div className={`w-6 h-6 bg-gray-400 rounded group-hover:bg-gray-500`}></div>
          <div className='text-gray-700 text-tiny'>{fitur}</div>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-5 h-5 text-gray-500'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9 5l7 7-7 7' />
        </svg>
      </a>
    </Link>
  );
};
