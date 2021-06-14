import Link from "next/link";
import { Popover } from "@headlessui/react";
import { HiOutlineChevronDown } from "react-icons/hi";
export default function NavDesktop() {
  const nav =
    "px-2.5 py-1 text-sm rounded-md transition duration-200 text-gray-800 ";
  const lainnya = "hover:bg-gray-50 py-1 px-2.5 text-sm";
  return (
    <nav className="hidden md:block">
      <nav className="flex flex-row items-center justify-between w-full px-5 py-4 md:flex xl:px-0 ">
        <Link href="/">
          <a className="flex flex-row items-center text-lg font-semibold font-mw ">
            Haris<span className="font-light">Lab</span>
          </a>
        </Link>
        <Link href="/math/homeMath">
          <a
            className={`${nav} hover:bg-red-50 hover:text-red-700 border border-white hover:border-red-300`}
          >
            Materi
          </a>
        </Link>
        <Link href="/flashCardMath">
          <a
            className={`${nav} hover:bg-yellow-50 hover:text-yellow-700 border border-white hover:border-yellow-300`}
          >
            FlashCard
          </a>
        </Link>
        <Link href="/calculatorMath">
          <a
            className={`${nav} hover:bg-green-50 hover:text-green-700 border border-white hover:border-green-300`}
          >
            Kalkulator
          </a>
        </Link>
        <Link href="/animationMath">
          <a
            className={`${nav} hover:bg-cyan-50 hover:text-cyan-700 border border-white hover:border-cyan-300`}
          >
            Animasi
          </a>
        </Link>
        <Link href="/scanMath">
          <a
            className={`${nav} hover:bg-blue-50 hover:text-blue-700 border border-white hover:border-blue-300`}
          >
            ScanSoal
          </a>
        </Link>
        <Link href="/gamesMath">
          <a
            className={`${nav} hover:bg-fuschsia-50 hover:text-fuschsia-700 border border-white hover:border-fuschsia-300`}
          >
            Games
          </a>
        </Link>

        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className="flex items-center px-2 py-1 space-x-1 text-sm text-gray-800 border border-white rounded-md justify-b-5etween hover:border-gray-200 hover:bg-gray-50 focus:outline-none">
                <span>Lainnya</span>
                <HiOutlineChevronDown
                  className={`${open ? "transform rotate-180" : ""}`}
                />
              </Popover.Button>

              <Popover.Panel className="absolute z-50 flex flex-col py-2 space-y-2 bg-white rounded shadow">
                <Link href="/blog">
                  <a className={lainnya}>Blog</a>
                </Link>
                <Link href="/bookingMe">
                  <a className={lainnya}>Booking Les </a>
                </Link>

                <Link href="/merchandise">
                  <a className={lainnya}>Merchandise</a>
                </Link>
                <Link href="/merchandise">
                  <a className={lainnya}>Portofolio</a>
                </Link>
              </Popover.Panel>
            </>
          )}
        </Popover>

        <Link href="/signUp">
          <a className="text-xs rounded-md text-white bg-gray-800 hover:bg-opacity-90  px-3 py-1.5">
            Login
          </a>
        </Link>
      </nav>
    </nav>
  );
}
