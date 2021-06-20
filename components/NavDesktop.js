import Link from "next/link";
import { Popover } from "@headlessui/react";
import { HiOutlineChevronDown } from "react-icons/hi";

const NavDesktop = () => {
  const nav =
    "px-2.5 py-1 text-sm rounded-md transition duration-100 ease-out text-gray-800 border-white hover:border-gray-300 hover:bg-gray-50 border";
  const lainnya = "hover:bg-gray-50 py-1 px-2.5 text-sm";
  return (
    <nav className="hidden md:block">
      <nav className="flex flex-row items-center justify-between w-full px-5 py-3 md:flex xl:px-0">
        {/* Logo */}
        <Link href="/">
          <a className="items-center block text-xl font-semibold font-mw">
            <span className="font-bold">Haris</span>
            <span className="font-light">Lab</span>
          </a>
        </Link>

        {/* Desktop Link */}
        <Link href="/materi/matematika">
          <a className={nav}>Materi</a>
        </Link>
        <Link href="/kartu">
          <a className={nav}>Kartu</a>
        </Link>
        <Link href="/kalkulator">
          <a className={nav}>Kalkulator</a>
        </Link>
        <Link href="/animasi">
          <a className={nav}>Animasi</a>
        </Link>
        <Link href="/scan">
          <a className={nav}>Scan</a>
        </Link>
        <Link href="/games">
          <a className={nav}>Games</a>
        </Link>

        {/* Lainnya */}
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className="flex items-center justify-between px-2 py-1 space-x-1 text-sm text-gray-800 border border-white rounded-md hover:border-gray-300 hover:bg-gray-50 focus:outline-none">
                <span>Lainnya</span>
                <HiOutlineChevronDown
                  className={`${open ? "transform rotate-180" : ""}`}
                />
              </Popover.Button>

              <Popover.Panel className="absolute z-50 flex flex-col py-2 space-y-2 bg-white rounded shadow">
                <Link href="/blog">
                  <a className={lainnya}>Blog</a>
                </Link>
                <Link href="/bookingLes">
                  <a className={lainnya}>Booking Les </a>
                </Link>

                <Link href="/merchandise">
                  <a className={lainnya}>Merchandise</a>
                </Link>
                <Link href="/portofolio">
                  <a className={lainnya}>Portofolio</a>
                </Link>
              </Popover.Panel>
            </>
          )}
        </Popover>

        {/* Login Link */}
        <Link href="/login">
          <a className="text-xs rounded-md text-black border border-black hover:bg-black hover:text-white  px-3 py-1.5">
            Login
          </a>
        </Link>
      </nav>
    </nav>
  );
};

export default NavDesktop;
