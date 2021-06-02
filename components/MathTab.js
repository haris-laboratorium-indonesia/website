import Link from "next/link";
export default function MathTab(props) {
  return (
    <div className="flex flex-row sm:space-x-5 my-5 sm:my-10 items-center w-full">
      <div className="text-2xl sm:text-3xl font-semibold font-mw py-1">{props.in}</div>
      <div className="flex flex-row justify-end sm:justify-start space-x-2 w-full ">
        <div className=" bg-gray-100 px-2 py-1 rounded-md text-gray-900 border border-gray-400 shadow-inner">
          Matematika
        </div>
        <Link href={props.to}>
          <a>
            <div className="px-2 py-1 text-gray-500 hover:text-gray-900 border rounded-md border-gray-300 ">
              Fisika
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
