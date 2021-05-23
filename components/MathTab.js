import Link from "next/link";
export default function MathTab(props) {
  return (
    <>
      <div className="text-3xl font-bold ml-2.5">{props.in}</div>
      <div className="flex flex-row border-b border-gray-400 items-center w-full my-5 ">
        <div className="bg-gray-100 px-3 py-1.5 rounded-t-md ml-2.5 text-gray-900">Matematika</div>
        <Link href={props.to}>
          <a>
            <div className="px-3 py-1.5 border-b-0  text-gray-500 hover:text-gray-900  ">
              Fisika
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}
