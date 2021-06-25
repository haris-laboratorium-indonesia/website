import Link from 'next/link'
import {Menu} from '@headlessui/react'

const NavMobile = () => {
  const menu = 'flex items-center py-1 text text-lg'

  return (
    <nav className="z-50 flex items-center justify-between w-full h-auto max-w-5xl px-5 py-3 mx-auto border-b border-gray-300 md:hidden">
      {/* Menu */}
      <Menu as="div" className="static flex justify-end text-">
        {({open}) => (
          <>
            <Menu.Button className="z-50 flex justify-end w-full  py-0.5 px-1 hover:bg-gray-100  rounded-md focus:outline-none">
              {open ? <X /> : <HamburgerMenu />}
            </Menu.Button>

            <Menu.Items className="absolute right-0 z-50 w-full min-h-screen p-5 mt-10 duration-300 origin-top-right bg-gray-100 border-b border-gray-600 shadow-inner">
              {/* Search */}
              <section className="mb-5 duration-200 flex items-center rounded-lg  p-1.5 bg-gray-300 border-[1.4px] border-gray-300 focus-within:border-gray-300 focus-within:bg-gray-100 ">
                <SearchIcon />
                <input
                  type="text"
                  className="w-full ml-1 text-black placeholder-gray-700 duration-200 bg-gray-300 focus:outline-none focus:placeholder-black focus:bg-gray-100 "
                  placeholder="Search"
                />
              </section>

              <section className="grid grid-cols-2 gap-2 pt-5 border-t border-gray-500">
                {/* Lainnya */}
                <div className="flex flex-col ">
                  <div className="text-gray-600 ">LAINNYA</div>
                  <Menu.Item>
                    {({active}) => (
                      <button className="w-full text-left text-black ">
                        {active ? (
                          <Link href="/blog">
                            <a className={menu}>Blog</a>
                          </Link>
                        ) : (
                          <Link href="/blog">
                            <a className={menu}>Blog</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({active}) => (
                      <button className="w-full text-left text-black ">
                        {active ? (
                          <Link href="/portofolio">
                            <a className={menu}>Portofolio</a>
                          </Link>
                        ) : (
                          <Link href="/portofolio">
                            <a className={menu}>Portofolio</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({active}) => (
                      <button className="w-full text-left text-black ">
                        {active ? (
                          <Link href="/merchandise">
                            <a className={menu}>Merchandise</a>
                          </Link>
                        ) : (
                          <Link href="/merchandise">
                            <a className={menu}>Merchandise</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                </div>

                {/* Alat */}
                <div className="flex flex-col ">
                  <div className="text-gray-600 ">ALAT</div>
                  <Menu.Item>
                    {({active}) => (
                      <button className="w-full text-left text-black ">
                        {active ? (
                          <Link href="/materi/matematika">
                            <a className={menu}>Materi</a>
                          </Link>
                        ) : (
                          <Link href="/materi/matematika">
                            <a className={menu}>Materi</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({active}) => (
                      <button className="w-full text-left text-black ">
                        {active ? (
                          <Link href="/kartu">
                            <a className={menu}>Flash Card</a>
                          </Link>
                        ) : (
                          <Link href="/kartu">
                            <a className={menu}>Flash Card</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({active}) => (
                      <button className="w-full text-left text-black ">
                        {active ? (
                          <Link href="/kalkulator">
                            <a className={menu}>Kalkulator</a>
                          </Link>
                        ) : (
                          <Link href="/kalkulator">
                            <a className={menu}>Kalkulator</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({active}) => (
                      <button className="w-full text-left text-black ">
                        {active ? (
                          <Link href="/bookingLes">
                            <a className={menu}>Booking Les</a>
                          </Link>
                        ) : (
                          <Link href="/bookingLes">
                            <a className={menu}>Booking Les</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </section>
            </Menu.Items>
          </>
        )}
      </Menu>
      {/* HarisLab */}
      <Link href="/">
        <a className="items-center block w-full pl-4 text-xl font-semibold text-center font-mw">
          <span className="font-bold">Haris</span>
          <span className="font-light">Lab</span>
        </a>
      </Link>

      {/* <Login /> */}
      <Link href="/login">
        <a className="px-3 pt-1.5 pb-2 text-sm text-white rounded-md bg-harislab">
          Login
        </a>
      </Link>
    </nav>
  )
}

export default NavMobile

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-gray-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeWidth={1.4} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )
}

const X = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="text-gray-700 w-7 h-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  )
}

const HamburgerMenu = () => {
  return (
    <svg
      className="text-gray-700 h-7 w-7"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    >
      <path d="M3 12h18" />
      <path d="M3 6h18" />
      <path d="M3 18h18" />
    </svg>
  )
}

//

const Folder = () => {
  return (
    <svg
      className="w-5 h-5 mr-1"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#fff"
      shapeRendering="geometricPrecision"
    >
      <path d="M2.707 7.454V5.62C2.707 4.725 3.469 4 4.409 4h4.843c.451 0 .884.17 1.204.474l.49.467c.126.12.296.186.473.186h8.399c.94 0 1.55.695 1.55 1.59v.737m-18.661 0h-.354a.344.344 0 00-.353.35l.508 11.587c.015.34.31.609.668.609h17.283c.358 0 .652-.269.667-.61L22 7.805a.344.344 0 00-.353-.35h-.278m-18.662 0h18.662" />
    </svg>
  )
}

const Kartu = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      />
    </svg>
  )
}

const Kalkulator = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 mr-1.5 -ml-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  )
}

const Play = () => {
  return (
    <svg
      className="w-5 h-5 mr-1"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <path d="M13 19l9-7-9-7v14z" />
      <path d="M2 19l9-7-9-7v14z" />
    </svg>
  )
}

const Camera = () => {
  return (
    <svg
      className="w-5 h-5 mr-1"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  )
}

const Puzzle = () => {
  return (
    <svg
      className="w-5 h-5 mr-1"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
      />
    </svg>
  )
}

// ---------------------------------------------------------------------

const Pen = () => {
  return (
    <svg
      className="w-5 h-5 mr-1"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  )
}

const Award = () => {
  return (
    <svg
      className="w-5 h-5 mr-1"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <circle cx="12" cy="8" r="7" />
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    </svg>
  )
}

const Calender = () => {
  return (
    <svg
      className="w-5 h-5 mr-1"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
    </svg>
  )
}

const Cart = () => {
  return (
    <svg
      className="w-5 h-5 mr-1"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  )
}

const Masuk = () => {
  return (
    <svg
      className="w-5 h-5 mr-1"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
    </svg>
  )
}
