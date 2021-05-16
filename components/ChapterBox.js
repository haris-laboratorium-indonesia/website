import Link from "next/link";
import { HiFolder } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";

export default function ChapterBox(props) {
  return (
    <div className="group hover:bg-black  flex items-center hover:rounded px-2 py-1">
      <HiFolder className="group-hover:text-white w-7 h-7 text-black mr-2" />
      <Link href={`${props.toPage}`}>
        <a className="w-full truncate group-hover:text-white">{props.title}</a>
      </Link>
      <HiOutlineChevronRight className="w-5 h-5 text-gray-500 group-hover:text-white sm:hidden" />
    </div>
  );
}
