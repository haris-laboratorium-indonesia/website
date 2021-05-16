import Link from "next/link";
import { HiFolder } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";

export default function ChapterBox(props) {
  return (
    <div className="group hover:bg-[#f9f5f1]  flex items-center hover:rounded px-2 py-1">
      <HiFolder className=" w-7 h-7 text-black mr-2" />
      <Link href={`${props.toPage}`}>
        <a className="w-full truncate ">{props.title}</a>
      </Link>
      <HiOutlineChevronRight className="w-5 h-5 text-gray-500  sm:hidden" />
    </div>
  );
}
