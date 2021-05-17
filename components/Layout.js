import Link from "next/link";
import { Menu } from "@headlessui/react";

export default function Layout({ children }) {
  const nav = "px-2 py-1 rounded-md hover:bg-[#f9f5f1]";
  return (
    <main>
      {/* navigation */}
      {/* container */}
      <main className=" sticky top-0 z-10 mx-auto h-auto bg-[#fffefc] backdrop-filter backdrop-blur ">
        {/* container */}
        <main className="max-w-4xl w-full mx-auto p-5">
          {/* desktop navigation*/}
          <nav className="md:flex justify-between items-center hidden text-sm">
            {/* brand name / home button */}
            <section className="flex justify-start space-x-5 items-center">
              <Link href="/">
                <a className="text-2xl">
                  <span className="font-medium">HarisLab</span>
                </a>
              </Link>
            </section>

            {/* main link */}
            <section className="flex flex-row justify-end items-center space-x-2 text-sm ">
              <Link href="/learn/math/homeMath">
                <a className={nav}>Belajar</a>
              </Link>
              <Link href="/blog">
                <a className={nav}>Blog</a>
              </Link>
              <Link href="/calculator/calculatorMath">
                <a className={nav}>Kalkulator</a>
              </Link>
              <Link href="/flashCard/flashCardMath">
                <a className={nav}>FlashCard</a>
              </Link>
              <Link href="/animation/animationMath">
                <a className={nav}>Animasi</a>
              </Link>
              <Link href="/scan/scanMath">
                <a className={nav}>Scan</a>
              </Link>
            </section>

            {/* signIn/signUp */}
            <section className="flex flex-row justify-end items-center space-x-2 ">
              <Link href="/signIn">
                <a className="px-2 py-1 hover:rounded-md hover:bg-[#f9f5f1] ">
                  Masuk
                </a>
              </Link>
              <Link href="/signUp">
                <a className="rounded-md bg-black text-white hover:text-black hover:bg-[#f9f6f1] px-2 py-1">
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
                    <a className="text-xl">
                      <span className="font-normal">HarisLab</span>
                    </a>
                  </Link>
                </section>

                <Menu.Button className=" focus:outline-none ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </Menu.Button>
              </div>

              <Menu.Items className="absolute right-0 w-1/2 mt-2 p-2 pb-0 origin-top-right bg-black text-white mr-0 divide-y divide-gray-500 rounded">
                <div>
                  {/* search button */}
                  {/* container */}
                  <main className="w-full pb-2">
                    {/* component search */}
                    <section className="bg-white flex items-center border border-black px-1.5 py-1 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-black"
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
                      <input
                        type="text"
                        className="text-black focus:outline-none caret-black w-full focus:placeholder-black ml-1 "
                        placeholder="Search"
                      />
                    </section>
                  </main>
                </div>
                <div className="py-2">
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full p-2 text-left hover:bg-gray-900 rounded-none ">
                        {active ? (
                          <Link href="/learn/math/homeMath">
                            <a>Belajar</a>
                          </Link>
                        ) : (
                          <Link href="/learn/math/homeMath">
                            <a>Belajar</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full p-2 text-left hover:bg-gray-900 rounded-none ">
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
                </div>
                <div className="py-2">
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full p-2 text-left hover:bg-gray-900 rounded-none ">
                        {active ? (
                          <Link href="/calculator/calculatorMath">
                            <a>Kalkulator</a>
                          </Link>
                        ) : (
                          <Link href="/calculator/calculatorMath">
                            <a>Kalkulator</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full p-2 text-left hover:bg-gray-900 rounded-none ">
                        {active ? (
                          <Link href="/animation/animationMath">
                            <a>Animasi</a>
                          </Link>
                        ) : (
                          <Link href="/animation/animationMath">
                            <a>Animasi</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full p-2 text-left hover:bg-gray-900 rounded-none ">
                        {active ? (
                          <Link href="/flashCard/flashCardMath">
                            <a>Flash Card</a>
                          </Link>
                        ) : (
                          <Link href="/flashCard/animationMath">
                            <a>Flash Card</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full p-2 text-left hover:bg-gray-900 rounded-none ">
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
                <div className="py-2">
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full p-2 text-left hover:bg-gray-900 rounded-none ">
                        {active ? (
                          <Link href="/signIn">
                            <a>Sign In</a>
                          </Link>
                        ) : (
                          <Link href="/signIn">
                            <a>Sign In</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full p-2 text-left hover:bg-gray-900 rounded-none ">
                        {active ? (
                          <Link href="/signUp">
                            <a>Sign Up</a>
                          </Link>
                        ) : (
                          <Link href="/signUp">
                            <a>Sign Up</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </nav>
        </main>
      </main>

      {/* content */}
      {/* jangan lupa untuk membuat px-5 setiap pages */}
      <main className="w-full mx-auto max-w-4xl min-h-screen px-5 mt-1">
        {children}
      </main>
    </main>
  );
}
