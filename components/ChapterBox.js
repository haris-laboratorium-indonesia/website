import Link from "next/link";
import { HiFolder } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";

export default function ChapterBox({to, title}) {
  return (
    <div className="">
      <Link href={`${to}`}>
        <a className=" w-full flex justify-between items-center sm:hover:bg-gray-100 sm:border sm:border-white sm:hover:border-gray-400 py-2 px-0 sm:px-2 sm:py-1 hover:rounded sm:hover:shadow-inner">
          <div className="flex items-center sm:justify-between">
            <HiFolder className=" w-6 h-6 text-gray-700 mr-1" />
            <div className="truncate">{title}</div>
          </div>
          <HiOutlineChevronRight className="w-5 h-5 text-gray-400  sm:hidden" />
        </a>
      </Link>
    </div>
  );
}
