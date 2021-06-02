import Image from "next/image";
import { HiOutlinePlusSm } from "react-icons/hi";
import { HiOutlineShare } from "react-icons/hi";
import { Kaoss } from "../lib/Kaoss";
import { Posters } from "../lib/Posters";

export default function merchandise() {
  return (
    <main className="max-w-5xl mx-auto px-5 lg:px-0">
      <div className="text-2xl sm:text-3xl font-semibold font-mw my-5">
        Merchandise
      </div>
      <div className="mt-20 mb-5 text-4xl font-semibold">Kaos</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-10 gap-y-10 sm:gap-x-10 my-5">
        {Kaoss.map((kaos) => (
          <div key={kaos.id}>
            <div className="font-light text-sm sm:text-sm mb-2 w-4/5 truncate">
              {kaos.judul}
            </div>
            <Image
              className="rounded-md"
              src={kaos.image}
              width="1000px"
              height="1000px"
              layout="intrinsic"
              priority
            />
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                <div className="p-1 border border-white rounded hover:border-[#3a3a3c]">
                  <HiOutlineShare className="text-gray-500 hover:text-[#3a3a3c]" />
                </div>
                <div className="p-1 border border-white rounded hover:border-[#3a3a3c]">
                  <HiOutlinePlusSm className="text-gray-500 hover:text-[#3a3a3c]" />
                </div>
              </div>
              <div className="rounded px-5 py-1 border hover:bg-black border-gray-600 text-xs hover:text-white bg-white text-black">
                Beli
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20 mb-5 text-4xl font-semibold">Poster</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {Posters.map((poster) => (
          <div key={poster.id}>
            <div className="font-light text-xs sm:text-sm mb-2 w-4/5 truncate">
              {poster.judul}
            </div>
            <Image
              className="rounded-md"
              src={poster.image}
              width="1280px"
              height="960px"
              layout="intrinsic"
              priority
            />
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                <div className="p-1 border border-white rounded hover:border-[#3a3a3c]">
                  <HiOutlineShare className="text-gray-500 hover:text-[#3a3a3c]" />
                </div>
                <div className="p-1 border border-white rounded hover:border-[#3a3a3c]">
                  <HiOutlinePlusSm className="text-gray-500 hover:text-[#3a3a3c]" />
                </div>
              </div>
              <div className="rounded px-5 py-1 border hover:bg-black border-gray-600 text-xs hover:text-white bg-white text-black">
                Beli
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
