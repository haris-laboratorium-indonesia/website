import { Menu } from "@headlessui/react";
import { HiOutlineChevronDown } from "react-icons/hi";
import Link from "next/link";

export default function MathPhyOption(props) {
  return (
    <main className="flex justify-between items-center mb-5">
      <Menu as="div" className="relative inline-block w-full ">
        <div className="flex items-center">
          {/* current page */}
          <Menu.Button className=" focus:outline-none w-full sm:w-1/4 flex items-center px-2 py-1 rounded-md focus:ring space-x-3 border border-black justify-center bg-white">
            <section>{props.currentPage}</section>
            <HiOutlineChevronDown />
          </Menu.Button>
        </div>

        <Menu.Items className="absolute left-0 w-full sm:w-1/4 mt-2 origin-top-right bg-white   border border-gray-500 shadow-2xl rounded-md">
          <Menu.Item>
            {({ active }) => (
              <button className="w-full hover:bg-[#f9f5f1] rounded-none ">
                {active ? (
                  <Link href={props.page}>
                    <a className="w-full p-2 block">{props.anotherPage}</a>
                  </Link>
                ) : (
                  <Link href={props.page}>
                    <a className="w-full p-2 block">{props.anotherPage}</a>
                  </Link>
                )}
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
      {/* search button */}
      {/* container */}
      <main className="hidden sm:block w-1/4">
        {/* component search */}
        <section className="bg-white flex items-center border border-black px-2 py-1 rounded-md ">
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
    </main>
  );
}
