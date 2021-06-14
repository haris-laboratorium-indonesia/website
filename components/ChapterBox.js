import Link from "next/link";
import { HiOutlineChevronRight } from "react-icons/hi";

export default function ChapterBox({ to, title }) {
  return (
    <main>
      <Link href={to}>
        <a className="flex items-center justify-between w-full px-0 py-3 sm:px-2 sm:py-1 sm:hover:bg-gray-100 sm:border sm:border-gray-300">
          <div className="flex items-center sm:justify-between">
            <svg
              className="w-6 h-6 mr-1 text-red-500"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              shape-rendering="geometricPrecision"
            >
              <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
            </svg>

            <p className="truncate">{title}</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </Link>
    </main>
  );
}

// komponen ini ada di homeMath.js, homePhy.js
