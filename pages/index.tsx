import Link from 'next/link';
import FAQ from '../components/FAQ';
import InfoBox from '../components/InfoBox';
import Layout from '../components/Layout';
import Support from '@/components/Support';
import Inspirasi from '@/components/Inspirasi';
import Image from 'next/image';
import { Topic, SubTopic } from '@/components/Materi';
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
        <div className='mb-10 text-2xl font-semibold text-left text-gray-800 sm:text-3xl'>
          Fitur. <span className='text-gray-500'>Referensi, Kalkulasi, Animasi, Bimbel.</span>
        </div>

        <section className='grid grid-cols-1 mx-auto gap-7 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 '>
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
        <div className='mb-10 text-2xl font-semibold text-left text-gray-800 sm:text-3xl'>
          Cara kami menyajikan informasi.{' '}
          <span className='text-gray-500'>
            Arsitektur informasi yang didesain untuk pengalaman belajar terbaik.
          </span>
        </div>

        <section className='grid grid-cols-1 gap-5 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
          {CaraSayaMenyampaikanInformasi.map(a => (
            <InfoBox
              key={a.id}
              svg={a.svg}
              name={a.title}
              description={a.description}
              color='text-pink-600'
              to='/haris'
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

        <section className='grid grid-cols-1 gap-5 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
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
    desc: 'Ilmu dasar alam semesta, tidak hanya untuk pelajaran sains alam seperti fisika dan kimia tapi juga untuk pelajaran bisnis, ekonomi, bahkan juga digunakan untuk bernalar sehari-hari.',
  },
  {
    title: 'Fisika',
    img: '/public/fisika/GelombangElektromagnetikImage.jpg',
    fiturs: [{ fitur: 'Baca Materi' }, { fitur: 'Contoh Soal' }, { fitur: 'Penurunan Rumus' }],
    desc: 'Ilmu alam yang mempelajari tentang pergerakan benda fisik dan perubahannya secara matematis. Jika ingin menjadi teknisi atau memahami alam semesta, pelajarilah fisika.',
  },
  {
    title: 'Kartu',
    img: '/public/fisika/GelombangElektromagnetikImage.jpg',
    fiturs: [{ fitur: 'Baca Materi' }, { fitur: 'Contoh Soal' }, { fitur: 'Penurunan Rumus' }],
    desc: "Sepenggal informasi yang disajikan dalam bentuk kartu yang memudahkan kita untuk menangkap informasi. Cocok untuk me-'re-call' kembali ilmu yang sudah lama dipelajari. ",
  },
  {
    title: 'Kalkulator',
    img: '/public/fisika/GelombangElektromagnetikImage.jpg',
    fiturs: [
      { fitur: 'Kalkulator Klasik' },
      { fitur: 'Kalkulator Saintifik' },
      { fitur: 'Kalkulator Rumus' },
    ],
    desc: 'Dalam proses belajar, siswa membutuhkan perhitungan yang cepat dan akurat. Dalam bidang sains, tidak hanya kalkulator biasa, namun kita juga butuh kalkulator saintifik dan kalkulator rumus.',
  },
  {
    title: 'Bimbel',
    img: '/public/fisika/GelombangElektromagnetikImage.jpg',
    fiturs: [{ fitur: 'Les ke rumah' }, { fitur: 'Booking Les' }, { fitur: 'Paket Les' }],
    desc: 'Tidak semua guru kompeten mengajar,sehingga banyak murid mendatangkan guru bimbel ke rumahnya. Kamu bisa pesan bimbel ke rumah dari HarisLab dengan mudah dan nyaman.',
  },
];

const YouCanDo = ({ img, title, fitur, desc }) => {
  return (
    <Link href='/#fitur'>
      <a className={`w-full p-4 duration-300 rounded-xl bg-white shadow-lg `}>
        <div className='text-2xl font-semibold text-gray-700'>{title}</div>
        <div className='mt-1 mb-6 text-gray-600 text-tiny'>{desc}</div>
        <div className='flex justify-between mb-1.5'>
          <div className='text-sm font-medium text-gray-500 '>Fitur Utama</div>
          <Link href='/#fitur'>
            <a className='text-sm text-gray-600 hover:underline'>Selengkapnya..</a>
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
      <a className='flex flex-row items-center justify-between px-3 py-2 pr-2 border border-gray-300 rounded-md border- hover:bg-gray-100 '>
        <div className='text-gray-700 text-tiny'>{fitur}</div>
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
