import Link from "next/link";

const ChapterBox = ({ to, title }) => {
  return (
    <main>
      <Link href={to}>
        <a className="flex items-center justify-between w-full px-0 py-3 sm:px-1.5 sm:py-1.5 sm:hover:bg-gray-100 sm:hover:rounded-md ">
          <div className="flex items-center sm:justify-between">
            <Folder />

            <p className="text-gray-700 truncate">{title}</p>
          </div>
          <RightArrow a="text-gray-700" />
        </a>
      </Link>
    </main>
  );
};

export default ChapterBox;

export const RightArrow = (a) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${a} w-5 h-5 sm:hidden`}
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
      className="w-6 h-6 mr-1 text-blue-400"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#60A5FA"
      {...props}
    >
      <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  );
};
// komponen ini ada di homeMath.js, homePhy.js
{/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
</svg> */}