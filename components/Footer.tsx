import Link from 'next/link';
const Footer = () => {
  const a = 'block text-gray-400 hover:text-white font-inter py-2';
  return (
    <footer className='bottom-0 w-full mt-20 text-center bg-gray-800'>
      {/* Footer Navigasi */}
      <section className='grid max-w-4xl grid-cols-1 gap-5 px-5 py-10 mx-auto text-left sm:grid-cols-2 xl:px-0 '>
        <div className='space-y-2'>
          {/* ALAT */}
          <div className='text-2xl font-semibold text-white'>Navigasi</div>
          <div className='w-full divide-y divide-gray-600 sm:divide-y-0'>
            <Link href='/matematika'>
              <a className={a}>Matematika</a>
            </Link>
            <Link href='/fisika'>
              <a className={a}>Fisika</a>
            </Link>
            <Link href='/kalkulator'>
              <a className={a}>Kalkulator</a>
            </Link>
            <Link href='/kartu'>
              <a className={a}>Kartu</a>
            </Link>
            <Link href='/bimbel'>
              <a className={a}>Bimbel</a>
            </Link>
            <Link href='/pricing'>
              <a className={a}>Pricing</a>
            </Link>
          </div>
        </div>

        {/* Company Identity */}
        <article className='w-full pt-5 space-y-2 text-gray-400 sm:pt-0'>
          <div className='flex text-2xl text-white font-mw'>
            <Link href='/'>
              <a>
                Haris<span className='font-light text-gray-400'>Lab</span>
              </a>
            </Link>
          </div>
          <div>PT. Haris Laboratorium Indonesia</div>
          <div>Jl. Dr.Setiabudi Gg. Kebon Manggis 5 no. 56</div>
          <div>Tangerang Selatan, Banten 15226, Indonesia</div>
          <div>harislabindonesia@gmail.com</div>
          <div className='flex flex-col w-full sm:flex-row'>
            <div>
              Copyright &copy;2021 Haris
              <span className=''>Lab</span>
            </div>
          </div>
          <div>
            Crafted by{' '}
            <Link href='/about-me'>
              <a className='ml-1 underline hover:no-underline hover:text-harislab'> Harits Syah</a>
            </Link>
          </div>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
