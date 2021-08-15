import Link from 'next/link';

const Footer = () => {
  const a = 'block text-gray-700  hover:underline font-inter text-sm sm:text-base py-1';
  return (
    <footer className='bottom-0 w-full text-center bg-gray-200 mt-36'>
      {/* Footer */}
      <section className='grid max-w-4xl grid-cols-2 gap-5 px-5 py-10 mx-auto text-left sm:grid-cols-4 xl:px-0 '>
        <div className='space-y-2'>
          {/* Navigasi */}
          <div className='text-2xl font-semibold text-gray-800'>Navigasi</div>
          <div className='w-full '>
            <Link href='/matematika'>
              <a className={a}>Matematika</a>
            </Link>
            <Link href='/fisika'>
              <a className={a}>Fisika</a>
            </Link>
            <Link href='/kartu'>
              <a className={a}>Kartu</a>
            </Link>
            <Link href='/biaya'>
              <a className={a}>Kalkulator</a>
            </Link>
            <Link href='/bimbel'>
              <a className={a}>Bimbel</a>
            </Link>
          </div>
        </div>

        <div className='space-y-2'>
          {/* Lainnya */}
          <div className='text-2xl font-semibold text-gray-800'>Lainnya</div>
          <div className='w-full '>
            <Link href='/biaya'>
              <a className={a}>Biaya</a>
            </Link>
            <Link href='/#support'>
              <a className={a}>Dukung</a>
            </Link>
            <Link href='/haris'>
              <a className={a}>Tentang</a>
            </Link>
          </div>
        </div>

        {/* Company Identity */}
        <article className='col-span-2 pt-5 space-y-2 text-sm text-gray-700 sm:pt-0 sm:text-base'>
          <div className='flex text-2xl text-gray-800 font-mw'>
            <Link href='/'>
              <a>
                Haris<span className='font-light text-gray-500'>Lab</span>
              </a>
            </Link>
          </div>
          <div>PT. Haris Laboratory</div>
          {/* <div>
            Crafted by{' '}
            <Link href='/haris'>
              <a className='ml-1 underline hover:no-underline hover:text-harislab'> Harits Syah</a>
            </Link>
          </div> */}
          <div>Copyright &copy;2021 Haris Lab</div>
          <div>harislabindonesia@gmail.com</div>
          <div>Jl. Dr.Setiabudi Gg. Kebon Manggis 5 no. 56</div>
          <div>Tangerang Selatan, Banten 15226, Indonesia</div>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
