import Link from 'next/link';
import { Logo } from '@/components/Icons';

export default function Footer() {
  const a = 'block text-zinc-500  hover:underline ';
  return (
    <footer className='bottom-0 w-full mt-32 border-t border-zinc-200 '>
      <section className='flex flex-col sm:flex-row-reverse sm:justify-between px-3 py-5 sm:py-20 sm:px-0 max-w-5xl mx-auto'>
        <section className='hidden sm:block'>
          <section className='flex p-5 lg:p-0 space-x-10 sm:justify-end sm:space-x-14 '>
            <FooterBox title='Layanan'>
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
            <FooterBox title='INFO'>
              <Link href='/pricing'>
                <a className={a}>Pricing</a>
              </Link>
              <Link href='/privacy-policy'>
                <a className={a}>Privacy Policy</a>
              </Link>
              <Link href='/terms-and-service'>
                <a className={a}>Terms and Service</a>
              </Link>
              <Link href='/sitemap'>
                <a className={a}>Sitemap</a>
              </Link>
            </FooterBox>
          </section>
        </section>
        <section className='p-5 lg:p-0 space-y-3 sm:w-1/3'>
          <div className='flex items-center space-x-2'>
            <Logo />
            <div className='font-semibold text-zinc-800 text-xl'>Haris Lab</div>
          </div>
          <div className='text-zinc-600 text-lg'>
            Belajar matematika fisika online dan pesan bimbel ke rumah.
          </div>
          <div className='text-zinc-500'>
            &copy; Haris Lab Inc. <span className='text-sm'>2021—{new Date().getFullYear()}</span>
          </div>
          <div className='block sm:hidden'>
            <div className='flex space-x-2 text-[12px]'>
              <Link href='/privacy'>
                <a className={a}>Privacy</a>
              </Link>
              <Link href='/terms'>
                <a className={a}>Terms</a>
              </Link>
              <Link href='/sitemap'>
                <a className={a}>Sitemap</a>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </footer>
  );
}

const FooterBox = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={` ${className} space-y-3 text-zinc-500 sm:pt-0`}>
      <div className='font-semibold text-zinc-800 font-inter uppercase text-sm'>{title}</div>
      <div className='space-y-2'>{children}</div>
    </div>
  );
};
