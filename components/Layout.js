import Link from "next/link";
import { Menu } from "@headlessui/react";

export default function Layout({ children }) {
  return (
    <main>
      {/* navigation */}
      {/* container */}
      <main className=" sticky top-0 z-10 mx-auto h-auto bg-white backdrop-filter backdrop-blur ">
        {/* container */}
        <main className="max-w-4xl w-full mx-auto sm:px-5 py-2 sm:py-3">
          {/* desktop navigation*/}
          <nav className="sm:flex justify-between items-center hidden ">
            {/* brand name / home button */}
            <section>
              <Link href="/">
                <a className="text-lg">
                  <span className="font-normal">HarisLab</span>
                </a>
              </Link>
            </section>

            {/* main link */}
            <section className="flex flex-row space-x-5">
              <Link href="/homeMath">
                <a>Matematika</a>
              </Link>
              <Link href="/homePhy">
                <a>Fisika</a>
              </Link>
            </section>

            {/* signIn/signUp */}
            <section className="flex flex-row space-x-3">
              <Link href="/signIn">
                <a>Masuk</a>
              </Link>
              <Link href="/signUp">
                <a>Daftar</a>
              </Link>
            </section>
          </nav>

          {/* mobile navigation */}
          <nav className="flex flex-row-reverse sm:hidden w-full">
            <div className="w-full">
              <Menu as="div" className="relative inline-block w-full">
                <div className="flex items-center justify-between px-5 sm:px-0 ">
                  {/* brand name / home button */}
                  <section>
                    <Link href="/">
                      <a className="text-lg">
                        <span className="font-normal">HarisLab</span>
                      </a>
                    </Link>
                  </section>

                  <Menu.Button className=" focus:outline-none ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
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

                <Menu.Items className="absolute right-0 w-1/3 mt-2 origin-top-right bg-black  text-white mr-5 sm:mr-0 divide-y divide-gray-700 rounded-md shadow-xl ">
                  <Menu.Item>
                    {({ active }) => (
                      <button className={` group w-full p-2  `}>
                        {active ? (
                          <Link href="/homeMath">
                            <a>Matematika</a>
                          </Link>
                        ) : (
                          <Link href="/homeMath">
                            <a>Matematika</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className={` group w-full p-2  `}>
                        {active ? (
                          <Link href="/homePhy">
                            <a>Fisika</a>
                          </Link>
                        ) : (
                          <Link href="/homePhy">
                            <a>Fisika</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className={` group w-full p-2  `}>
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
                      <button className={` group w-full p-2  `}>
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
                </Menu.Items>
              </Menu>
            </div>
          </nav>
        </main>
      </main>

      {/* search button */}
      {/* container */}
      <main className="w-full mx-auto max-w-4xl px-5">
        {/* component search */}
        <section className="flex items-center border border-black px-2 py-1.5 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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
            className="focus:outline-none  w-full focus:placeholder-black ml-1 "
            placeholder="Search"
          />
        </section>
      </main>

      {/* content */}
      {/* jangan lupa untuk membuat px-5 setiap pages */}
      <main className="w-full mx-auto max-w-4xl min-h-screen px-5 mt-10">
        {children}
      </main>
    </main>
  );
}
