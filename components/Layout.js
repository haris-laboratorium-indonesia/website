import Link from "next/link";
import Head from "next/head";
import { Menu, Popover } from "@headlessui/react";
import { HiOutlineChevronDown } from "react-icons/hi";
import Footer from "./Footer";

export default function Layout({ children }) {
  const nav = "px-2 py-1 rounded-md text-sm text-gray-600 hover:text-black";
  const lainnya = "px-4 py-1 text-sm text-left hover:bg-gray-100";
  return (
    <nav className="font-inter">
      <Head>
        <title>harisLab</title>
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <main>
        {/* navigation */}
        {/* container-full*/}
        <main className="sticky top-0 z-10 h-auto mx-auto border-b blur">
          {/* container-max-4xl */}
          <main className="w-full max-w-4xl py-0 mx-auto md:py-2.5">
            {/* desktop navigation*/}
            <nav className="flex flex-row items-center justify-between hidden w-full px-5 md:flex lg:px-0">
              <Link href="/">
                <a className="flex flex-row items-center text-lg font-mw ml-0.5 font-semibold">
                  haris
                  <span className="font-light">Lab</span>
                </a>
              </Link>
              <Link href="/math/homeMath">
                <a className={nav}>Materi</a>
              </Link>
              <Link href="/flashCardMath">
                <a className={nav}>Kartu</a>
              </Link>
              <Link href="/calculatorMath">
                <a className={nav}>Kalkulator</a>
              </Link>
              <Link href="/animationMath">
                <a className={nav}>Animasi</a>
              </Link>
              <Link href="/scanMath">
                <a className={nav}>Scan</a>
              </Link>
              <Link href="/gamesMath">
                <a className={nav}>Permainan</a>
              </Link>

              {/* Lainnya */}
              <Popover className="relative ">
                <Popover.Button
                  className={`${nav} flex justify-between items-center focus:outline-none`}
                >
                  <span>Lainnya</span>
                  <HiOutlineChevronDown
                    className="text-opacity-70"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Popover.Panel className="absolute z-10 flex flex-col w-32 py-2 mt-5 space-y-2 bg-white rounded shadow-xl">
                  <Link href="/merchandise">
                    <a className={lainnya}>Merchandise</a>
                  </Link>
                  <Link href="/bookingMe">
                    <a className={lainnya}>Booking Les </a>
                  </Link>
                  <Link href="/portofolio">
                    <a className={lainnya}>Portofolio</a>
                  </Link>
                  <Link href="/blog">
                    <a className={lainnya}>Blog</a>
                  </Link>
                </Popover.Panel>
              </Popover>
              <Link href="/signIn">
                <a className={nav}>Masuk</a>
              </Link>
              <Link href="/signUp">
                <a className="text-sm rounded-md text-white bg-[#007AFF] hover:bg-opacity-90  px-3 py-1.5">
                  Daftar
                </a>
              </Link>
            </nav>

            {/* Mobile Navigation */}
            <nav className="flex items-center justify-between">
              {/* Search button */}
              <Menu
                as="div"
                className="static flex justify-start w-1/4 md:hidden "
              >
                <Menu.Button className="py-3.5 pl-5 focus:outline-none w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth={1}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </Menu.Button>

                <Menu.Items className="absolute right-0 w-screen p-5 mt-12 origin-top-right border-t ">
                  <section className="mb-2">
                    <main className="w-full">
                      <section className="shadow-2xl flex items-center  px-1.5 py-1.5 rounded-md bg-white border border-gray-600 hover:ring-1 hover:ring-blue-harislab">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-gray-500"
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
                    </main>
                  </section>
                </Menu.Items>
              </Menu>

              {/* HarisLab */}
              <nav className="justify-center block w-2/4 md:hidden">
                <Link href="/">
                  <a className="block text-lg font-semibold  text-center w-full py-2.5 font-mw">
                    <span>haris</span>
                    <span className="font-light">Lab</span>
                  </a>
                </Link>
              </nav>

              {/* Menu */}
              <Menu
                as="div"
                className="static flex justify-end w-1/4 md:hidden "
              >
                <Menu.Button className="py-2.5 pr-5 focus:outline-none w-full flex justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" h-7 w-7"
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
                </Menu.Button>

                <Menu.Items className="absolute right-0 w-full p-5 mt-12 origin-top-right bg-white border-t border-b shadow-lg ">
                  {/* Masuk */}
                  <section className="grid grid-cols-1 gap-3 mb-5">
                    <Menu.Item>
                      {({ active }) => (
                        <button className="w-full text-center rounded-md border border-black py-1.5">
                          {active ? (
                            <Link href="/signIn">
                              <a>Masuk</a>
                            </Link>
                          ) : (
                            <Link href="/signIn">
                              <a>Masuk</a>
                            </Link>
                          )}
                        </button>
                      )}
                    </Menu.Item>
                    {/* Daftar */}
                    <Menu.Item>
                      {({ active }) => (
                        <button className="w-full text-center rounded-md bg-[#007AFF] border border-[#007AFF] text-white py-1.5">
                          {active ? (
                            <Link href="/signUp">
                              <a>Daftar</a>
                            </Link>
                          ) : (
                            <Link href="/signUp">
                              <a>Daftar</a>
                            </Link>
                          )}
                        </button>
                      )}
                    </Menu.Item>
                  </section>
                  <section className="grid grid-cols-2 gap-5 pt-2 border-t border-gray-500">
                    {/* Alat */}
                    <div className="flex flex-col p-2 space-y-2 ">
                      <div className="text-xs text-[#45484a]">ALAT</div>
                      <Menu.Item>
                        {({ active }) => (
                          <button className="w-full text-left rounded-lg ">
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
                          <button className="w-full text-left rounded-lg ">
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
                          <button className="w-full text-left rounded-lg ">
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
                          <button className="w-full text-left rounded-lg ">
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
                          <button className="w-full text-left rounded-lg ">
                            {active ? (
                              <Link href="/scanMath">
                                <a>Scan</a>
                              </Link>
                            ) : (
                              <Link href="/scanMath">
                                <a>Scan</a>
                              </Link>
                            )}
                          </button>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <button className="w-full text-left rounded-lg ">
                            {active ? (
                              <Link href="/gamesMath">
                                <a>Permainan</a>
                              </Link>
                            ) : (
                              <Link href="/gamesMath">
                                <a>Permainan</a>
                              </Link>
                            )}
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    {/* Lainnya */}
                    <div className="flex flex-col p-2 space-y-2 ">
                      <div className="text-xs text-[#45484a]">LAINNYA</div>
                      <Menu.Item>
                        {({ active }) => (
                          <button className="w-full text-left rounded-lg ">
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
                          <button className="w-full text-left rounded-lg ">
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
                          <button className="w-full text-left rounded-lg ">
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
                          <button className="w-full text-left rounded-lg ">
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
                    </div>
                  </section>
                </Menu.Items>
              </Menu>
            </nav>
          </main>
        </main>

        <main className="w-full min-h-screen">{children}</main>

        <Footer />
      </main>
    </nav>
  );
}

// komponen ini ada di setiap halaman
