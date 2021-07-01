import Link from 'next/link';

const Footer = () => {
  const navigation = 'block text-gray-400 hover:underline font-inter';
  return (
    <footer className='bottom-0 w-full mt-20 text-center bg-gray-800'>
      <section className='grid max-w-4xl grid-cols-1 gap-5 px-5 py-5 mx-auto text-left sm:grid-cols-2 xl:px-0'>
        <div className='w-full space-y-2 '>
          {/* ALAT */}
          <div className='text-2xl text-white font-mw'>Navigasi</div>
          <Link href='/matematika'>
            <a className={navigation}>Matematika</a>
          </Link>
          <Link href='/fisika'>
            <a className={navigation}>Fisika</a>
          </Link>
          <Link href='/kalkulator'>
            <a className={navigation}>Kalkulator</a>
          </Link>
          <Link href='/kartu'>
            <a className={navigation}>Kartu</a>
          </Link>

          <Link href='/bimbel'>
            <a className={navigation}>Bimbel</a>
          </Link>
        </div>

        {/* Company Identity */}
        <article className='w-full pt-5 space-y-2 text-xs text-gray-500 border-t border-gray-500 sm:border-0 sm:pt-0 sm:text-base'>
          <div className='text-2xl text-white font-mw'>
            <Link href='/'>
              <a>
                Haris<span className='font-light text-gray-400'>Lab</span>
              </a>
            </Link>
          </div>
          {/* <div>PT. Haris Laboratorium Indonesia</div> */}
          <div>Pondok Kacang Timur, Tangerang Selatan, Banten 15226, Indonesia</div>
          <div>harislabindonesia@gmail.com</div>
          <div className='flex flex-col w-full sm:flex-row'>
            <div>
              Copyright &copy;2021 Haris
              <span className=''>Lab</span> LLC. &nbsp;
            </div>
          </div>
          <div>
            Crafted by{' '}
            <a
              href='https://www.twitter.com/haritssr'
              target='_blank'
              className='text-harislab hover:underline'
            >
              Harits Syah
            </a>
          </div>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
