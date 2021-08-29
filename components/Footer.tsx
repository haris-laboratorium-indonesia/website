import Link from 'next/link';

export default function Footer() {
  const a = 'block text-gray-600  hover:underline font-inter text-tiny sm:text-base';
  return (
    <footer className='bottom-0 w-full text-center bg-[#f5f5f7] mt-36 hidden sm:block' id='footer'>
      {/* Footer */}
      <section className='grid max-w-5xl grid-cols-2 gap-5 p-5 mx-auto text-left border-t border-gray-400 sm:grid-cols-5 xl:px-0'>
        <div className='space-y-2'>
          {/* Navigasi */}
          <div className='font-medium text-gray-800 text-tiny sm:text-base'>Fitur </div>
          <div className='w-full space-y-2'>
            <Link href='/matematika'>
              <a className={a}>Matematika</a>
            </Link>
            <Link href='/fisika'>
              <a className={a}>Fisika</a>
            </Link>
            <Link href='/kalkulator'>
              <a className={a}>Kalkulator</a>
            </Link>
            <Link href='/bimbel'>
              <a className={a}>Bimbel</a>
            </Link>
          </div>
        </div>

        <div className='space-y-2'>
          {/* Lainnya */}
          <div className='font-medium text-gray-800 text-tiny sm:text-base'>Lainnya</div>
          <div className='w-full space-y-2'>
            <Link href='/toko'>
              <a className={a}>Toko</a>
            </Link>
            <Link href='/desain'>
              <a className={a}>Desain</a>
            </Link>
            <Link href='/tentang'>
              <a className={a}>Tentang</a>
            </Link>
            <Link href='/biaya'>
              <a className={a}>Biaya</a>
            </Link>
          </div>
        </div>

        {/* Company Identity */}
        <article className='col-span-2 pt-5 space-y-2 text-gray-600 sm:col-start-4 sm:col-end-6 text-tiny sm:pt-0 sm:text-base'>
          <div className='font-medium text-gray-800 text-tiny sm:text-base'>Informasi</div>
          <div>PT. Haris Laboratory</div>
          <div>Copyright &copy;2021 Haris Lab</div>
          <div>harislaboratory@gmail.com</div>
          <div>Jl. Dr.Setiabudi Gg. Kebon Manggis 5</div>
          <div>Tangerang Selatan, Banten 15226, Indonesia</div>
        </article>
      </section>
    </footer>
  );
}
