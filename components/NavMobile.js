import Link from "next/link";
import { Menu } from "@headlessui/react";

export default function NavMobile() {
  return (
    <nav className="z-20 flex items-center justify-between md:hidden">
      {/* HarisLab */}
      <nav className="block w-3/4 ">
        <Link href="/">
          <a className="block w-full py-3 pl-5 text-lg font-semibold font-mw">
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
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
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
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
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
              )}
            </Menu.Button>

            <Menu.Items className="absolute right-0 w-full p-5 mt-12 origin-top-right bg-gray-800 ">
              {/* Search */}
              <section className="mb-5  flex items-center  px-1.5 py-1 rounded-lg bg-white border-2 border-white focus-within:ring-blue-500 focus-within:ring ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth={1}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  className="w-full ml-1 text-black placeholder-gray-500 bg-white focus:outline-none caret-black focus:placeholder-black "
                  placeholder="Search"
                />
              </section>

              <section className="grid grid-cols-2 gap-5">
                {/* Alat */}
                <div className="flex flex-col p-2 space-y-2 ">
                  <div className="text-xs text-white">ALAT</div>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/math/homeMath">
                            <a>Materi</a>
                          </Link>
                        ) : (
                          <Link href="/math/homeMath">
                            <a>Materi</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/flashCardMath">
                            <a>Kartu</a>
                          </Link>
                        ) : (
                          <Link href="/flashCardMath">
                            <a>Kartu</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/calculatorMath">
                            <a>Kalkulator</a>
                          </Link>
                        ) : (
                          <Link href="/calculatorMath">
                            <a>Kalkulator</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/animationMath">
                            <a>Animasi</a>
                          </Link>
                        ) : (
                          <Link href="/animationMath">
                            <a>Animasi</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/scanMath">
                            <a>ScanSoal</a>
                          </Link>
                        ) : (
                          <Link href="/scanMath">
                            <a>ScanSoal</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/gamesMath">
                            <a>Games</a>
                          </Link>
                        ) : (
                          <Link href="/gamesMath">
                            <a>Games</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                </div>

                {/* Lainnya */}
                <div className="flex flex-col p-2 space-y-2 ">
                  <div className="text-xs text-white">LAINNYA</div>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/blog">
                            <a>Blog</a>
                          </Link>
                        ) : (
                          <Link href="/blog">
                            <a>Blog</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/portofolio">
                            <a>Portofolio</a>
                          </Link>
                        ) : (
                          <Link href="/portofolio">
                            <a>Portofolio</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/bookingMe">
                            <a>Booking Me!</a>
                          </Link>
                        ) : (
                          <Link href="/bookingMe">
                            <a>Booking Me!</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/merchandise">
                            <a>Merchandise</a>
                          </Link>
                        ) : (
                          <Link href="/merchandise">
                            <a>Merchandise</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/merchandise">
                            <a>Login</a>
                          </Link>
                        ) : (
                          <Link href="/merchandise">
                            <a>Login</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/merchandise">
                            <a>Daftar</a>
                          </Link>
                        ) : (
                          <Link href="/merchandise">
                            <a>Daftar</a>
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
}
