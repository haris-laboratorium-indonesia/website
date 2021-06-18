import Link from "next/link";

const ChapterBox = ({ to, title }) => {
  return (
    <main>
      <Link href={to}>
        <a className="flex items-center justify-between w-full px-0 py-3 sm:px-2 sm:py-2 sm:hover:bg-gray-100 sm:hover:rounded-md ">
          <div className="flex items-center sm:justify-between">
            <Folder />

            <p className="truncate">{title}</p>
          </div>
          <RightArrow />
        </a>
      </Link>
    </main>
  );
};

export default ChapterBox;

const RightArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-gray-700 sm:hidden"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
};

const Folder = (props) => {
  return (
    <svg
      className="w-6 h-6 mr-1 text-rose-500"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="#fff"
      shape-rendering="geometricPrecision"
      {...props}
    >
      <path d="M2.707 7.454V5.62C2.707 4.725 3.469 4 4.409 4h4.843c.451 0 .884.17 1.204.474l.49.467c.126.12.296.186.473.186h8.399c.94 0 1.55.695 1.55 1.59v.737m-18.661 0h-.354a.344.344 0 00-.353.35l.508 11.587c.015.34.31.609.668.609h17.283c.358 0 .652-.269.667-.61L22 7.805a.344.344 0 00-.353-.35h-.278m-18.662 0h18.662" />
    </svg>
  );
};
// komponen ini ada di homeMath.js, homePhy.js
