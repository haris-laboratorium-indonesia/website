import Link from "next/link";
import { HiFolder } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";

export default function ChapterBox(props) {
  return (
    <div className="group hover:bg-gray-200  flex items-center hover:rounded p-2 sm:py-1">
      <HiFolder className=" w-7 h-7 text-gray-800 mr-1" />
      <Link href={`${props.to}`}>
        <a className="w-full truncate ">{props.title}</a>
      </Link>
      <HiOutlineChevronRight className="w-5 h-5 text-gray-500  sm:hidden" />
    </div>
  );
}
