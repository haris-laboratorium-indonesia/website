import Link from 'next/link';

export default function Footer() {
  const a = 'block text-gray-600  hover:underline font-inter text-tiny sm:text-base';
  return (
    <footer className='bottom-0 w-full text-center bg-[#f5f5f7] mt-36 ' id='footer'>
      {/* Footer */}
      <section className='grid max-w-5xl grid-cols-2 gap-5 p-5 mx-auto text-left border-t border-gray-400 sm:grid-cols-4 xl:px-0'>
        <FooterBox title='Fitur'>
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
        </FooterBox>

        <FooterBox title='Lainnya'>
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
        </FooterBox>

        <FooterBox title='Kontak'>
          <a
            href='https://twitter.com/HarisLaboratory'
            target='_blank'
            className='block hover:underline'
          >
            Twitter
          </a>
          <a
            href='mailto:harislaboratory@gmail.com'
            target='_blank'
            className='block hover:underline'
          >
            Gmail
          </a>
          <a href='tel:0895331103401' target='_blank' className='block hover:underline'>
            WhatsApp
          </a>
        </FooterBox>

        {/* Company Identity */}
        <FooterBox title='Informasi'>
          <div>Report Problem</div>
          <div>Make sugestion!</div>
          <div>Copyright &copy;2021 Haris Lab</div>
        </FooterBox>
      </section>
    </footer>
  );
}

const FooterBox = ({ title, children }) => {
  return (
    <div className='pt-5 space-y-2 text-gray-600 text-tiny sm:pt-0 sm:text-base'>
      <div className='font-medium text-gray-800 text-tiny sm:text-base'>{title}</div>
      {children}
    </div>
  );
};
