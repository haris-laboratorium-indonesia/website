import Image from "next/image";
import { HiOutlinePlusSm } from "react-icons/hi";
import { HiOutlineShare } from "react-icons/hi";
export default function merchandise() {
  const kaos = [
    { id: "1", judul: " Hukum Newton HarisLab T-Shirt", image: "/kaos1.jpg" },
    {
      id: "2",
      judul: " Hukum Archimedes HarisLab T-Shirt",
      image: "/kaos2.jpg",
    },
    { id: "3", judul: " Hukum Kepler HarisLab T-Shirt", image: "/kaos3.jpg" },
    { id: "4", judul: " Schrodinger HarisLab T-Shirt", image: "/kaos4.jpg" },
    {
      id: "5",
      judul: " Konstanta Planck HarisLab T-Shirt",
      image: "/kaos5.jpg",
    },
    { id: "6", judul: " Pythagoras HarisLab T-Shirt", image: "/kaos6.jpg" },
    { id: "7", judul: " Elektromagnetik HarisLab T-Shirt", image: "/kaos7.jpg" },
  ];
  return (
    <>
      <div className="text-2xl sm:text-3xl font-semibold font-mw mt-5">
        Merchandise
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-5 gap-y-10 sm:gap-x-10 my-5">
        {kaos.map((kao) => (
          <div key={kaos.id}>
            <div className="font-light text-xs sm:text-sm mb-2 w-4/5 truncate">
              {kao.judul}
            </div>
            <Image
              className="rounded"
              src={kao.image}
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
    </>
  );
}
