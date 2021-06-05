import Image from "next/image";
import { HiOutlinePlusSm } from "react-icons/hi";
import { HiOutlineShare } from "react-icons/hi";
import { Kaoss } from "../lib/Kaoss";
import { Posters } from "../lib/Posters";

export default function merchandise() {
  return (
    <main className="max-w-4xl px-5 mx-auto lg:px-0">
      <section className="py-1 my-5 text-2xl font-semibold sm:text-3xl">
        Merchandise
      </section>
      <div className="mb-5 text-4xl font-semibold ">Kaos</div>
      <div className="grid grid-cols-2 gap-10 my-5 sm:grid-cols-4 md:grid-cols-4 gap-y-10 sm:gap-x-10">
        {Kaoss.map((kaos) => (
          <div key={kaos.id}>
            <div className="w-4/5 mb-2 text-sm font-light truncate sm:text-sm">
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
              <div className="px-5 py-1 text-xs text-black bg-white border border-gray-600 rounded hover:bg-black hover:text-white">
                Beli
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20 mb-5 text-4xl font-semibold">Poster</div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        {Posters.map((poster) => (
          <div key={poster.id}>
            <div className="w-4/5 mb-2 text-xs font-light truncate sm:text-sm">
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
              <div className="px-5 py-1 text-xs text-black bg-white border border-gray-600 rounded hover:bg-black hover:text-white">
                Beli
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
