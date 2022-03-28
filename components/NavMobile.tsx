import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';
import * as Popover from '@radix-ui/react-popover';

export default function NavMobile() {
  return (
    <nav className='flex items-center justify-between w-full h-auto md:hidden px-3 py-2'>
      <Link href='/'>
        <a className='font-medium text-tiny text-zinc-300'>Haris Lab</a>
      </Link>

      <div className='space-x-4 flex items-center'>
        <Popover.Root>
          {/* <Popover.Anchor /> */}
          <Popover.Trigger>
            <GlobalNavigationListIcon />
          </Popover.Trigger>
          <Popover.Content className='h-auto absolute top-4'>
            <Popover.Arrow />
            <div className='bg-zinc-800 flex flex-col rounded-md divide-y divide-y-400 shadow-xl'>
              <Link href='/matematika'>
                <a className='text-zinc-200 px-3 py-2'>Matematika</a>
              </Link>
              <Link href='/fisika'>
                <a className='text-zinc-200 px-3 py-2'>Fisika</a>
              </Link>
              <Link href='/kalkulator'>
                <a className='text-zinc-200 px-3 py-2'>Kalkulator</a>
              </Link>
              <Link href='/bimbel'>
                <a className='text-zinc-200 px-3 py-2'>Bimbel</a>
              </Link>
            </div>
          </Popover.Content>
        </Popover.Root>
        <Search />
        <AccountIcon />
      </div>
    </nav>
  );
}

export const X = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`text-Inc-600 w-7 h-7 `}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  );
};

const Search = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <SearchIcon />
      </Dialog.Trigger>
      <Dialog.Overlay className='z-40 fixed -ml-5 inset-0 bg-zinc-800/70 backdrop-blur' />
      <Dialog.Content className='-ml-5 fixed top-1/2 left-1/2 max-h-[80vh] w-4/5 max-w-screen-xs -translate-x-1/2 -translate-y-1/2 rounded-md bg-white shadow-2xl border border-zinc-300 z-50'>
        <Dialog.Title className='w-full flex item-center justify-between space-x-3 rounded-t-md p-3 border-b border-zinc-300'>
          {/* Input search section */}
          <input
            type='search'
            placeholder='Cari bab, subbab, topik...'
            className='w-full bg-zinc-200 focus:outline-none rounded text-zinc-600 border border-zinc-400 focus:ring-1 focus:ring-zinc-500 px-2 py-1 placeholder-zinc-500 caret-orange-500'
          />
          <button className='bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 border border-blue-900'>
            <SearchIconButton />
          </button>
        </Dialog.Title>
        <Dialog.Description className=' rounded-b-md p-3'>
          <div className='text-zinc-700 text-lg font-semibold'>Hasil pencarian</div>
          <div className='text-white0'>Hasil pencarianmu akan muncul di sini</div>
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Root>
  );
};

const SearchIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='24'
    height='24'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    fill='none'
    shapeRendering='geometricPrecision'
    className='w-5 h-5 text-white hover:text-blue-500'
  >
    <path d='M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z' />
    <path d='M16 16l4.5 4.5' />
  </svg>
);

const SearchIconButton = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='w-5 h-5 text-white'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
    />
  </svg>
);

const GlobalNavigationListIcon = () => {
  return (
    <svg
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      shapeRendering='geometricPrecision'
      className='text-white w-5 h-5 object-center'
    >
      <path d='M8 6h13' />
      <path d='M8 12h13' />
      <path d='M8 18h13' />
      <path d='M3 6h.01' />
      <path d='M3 12h.01' />
      <path d='M3 18h.01' />
    </svg>
  );
};

const AccountIcon = () => {
  return (
    <svg
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      shapeRendering='geometricPrecision'
      className='text-white w-5 h-5'
    >
      <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2' />
      <circle cx='12' cy='7' r='4' />
    </svg>
  );
};
