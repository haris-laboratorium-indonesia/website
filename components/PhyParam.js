import Link from "next/link";
export default function PhyParam(props) {
  return (
    <Link href={props.to}>
      <a>
        <div className="flex flex-row border-b border-black items-center my-3">
          <div className="px-2 py-1 hover:text-blue-500 border border-white border-b-0">Matematika</div>
          <div className=" px-2 py-1 rounded-t-md border-b-0 border-black border hover:text-blue-500">
            Fisika
          </div>
        </div>
      </a>
    </Link>
  );
}
