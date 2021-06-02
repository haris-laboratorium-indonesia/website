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
            <nav className="flex justify-between">
              <Menu
                as="div"
                className="static w-1/6 flex  md:hidden justify-center bg-pink-500"
              >
                <Menu.Button className=" focus:outline-none bg-blue-500 ">
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </Menu.Button>

                <Menu.Items className="absolute right-0 w-screen  mt-8 p-5 origin-top-right text-[#1c1c1e] bg-white border-b shadow-hero">
                  <section className="mb-2">
                    <main className="w-full">
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
                </Menu.Items>
              </Menu>

              <nav className="bg-blue-200 w-2/3 justify-center">
                <Link href="/">
                  <a className="block text-lg font-semibold text-[#1c1c1e] text-center w-full bg-yellow-300 font-mw">
                    <span>Haris</span>
                    <span className="font-light text-[#45484a]">Lab</span>
                  </a>
                </Link>
              </nav>

              <Menu
                as="div"
                className="static w-1/6 flex  md:hidden justify-center bg-pink-500"
              >
                <Menu.Button className=" focus:outline-none bg-blue-500 ">
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

                <Menu.Items className="absolute right-0 w-full mt-8 p-5 origin-top-right text-[#1c1c1e] bg-white border-b shadow-hero">
                  <section className="grid grid-cols-2 gap-5">
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

                    <div>
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

        <footer className="bottom-0  text-center mt-24 w-full bg-gray-50 p-5 sm:px-0 border-t border-gray-300">
          <section className="flex flex-col sm:flex-row text-left space-y-10 sm:space-y-0 max-w-5xl mx-auto">
            <article className="flex w-full sm:w-1/2">
              <div className="w-full sm:w-1/2 space-y-1">
                <div className="font-light text-gray-600 text-base">ALAT</div>
                <Link href="/math/homeMath">
                  <a className="block hover:underline text-base">Belajar</a>
                </Link>
                <Link href="/calculatorMath">
                  <a className="block hover:underline text-base">Kalkulator</a>
                </Link>
                <Link href="/flashcardMath">
                  <a className="block hover:underline text-base">Kartu</a>
                </Link>
                <Link href="/animationMath">
                  <a className="block hover:underline text-base">Animasi</a>
                </Link>
                <Link href="/scanMath">
                  <a className="block hover:underline text-base">Scan</a>
                </Link>
                <Link href="/gamesMath">
                  <a className="block hover:underline text-base">Games</a>
                </Link>
              </div>
              <div className="w-full sm:w-1/2 space-y-1">
                <div className="font-light text-gray-600 text-sm">LAINNYA</div>
                <Link href="/merchandise">
                  <a className="block hover:underline text-base">Merchandise</a>
                </Link>
                <Link href="/bookingme">
                  <a className="block hover:underline text-base">
                    Booking Me !
                  </a>
                </Link>
                <Link href="/portofolio">
                  <a className="block hover:underline text-base">Portofolio</a>
                </Link>
              </div>
            </article>
            <article className="w-full sm:w-1/2">
              <div className="font-mw text-4xl">
                Haris<span className="text-gray-500">Lab</span>
              </div>
              <div className="mt-2 text-lg text-gray-500">
                PT. Haris Laboratorium Indonesia
              </div>
              <div className="mt-2 text-sm text-gray-500">
                Jl. Manggis 5, Pondok Kacang Timur, Tangerang Banten 15226,
                Indonesia
              </div>
              <div className=" text-gray-600 w-full mt-10">
                Copyright &copy;2021 Haris
                <span className="font-light">Lab</span> Inc ∙ Made by{" "}
                <a
                  target="_blank"
                  href="https://twitter.com/haritssr"
                  className="text-blue-500 hover:underline"
                >
                  Harits Syah
                </a>{" "}
              </div>
            </article>
          </section>
        </footer>
      </main>
    </div>
  );
}
