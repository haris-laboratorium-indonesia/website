import Link from 'next/link';

const Footer = () => {
  const a = 'block text-gray-500 font-medium hover:underline font-inter text-sm sm:text-tiny';
  return (
    <footer className='bottom-0 w-full text-center bg-[#f5f5f7] mt-36'>
      {/* Footer */}
      <section className='grid max-w-5xl grid-cols-2 gap-5 px-5 py-10 mx-auto text-left border-t border-gray-400 sm:grid-cols-5 xl:px-0'>
        <div className='space-y-1.5'>
          {/* Navigasi */}
          <div className='text-sm font-semibold text-gray-800 sm:text-base'>Navigasi</div>
          <div className='w-full space-y-1.5'>
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

        <div className='space-y-1.5'>
          {/* Lainnya */}
          <div className='text-sm font-semibold text-gray-800 sm:text-base'>Lainnya</div>
          <div className='w-full space-y-1.5'>
            <Link href='/biaya'>
              <a className={a}>Biaya</a>
            </Link>
            <Link href='/#support'>
              <a className={a}>Dukung</a>
            </Link>
            <Link href='/haris'>
              <a className={a}>Tentang</a>
            </Link>
            <Link href='/design'>
              <a className={a}>Desain</a>
            </Link>
          </div>
        </div>

        {/* Company Identity */}
        <article className='col-span-2 sm:col-start-4 sm:col-end-6 pt-5 space-y-1.5 text-sm text-gray-700 sm:pt-0 sm:text-base'>
          <div className='flex text-sm font-semibold text-gray-700 sm:text-base font-mw'>
            <Link href='/'>
              <a>
                Haris<span className='font-light text-gray-600'>Lab</span>
              </a>
            </Link>
          </div>
          <div>PT. Haris Laboratory</div>
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
