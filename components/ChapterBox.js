import Link from "next/link";
import { HiFolder } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";

export default function ChapterBox({ to, title }) {
  return (
    <main>
      <Link href={`${to}`}>
        <a className="flex items-center justify-between w-full px-0 py-3 sm:px-2 sm:py-1 sm:hover:bg-gray-100 sm:border sm:border-white sm:hover:border-gray-400 hover:rounded">
          <div className="flex items-center sm:justify-between">
            <HiFolder className="w-6 h-6 mr-1 text-[#1D1D1F]" />
            <div className="truncate">{title}</div>
          </div>
          <HiOutlineChevronRight className="w-5 h-5 sm:hidden" />
        </a>
      </Link>
    </main>
  );
}

// komponen ini ada di homeMath.js, homePhy.js
