import Link from 'next/link';
import { useRouter } from 'next/router';
import { Account, Logo } from './Icons';
import SearchMenu from './SearchMenu';

export default function GlobalNavigation() {
  return (
    <nav className='z-40 bg-zinc-800'>
      <div className=' flex items-center justify-between h-auto w-full max-w-5xl py-2.5 mx-auto px-3 xl:px-0'>
        <Link href='/'>
          <a className='w-1/2 sm:w-1/6  pt-[1px] space-x-1.5 flex items-center'>
            <Logo />
            <div className='text-zinc-50 font-inter font-medium'>Haris Lab</div>
          </a>
        </Link>

        <div className='hidden sm:block sm:w-4/6'>
          <div className='flex md:space-x-6 items-center justify-center '>
            <NavDesktopLink href='/kalkulator' title='Kalkulator' />
            <NavDesktopLink href='/matematika' title='Matematika' />
            <NavDesktopLink href='/fisika' title='Fisika' />
            <NavDesktopLink href='/bimbel' title='Bimbel' />
          </div>
        </div>

        <div className='items-center flex space-x-5 sm:space-x-3 sm:w-1/6 justify-end'>
          {/* <MobileMenu /> */}
          <SearchMenu />
          <Account />
        </div>
      </div>
    </nav>
  );
}

const NavDesktopLink = ({ href, title }: { href: string; title: string }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={`px-3 rounded block ${
          router.asPath === href ? 'text-zinc-50' : 'text-zinc-400 hover:text-zinc-50'
        }`}
      >
        {title}
      </a>
    </Link>
  );
};
