import Link from "next/link";
import { Menu } from "@headlessui/react";
import Head from "next/head";
export default function Layout({ children }) {
  const nav = "px-2 py-1 rounded-md hover:text-blue-600";
  return (
    <div className="font-inter">
      <Head>
        <title>HarisLab</title>
        <link rel="icon" href="/logo2.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
          integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
          crossorigin="anonymous"
        />

        {/* <!-- The loading of KaTeX is deferred to speed up page rendering --> */}
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.js"
          integrity="sha384-YNHdsYkH6gMx9y3mRkmcJ2mFUjTd0qNQQvY9VYZgQd7DcN7env35GzlmFaZ23JGp"
          crossorigin="anonymous"
        ></script>

        {/* <!-- To automatically render math in text elements, include the auto-render extension: --> */}
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/contrib/auto-render.min.js"
          integrity="sha384-vZTG03m+2yp6N6BNi5iM4rW4oIwk5DfcNdFfxkk9ZWpDriOkXX8voJBFrAO7MpVl"
          crossorigin="anonymous"
          onload="renderMathInElement(document.body);"
        ></script>
      </Head>
      <main>
        {/* navigation */}
        {/* container */}
        <main className=" sticky top-0 z-10 mx-auto h-auto blur border-b border-gray-300">
          {/* container */}
          <main className="max-w-5xl w-full mx-auto px-5 py-3">
            {/* desktop navigation*/}
            <nav className="md:flex justify-between items-center hidden text-sm">
              {/* brand name / home button */}
              <section className=" flex justify-start items-center">
                <Link href="/">
                  <a className="text-lg flex flex-row items-center">
                    <div className="ml-0.5 font-semibold ">
                      Haris
                      <span className="font-light">Lab</span>
                    </div>
                  </a>
                </Link>
              </section>

              {/* main link */}
              <section className="flex flex-row justify-end items-center space-x-7 text-sm ">
                <Link href="/learn/math/homeMath">
                  <a className={nav}>Belajar</a>
                </Link>
                <Link href="/calculator/calculatorMath">
                  <a className={nav}>Kalkulator</a>
                </Link>
                <Link href="/flashCard/flashCardMath">
                  <a className={nav}>Flash Card</a>
                </Link>
                <Link href="/animation/animationMath">
                  <a className={nav}>Animasi</a>
                </Link>
                <Link href="/scan/scanMath">
                  <a className={nav}>Scan</a>
                </Link>
                <Link href="/scan/scanMath">
                  <a className={nav}>Games</a>
                </Link>
              </section>

              {/* signIn/signUp */}
              <section className="flex flex-row justify-end items-center space-x-2">
                <Link href="/signIn">
                  <a className="px-2 py-1 hover:rounded-md hover:text-blue-500 ">
                    Masuk
                  </a>
                </Link>
                <Link href="/signUp">
                  <a className="text-xs rounded-full bg-blue-600  text-white hover:bg-opacity-90  px-3 py-1.5">
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
                        <div className="ml-0.5 font-semibold">
                          Haris
                          <span className="font-light">Lab</span>
                        </div>
                      </a>
                    </Link>
                  </section>

                  <Menu.Button className=" focus:outline-none ">
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
                        strokeWidth={2}
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  </Menu.Button>
                </div>

                <Menu.Items className="absolute right-0 w-2/3 mt-2 p-3 pb-0 origin-top-right blurBlack text-white  mr-0  rounded-lg h-auto shadow-lg">
                  <div>
                    {/* search button */}
                    {/* container */}
                    <main className="w-full">
                      {/* component search */}
                      <section className=" flex items-center  px-1.5 py-1 rounded-md bg-gray-100">
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
                  </div>
                  <div className="py-3 space-y-3 border-b">
                    <Menu.Item>
                      {({ active }) => (
                        <button className="w-full text-left rounded-lg hover:text-blue-500 ">
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
                        <button className="w-full text-left rounded-lg hover:text-blue-500 ">
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
                        <button className="w-full text-left rounded-lg hover:text-blue-500 ">
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
                        <button className="w-full text-left rounded-lg hover:text-blue-500 ">
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
                        <button className="w-full text-left rounded-lg hover:text-blue-500 ">
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
                  <div className="py-3 space-y-3">
                    <Menu.Item>
                      {({ active }) => (
                        <button className="w-full text-left rounded-lg hover:text-blue-500 ">
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
                        <button className="w-full text-left rounded-lg hover:text-blue-500 ">
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
        <main className="w-full mx-auto max-w-5xl min-h-screen px-5 mt-5">
          {children}
        </main>
        <footer className="bottom-0 text-sm sm:text-base text-center">
          <div className="p-3 sm:p-5 text-gray-600">
            &copy;2021 Haris<span className="font-light">Lab</span> ∙ Made by{" "}
            <a
              target="_blank"
              href="https://twitter.com/haritssr"
              className="text-blue-500 hover:underline"
            >
              Harits Syah
            </a>{" "}
          </div>
        </footer>
      </main>
    </div>
  );
}
