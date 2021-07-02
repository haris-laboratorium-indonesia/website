import Link from 'next/link';
import FAQ from '../components/FAQ';
import InfoBox from '../components/InfoBox';
import { FAQs } from '../lib/FAQs';
import { weCareAbouts } from '../lib/weCareAbouts';
import { sendInformations } from '../lib/sendInformations';
import Layout from '../components/Layout';
import { RightArrow } from '@/Icons';

const Beranda = () => {
  const tr: string = 'divide-y divide-x divide-cyan-500';
  const td: string = ' text-left text-sm p-2';
  const th: string = 'p-2 text-left text-base font-medium text-cyan-500 bg-cyan-50';

  return (
    <Layout browserTitle='Beranda' description='Laboratorium untuk Pelajar.'>
      {/* Hero */}
      
      <section className='relative z-40 flex flex-col w-full pb-32 bg-white pt-14 sm:pt-40 sm:pb-0 font-inter'>
        <div className='max-w-3xl mx-auto mb-5 text-4xl font-extrabold leading-tight text-center text-transparent sm:text-6xl'>
          <span>
            <Link href='/matematika'>
              <a> Buku Paket,</a>
            </Link>
          </span>{' '}
          <span>
            <Link href='/bimbel'>
              <a>Flash Card,</a>
            </Link>
          </span>
          <span>
            <Link href='/kalkulator'>
              <a> Guru Les,</a>
            </Link>
          </span>{' '}
          <span>
            <Link href='/kartu'>
              <a>Kalkulator. </a>
            </Link>
          </span>
        </div>

        <div className='text-lg leading-tight text-center sm:mb-12'>
          Matematika dan Fisika.
        </div>
        <Link href='/signUp'>
          <a className='flex items-center justify-center w-full mt-5 text-lg duration-300 text-harislab hover:underline sm:mt-0 sm:mb-40'>
            Pelajari lebih lanjut
            <RightArrow color='' />
          </a>
        </Link>
      </section>

      {/* Cara kami menyajikan informasi */}
      <div className='mb-32 sm:mb-60 '>
        <div className='mb-10 text-2xl font-bold text-center sm:text-4xl bg-gradient-to-r from-purple-600 via-fuschsia-600 to-pink-600 trns'>
          Cara kami menyajikan informasi
        </div>

        <section className='grid grid-cols-1 gap-10 mx-auto sm:grid-cols-3 md:grid-cols-4 '>
          {sendInformations.map((a) => (
            <InfoBox
              key={a.id}
              svg={a.svg}
              name={a.title}
              description={a.description}
              color='text-purple-600'
              borderColor='border-purple-600'
            />
          ))}
        </section>
      </div>

      {/* Kami peduli tentang */}
      <div className='mb-32 sm:mb-60 '>
        <header className='mb-10 text-2xl font-bold text-center bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 trns sm:text-4xl'>
          Kami Peduli Tentang
        </header>

        <section className='grid grid-cols-1 gap-10 mx-auto sm:grid-cols-3 md:grid-cols-4 '>
          {weCareAbouts.map((a) => (
            <InfoBox
              key={a.id}
              svg={a.svg}
              name={a.title}
              description={a.description}
              color='text-lime-600'
              borderColor='border-lime-600'
            />
          ))}
        </section>
      </div>

      {/* HarisLab vs Zenius vs Ruangguru vs Buku Paket*/}
      <div className='mb-32 sm:mb-60 '>
        <header className='mb-10 text-2xl font-bold text-center bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 sm:text-4xl trns'>
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

      {/* tailwindcss, apple, nng, lawsofux */}
      <div className='mb-32 sm:mb-60 '>
        <header className='mb-10 text-2xl font-bold text-center bg-gradient-to-r from-cyan-500 via-rose-500 to-amber-500 sm:text-4xl trns'>
          Terinspirasi dari prinsip desain website informasi terbaik
        </header>
        <div className='grid grid-cols-1 gap-5 font-medium text-center sm:grid-cols-2'>
          <a
            className='py-3 text-white duration-200 border rounded-md bg-cyan-500 hover:bg-white hover:text-cyan-500 border-cyan-500 '
            href='https://www.tailwindcss.com'
            target='_blank'
          >
            Tailwind CSS
          </a>
          <a
            className='py-3 text-white duration-200 border rounded-md bg-rose-500 border-rose-500 hover:bg-white hover:text-rose-500'
            href='https://www.nngroup.com'
            target='_blank'
          >
            NNGroup
          </a>
          <a
            className='py-3 text-white duration-200 bg-gray-700 border border-gray-700 rounded-md hover:bg-white hover:text-gray-700'
            href='https://developer.apple.com'
            target='_blank'
          >
            Apple Developer
          </a>
          <a
            className='py-3 text-white duration-200 border rounded-md bg-amber-500 border-amber-500 hover:bg-white hover:text-amber-500'
            href='https://www.lawsofux.com'
            target='_blank'
          >
            Laws of UX
          </a>
        </div>
      </div>
      {/* FAQ */}
      <div className='mb-36'>
        <header className='mb-10 text-2xl font-bold text-center text-gray-800 sm:text-4xl'>
          Frequently Asked Questions
        </header>
        <section className='grid max-w-xl grid-cols-1 gap-5 mx-auto '>
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
