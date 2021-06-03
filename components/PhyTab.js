import Link from "next/link";
export default function PhyTab(props) {
  return (
    <div className="flex flex-row items-center w-full my-5 sm:space-x-5 sm:my-10">
      <div className="py-1 text-2xl font-semibold text-gray-700 sm:text-3xl">{props.in}</div>
      <div className="flex flex-row justify-end w-full space-x-2 sm:justify-start">
        <Link href={props.to}>
          <a>
            <div className="px-2 py-1 text-gray-500 border border-gray-300 rounded-md hover:text-gray-900 ">
              Matematika
            </div>
          </a>
        </Link>
        <div className="px-2 py-1 text-gray-900 bg-gray-100 border border-gray-400 rounded-md ">
          Fisika
        </div>
      </div>
    </div>
  );
}
