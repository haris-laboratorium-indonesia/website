import Link from 'next/link';
import { Menu } from '@headlessui/react';
import { X, HamburgerMenu, SearchIcon } from '@/Icons';

const NavMobile = () => {
  const nav = 'py-3 text-xl block text-gray-200 ';

  return (
    <nav className='z-50 flex items-center justify-between w-full h-auto max-w-5xl p-3 mx-auto border-b border-gray-300 md:hidden'>
      {/* Menu */}
      <Menu as='div' className='static flex justify-end '>
        {({ open }) => (
          <>
            <Menu.Button className='z-50 flex justify-end w-full  py-0.5 px-1 rounded-md focus:outline-none'>
              {open ? (
                <X color='text-white hover:text-gray-300' />
              ) : (
                <HamburgerMenu color='text-white hover:text-gray-300 ' />
              )}
            </Menu.Button>

            <Menu.Items className='absolute right-0 z-50 w-full min-h-screen p-5 bg-gray-800 mt-11'>
              {/* Search */}
              <section className='mb-5 flex items-center rounded-lg  p-1.5  bg-gray-700 '>
                <SearchIcon color=' ' />
                <input
                  type='text'
                  className='w-full ml-1 text-white placeholder-gray-300 bg-gray-700 focus:outline-none focus:placeholder-white '
                  placeholder='Search'
                />
              </section>

              <section className='grid grid-cols-1 px-5 pt-5 divide-y divide-gray-600'>
                <Menu.Item>
                  {({ active }) => (
                    <button className='w-full text-left text-black '>
                      {active ? (
                        <Link href='/matematika'>
                          <a className={nav}>Matematika</a>
                        </Link>
                      ) : (
                        <Link href='/matematika'>
                          <a className={nav}>Matematika</a>
                        </Link>
                      )}
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button className='w-full text-left text-black '>
                      {active ? (
                        <Link href='/fisika'>
                          <a className={nav}>Fisika</a>
                        </Link>
                      ) : (
                        <Link href='/fisika'>
                          <a className={nav}>Fisika</a>
                        </Link>
                      )}
                    </button>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button className='w-full text-left text-black '>
                      {active ? (
                        <Link href='/kalkulator'>
                          <a className={nav}>Kalkulator</a>
                        </Link>
                      ) : (
                        <Link href='/kalkulator'>
                          <a className={nav}>Kalkulator</a>
                        </Link>
                      )}
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button className='w-full text-left text-black '>
                      {active ? (
                        <Link href='/kartu'>
                          <a className={nav}>Kartu</a>
                        </Link>
                      ) : (
                        <Link href='/kartu'>
                          <a className={nav}>Kartu</a>
                        </Link>
                      )}
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button className='w-full text-left text-black '>
                      {active ? (
                        <Link href='/bimbel'>
                          <a className={nav}>Bimbel</a>
                        </Link>
                      ) : (
                        <Link href='/bimbel'>
                          <a className={nav}>Bimbel</a>
                        </Link>
                      )}
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button className='w-full text-left text-black '>
                      {active ? (
                        <Link href='/pricing'>
                          <a className={nav}>Pricing</a>
                        </Link>
                      ) : (
                        <Link href='/pricing'>
                          <a className={nav}>Pricing</a>
                        </Link>
                      )}
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button className='w-full text-left text-black '>
                      {active ? (
                        <Link href='/#support'>
                          <a className={nav}>Support</a>
                        </Link>
                      ) : (
                        <Link href='/#support'>
                          <a className={nav}>Support</a>
                        </Link>
                      )}
                    </button>
                  )}
                </Menu.Item>
              </section>
            </Menu.Items>
          </>
        )}
      </Menu>

      {/* HarisLab */}
      <Link href='/'>
        <a className='items-center block w-full pl-6 text-lg font-medium text-center text-white font-mw'>
          <span className='font-bold'>Haris</span>
          <span className='font-light'>Lab</span>
        </a>
      </Link>

      {/* <Login /> */}
      <Link href='/login'>
        <a className='px-3 py-1 text-white rounded-md bg-harislab'>Login</a>
      </Link>
    </nav>
  );
};

export default NavMobile;
