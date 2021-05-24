import Link from "next/link";
import { HiFolder } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";

export default function ChapterBox(props) {
  return (
    <div className=" ">
      <Link href={`${props.to}`}>
        <a className=" w-full flex justify-between items-center hover:bg-gray-100 border border-white hover:border-gray-400 p-2 sm:py-1 hover:rounded">
          <div className="flex items-center sm:justify-between">
            <HiFolder className=" w-6 h-6 text-gray-800 mr-1" />
            <div className="truncate">{props.title}</div>
          </div>
          <HiOutlineChevronRight className="w-5 h-5 text-gray-500  sm:hidden" />
        </a>
      </Link>
    </div>
  );
}
