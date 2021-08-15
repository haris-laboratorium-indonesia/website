import Link from 'next/link';
import NavMobileX from '@/components/NavMobileX';

export default function NavMobile() {
  return (
    <nav className='z-50 flex items-center justify-between w-full h-auto max-w-5xl pl-4 mx-auto md:hidden'>
      <Link href='/'>
        <a className='items-center block pl-1 text-lg font-medium text-center text-white font-mw'>
          <span className='font-medium'>Haris</span>
          <span className='font-light text-gray-400'>Lab</span>
        </a>
      </Link>

      <NavMobileX />
    </nav>
  );
}
