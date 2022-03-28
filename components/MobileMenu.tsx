import { Popover, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Link from 'next/link';

const NavMobileLink = ({ href, title }: { href: string; title: string }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={`px-4 py-2 flex items-center justify-between space-x-4 ${
          router.asPath === href ? 'text-blue-500' : 'text-white hover:text-zinc-400'
        }`}
      >
        <div>{title}</div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5  '
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={1.5}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
          />
        </svg>
      </a>
    </Link>
  );
};

export const MobileMenu = () => {
  return (
    <Popover as='div' className='relative sm:hidden'>
      {({ open }) => (
        <>
          <Popover.Button>
            <svg
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              fill='none'
              shapeRendering='geometricPrecision'
              className={`h-5 w-5  ${open ? 'text-blue-500' : 'text-zinc-400'}`}
            >
              <path d='M8 6h13' />
              <path d='M8 12h13' />
              <path d='M8 18h13' />
              <path d='M3 6h.01' />
              <path d='M3 12h.01' />
              <path d='M3 18h.01' />
            </svg>
          </Popover.Button>
          <Popover.Overlay className='bg-black opacity-50 fixed inset-0' />
          <Transition
            as={Fragment}
            enter='transition ease-out'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Popover.Panel className='absolute top-10 bg-zinc-800/95 backdrop-blur-sm right-0 rounded-md divide-y divide-zinc-700 shadow-2xl'>
              <NavMobileLink href='/matematika' title='Matematika' />
              <NavMobileLink href='/fisika' title='Fisika' />
              <NavMobileLink href='/kalkulator' title='Kalkulator' />
              <NavMobileLink href='/bimbel' title='Bimbel' />
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
