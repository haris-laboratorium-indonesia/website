import Judul from "../components/Judul";
import Link from "next/link";

const materi = () => {
  return (
    <div>
      <Judul page="Materi"  textColor="text-rose-500" />
      <div className="flex flex-col space-y-5 sm:w-1/4">
        <Link href="/materi/matematika">
          <a className="block px-4 py-2 font-medium bg-gray-100 rounded hover:bg-gray-200 text-rose-500">
            Materi Matematika
          </a>
        </Link>
        <Link href="/materi/fisika">
          <a className="block px-4 py-2 font-medium bg-gray-100 rounded hover:bg-gray-200 text-rose-500">
            Materi Fisika
          </a>
        </Link>
      </div>
    </div>
  );
};

export default materi;
