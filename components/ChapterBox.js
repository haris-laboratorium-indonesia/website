import Link from "next/link";
import { HiFolder } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";

export default function ChapterBox({to, title}) {
  return (
    <div className="">
      <Link href={`${to}`}>
        <a className="flex items-center justify-between w-full px-0 py-2  sm:hover:bg-gray-100 sm:border sm:border-white sm:hover:border-gray-400 sm:px-2 sm:py-1 hover:rounded">
          <div className="flex items-center sm:justify-between">
            <HiFolder className="w-6 h-6 mr-1 text-gray-700 " />
            <div className="truncate">{title}</div>
          </div>
          <HiOutlineChevronRight className="w-5 h-5 text-gray-400 sm:hidden" />
        </a>
      </Link>
    </div>
  );
}
