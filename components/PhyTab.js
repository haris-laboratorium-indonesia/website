import Link from "next/link";
export default function PhyTab(props) {
  return (
    <div className="flex flex-row space-x-2 my-5 items-center w-full">
      <div className="text-3xl font-semibold font-mw py-1">{props.in}</div>
      <div className="flex flex-row space-x-2">
        <Link href={props.to}>
          <a>
            <div className="px-3 py-1.5 sm:py-1 text-gray-500 hover:text-gray-900 border  rounded-md border-gray-300 ">
              Matematika
            </div>
          </a>
        </Link>
        <div className=" bg-gray-100 px-3 py-1.5 sm:py-1 rounded-md text-gray-900 border border-gray-400">
          Fisika
        </div>
      </div>
    </div>
  );
}
