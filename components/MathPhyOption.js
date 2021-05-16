import { Menu } from "@headlessui/react";
import { HiOutlineChevronDown } from "react-icons/hi";
import Link from "next/link";

export default function MathPhyOption(props) {
  return (
    <Menu as="div" className="relative inline-block w-full mb-5">
      <div className="flex items-center">
        {/* current page */}
        <Menu.Button className=" focus:outline-none w-full sm:w-1/4 flex items-center px-2 py-1.5 rounded-md focus:ring space-x-3 border border-black justify-center bg-white">
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
  );
}
