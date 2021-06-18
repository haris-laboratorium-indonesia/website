import Link from "next/link";
import { Menu } from "@headlessui/react";
const NavMobile = () => {
  return (
    <nav className="z-20 flex items-center justify-between md:hidden">
      {/* HarisLab */}
      <nav className="block w-3/4 ">
        <Link href="/">
          <a className="block w-full py-3 pl-5 text-xl font-semibold ">
            <span>Haris</span>
            <span className="font-light">Lab</span>
          </a>
        </Link>
      </nav>

      {/* Menu */}
      <Menu as="div" className="static flex justify-end w-1/4 ">
        {({ open }) => (
          <>
            <Menu.Button className="z-50 flex justify-end w-full py-3 pr-5 focus:outline-none">
              {open ? <X /> : <HamburgerMenu />}
            </Menu.Button>

            <Menu.Items className="absolute right-0 z-50 w-full p-5 origin-top-right bg-gray-100 mt-14">
              {/* Search */}
              <section className="mb-5  flex items-center  p-1.5 rounded-lg bg-gray-200 border-[1.4px] border-gray-200 focus-within:border-black ">
                <SearchIcon />
                <input
                  type="text"
                  className="w-full ml-1 text-black placeholder-gray-500 bg-gray-200 focus:outline-none focus:placeholder-black "
                  placeholder="Search"
                />
              </section>

              <section className="grid grid-cols-2 gap-2 pt-5 border-t border-gray-500">
                {/* Lainnya */}
                <div className="flex flex-col p-2 space-y-4 ">
                  <div className="text-xs text-black">LAINNYA</div>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-black rounded-lg">
                        {active ? (
                          <Link href="/blog">
                            <a className="flex items-center">
                              <Pen />
                              Blog
                            </a>
                          </Link>
                        ) : (
                          <Link href="/blog">
                            <a className="flex items-center">
                              <Pen />
                              Blog
                            </a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-black rounded-lg">
                        {active ? (
                          <Link href="/portofolio">
                            <a className="flex items-center">
                              <Award />
                              Portofolio
                            </a>
                          </Link>
                        ) : (
                          <Link href="/portofolio">
                            <a className="flex items-center">
                              <Award />
                              Portofolio
                            </a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-black rounded-lg">
                        {active ? (
                          <Link href="/bookingLes">
                            <a className="flex items-center">
                              <Calender />
                              Booking Les
                            </a>
                          </Link>
                        ) : (
                          <Link href="/bookingLes">
                            <a className="flex items-center">
                              <Calender />
                              Booking Les
                            </a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-black rounded-lg">
                        {active ? (
                          <Link href="/merchandise">
                            <a className="flex items-center">
                              <Cart />
                              Merchandise
                            </a>
                          </Link>
                        ) : (
                          <Link href="/merchandise">
                            <a className="flex items-center">
                              <Cart />
                              Merchandise
                            </a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-black rounded-lg">
                        {active ? (
                          <Link href="/login">
                            <a className="flex items-center">
                              <Masuk />
                              Login
                            </a>
                          </Link>
                        ) : (
                          <Link href="/login">
                            <a className="flex items-center">
                              <Masuk />
                              Login
                            </a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                </div>

                {/* Alat */}
                <div className="flex flex-col p-2 space-y-4 ">
                  <div className="text-xs text-black">ALAT</div>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-black rounded-lg">
                        {active ? (
                          <Link href="/materi">
                            <a className="flex items-center">
                              <Folder />
                              Materi
                            </a>
                          </Link>
                        ) : (
                          <Link href="/materi">
                            <a className="flex items-center">
                              <Folder />
                              Materi
                            </a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-black rounded-lg">
                        {active ? (
                          <Link href="/kartu">
                            <a className="flex items-center">
                              <Kartu />
                              Kartu
                            </a>
                          </Link>
                        ) : (
                          <Link href="/kartu">
                            <a className="flex items-center">
                              <Kartu />
                              Kartu
                            </a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-black rounded-lg">
                        {active ? (
                          <Link href="/kalkulator">
                            <a className="flex items-center">
                              <Kalkulator />
                              Kalkulator
                            </a>
                          </Link>
                        ) : (
                          <Link href="/kalkulator">
                            <a className="flex items-center">
                              <Kalkulator />
                              Kalkulator
                            </a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-black rounded-lg">
                        {active ? (
                          <Link href="/animasi">
                            <a className="flex items-center">
                              <Play />
                              Animasi
                            </a>
                          </Link>
                        ) : (
                          <Link href="/animasi">
                            <a className="flex items-center">
                              <Play />
                              Animasi
                            </a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-black rounded-lg">
                        {active ? (
                          <Link href="/scan">
                            <a className="flex items-center">
                              <Camera />
                              Scan
                            </a>
                          </Link>
                        ) : (
                          <Link href="/scan">
                            <a className="flex items-center">
                              <Camera />
                              Scan
                            </a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-black rounded-lg">
                        {active ? (
                          <Link href="/games">
                            <a className="flex items-center">
                              <Puzzle />
                              Games
                            </a>
                          </Link>
                        ) : (
                          <Link href="/games">
                            <a className="flex items-center">
                              <Puzzle />
                              Games
                            </a>
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
    </nav>
  );
};

export default NavMobile;

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
  );
};

const X = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
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
  );
};

const HamburgerMenu = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};

const Folder = () => {
  return (
    <svg
      className="w-5 h-5 mr-1.5"
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
  );
};

const Kartu = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 mr-1.5"
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
  );
};

const Kalkulator = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 mr-2 -ml-0.5"
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
  );
};

const Play = () => {
  return (
    <svg
      className="w-5 h-5 mr-1.5"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shape-rendering="geometricPrecision"
    >
      <path d="M13 19l9-7-9-7v14z" />
      <path d="M2 19l9-7-9-7v14z" />
    </svg>
  );
};

const Camera = () => {
  return (
    <svg
      className="w-5 h-5 mr-1.5"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shape-rendering="geometricPrecision"
    >
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
};

const Puzzle = () => {
  return (
    <svg
      className="w-5 h-5 mr-1.5"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shape-rendering="geometricPrecision"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
      />
    </svg>
  );
};

// ---------------------------------------------------------------------

const Pen = () => {
  return (
    <svg
      className="w-5 h-5 mr-1.5"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shape-rendering="geometricPrecision"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
};

const Award = () => {
  return (
    <svg
      className="w-5 h-5 mr-1.5"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shape-rendering="geometricPrecision"
    >
      <circle cx="12" cy="8" r="7" />
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    </svg>
  );
};

const Calender = () => {
  return (
    <svg
      className="w-5 h-5 mr-1.5"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shape-rendering="geometricPrecision"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
    </svg>
  );
};

const Cart = () => {
  return (
    <svg
      className="w-5 h-5 mr-1.5"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shape-rendering="geometricPrecision"
    >
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
};

const Masuk = () => {
  return (
    <svg
      className="w-5 h-5 mr-1.5"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shape-rendering="geometricPrecision"
    >
      <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
    </svg>
  );
};
