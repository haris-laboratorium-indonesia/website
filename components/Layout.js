import Link from "next/link";
import { Menu } from "@headlessui/react";
import Head from "next/head";
import { Popover } from "@headlessui/react";
import { HiOutlineChevronDown } from "react-icons/hi";

export default function Layout({ children }) {
  const nav = "px-2 py-1 rounded-md hover:text-[#007AFF] text-[#45484a]";
  return (
    <div className="font-inter">
      <Head>
        <title>HarisLab</title>
        <link rel="icon" href="/ya.ico" />
      </Head>
      <main>
        {/* navigation */}
        {/* container */}
        <main className=" sticky top-0 z-10 mx-auto h-auto blur border-b border-gray-300">
          {/* container */}
          <main className="max-w-5xl w-full mx-auto px-0 py-2.5">
            {/* desktop navigation*/}
            <nav className="md:flex justify-between items-center hidden text-sm">
              {/* brand name / home button */}
              <section className=" flex justify-start items-center ">
                <Link href="/">
                  <a className="text-lg flex flex-row items-center">
                    <div className="ml-0.5 font-semibold text-[#1c1c1e]  ">
                      Haris
                      <span className="font-light text-[#45484a]">Lab</span>
                    </div>
                  </a>
                </Link>
              </section>

              {/* main link */}
              <section className="flex flex-row justify-end items-center space-x-3 text-sm ">
                <Link href="/math/homeMath">
                  <a className={nav}>Belajar</a>
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
                  <a className={nav}>Games</a>
                </Link>
                <Popover className="relative">
                  <Popover.Button className="py-0.5 px-2 flex justify-between items-center hover:text-[#007AFF] text-[#45484a]">
                    <span>Lainnya</span>
                    <HiOutlineChevronDown
                      className="text-opacity-70"
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Popover.Panel className="blur shadow-xl py-2 w-32 absolute z-10 mt-3 rounded border border-gray-300 flex flex-col space-y-2">
                    <Link href="/merchandise">
                      <a className="px-2 py-1 text-center hover:text-[#007AFF] text-[#45484a] hover:bg-gray-100">
                        Merchandise
                      </a>
                    </Link>
                    <Link href="/bookingme">
                      <a className="px-2 py-1 text-center hover:text-[#007AFF] text-[#45484a] hover:bg-gray-100">
                        Booking Me !
                      </a>
                    </Link>
                    <Link href="/portofolio">
                      <a className="px-2 py-1 text-center hover:text-[#007AFF] text-[#45484a] hover:bg-gray-100">
                        Portofolio
                      </a>
                    </Link>
                  </Popover.Panel>
                </Popover>
              </section>

              {/* signIn/signUp */}
              <section className="flex flex-row justify-end items-center space-x-2">
                <Link href="/signIn">
                  <a className="px-2 py-1 hover:rounded-md hover:text-[#007AFF] text-[#45484a] ">
                    Masuk
                  </a>
                </Link>
                <Link href="/signUp">
                  <a className="text-xs rounded-full bg-[#007AFF]  text-white hover:bg-opacity-90  px-3 py-1.5">
                    Daftar
                  </a>
                </Link>
              </section>
            </nav>

            {/* mobile navigation */}
            <nav className="flex  md:hidden w-full">
              <Menu as="div" className="relative inline-block w-full">
                <div className="flex items-center justify-between">
                  {/* brand name / home button */}
                  <section>
                    <Link href="/">
                      <a className="text-lg flex flex-row items-center">
                        <div className="ml-0.5 font-semibold text-[#1c1c1e] pl-5">
                          Haris
                          <span className="font-light text-[#45484a]">Lab</span>
                        </div>
                      </a>
                    </Link>
                  </section>

                  <Menu.Button className=" focus:outline-none pr-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  </Menu.Button>
                </div>

                <Menu.Items className="absolute right-0 w-full mt-2 p-5 origin-top-right text-[#1c1c1e] bg-white border-b shadow-hero">
                  <section className="mb-2">
                    {/* search button */}
                    {/* container */}
                    <main className="w-full">
                      {/* component search */}
                      <section className=" flex items-center  px-1.5 py-1.5 rounded bg-gray-100 border border-[#8e8e93]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                        <input
                          type="text"
                          className="text-black placeholder-gray-500 bg-gray-100  focus:outline-none caret-black w-full focus:placeholder-black ml-1 "
                          placeholder="Search"
                        />
                      </section>
                    </main>
                  </section>

                  <section className="grid grid-cols-2 gap-5 mt-5">
                    <div>
                      <Menu.Item>
                        {({ active }) => (
                          <button className="w-full text-center rounded-md border border-[#8e8e93] py-1.5">
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
                    </div>
                    <div>
                      <Menu.Item>
                        {({ active }) => (
                          <button className="w-full text-center rounded-md bg-[#007AFF] text-white py-1.5">
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
                    </div>
                    {/* Alat */}
                    <div className=" p-2 flex flex-col space-y-2">
                      <div className="text-xs text-[#45484a]">ALAT</div>
                      <Menu.Item>
                        {({ active }) => (
                          <button className="w-full text-left rounded-lg  ">
                            {active ? (
                              <Link href="/math/homeMath">
                                <a>Belajar</a>
                              </Link>
                            ) : (
                              <Link href="/math/homeMath">
                                <a>Belajar</a>
                              </Link>
                            )}
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button className="w-full text-left rounded-lg  ">
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
                          <button className="w-full text-left rounded-lg  ">
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
                          <button className="w-full text-left rounded-lg  ">
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
                          <button className="w-full text-left rounded-lg  ">
                            {active ? (
                              <Link href="/scan/scanMath">
                                <a>Scan</a>
                              </Link>
                            ) : (
                              <Link href="/scan/scanMath">
                                <a>Scan</a>
                              </Link>
                            )}
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    {/* Lainnya */}
                    <div className=" p-2 flex flex-col space-y-2">
                      <div className="text-xs text-[#45484a]">LAINNYA</div>
                      <Menu.Item>
                        {({ active }) => (
                          <button className="w-full text-left rounded-lg  ">
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
                          <button className="w-full text-left rounded-lg  ">
                            {active ? (
                              <Link href="/bookingme">
                                <a>Booking Me!</a>
                              </Link>
                            ) : (
                              <Link href="/bookingme">
                                <a>Booking Me!</a>
                              </Link>
                            )}
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button className="w-full text-left rounded-lg  ">
                            {active ? (
                              <Link href="/scanMath">
                                <a>Merchandise</a>
                              </Link>
                            ) : (
                              <Link href="/scanMath">
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

        <main className="w-full  min-h-screen">{children}</main>

        <footer className="bottom-0 text-xs sm:text-base text-center mt-24 w-full bg-gray-50 p-5 sm:px-0">
          <div className="flex flex-col sm:flex-row text-left space-y-6 sm:space-y-0 max-w-5xl mx-auto">
            <div className="flex w-full sm:w-1/2">
              <div className="w-full sm:w-1/3">
                <div className="font-light text-gray-600 text-sm">ALAT</div>
                <Link href="/math/homeMath">
                  <a className="block hover:underline">Belajar</a>
                </Link>
                <Link href="/calculatorMath">
                  <a className="block hover:underline">Kalkulator</a>
                </Link>
                <Link href="/flashcardMath">
                  <a className="block hover:underline">Kartu</a>
                </Link>
                <Link href="/animationMath">
                  <a className="block hover:underline">Animasi</a>
                </Link>
                <Link href="/scanMath">
                  <a className="block hover:underline">Scan</a>
                </Link>
                <Link href="/gamesMath">
                  <a className="block hover:underline">Games</a>
                </Link>
              </div>
              <div className="w-full sm:w-1/3">
                <div className="font-light text-gray-600 text-sm">LAINNYA</div>
                <Link href="/merchandise">
                  <a className="block hover:underline">Merchandise</a>
                </Link>
                <Link href="/bookingme">
                  <a className="block hover:underline">Booking Me !</a>
                </Link>
                <Link href="/portofolio">
                  <a className="block hover:underline">Portofolio</a>
                </Link>
              </div>
            </div>
            <div className=" text-gray-600 w-full sm:w-1/2">
              &copy;2021 Haris<span className="font-light">Lab</span> Inc ∙ Made
              by{" "}
              <a
                target="_blank"
                href="https://twitter.com/haritssr"
                className="text-blue-500 hover:underline"
              >
                Harits Syah
              </a>{" "}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
