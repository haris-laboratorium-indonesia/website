import Image from "next/image";
import { HiOutlinePlusSm } from "react-icons/hi";
import { HiOutlineShare } from "react-icons/hi";
export default function merchandise() {
  const kaos = [
    { id: "1", judul: "HarisLab T-Shirt Hukum Newton", image: "/kaos1.jpg" },
    {
      id: "2",
      judul: "HarisLab T-Shirt Hukum Archimedes",
      image: "/kaos2.jpg",
    },
    { id: "3", judul: "HarisLab T-Shirt Hukum Kepler", image: "/kaos3.jpg" },
    { id: "4", judul: "HarisLab T-Shirt Schrodinger", image: "/kaos4.jpg" },
    {
      id: "5",
      judul: "HarisLab T-Shirt Konstanta Planck",
      image: "/kaos5.jpg",
    },
    { id: "6", judul: "HarisLab T-Shirt Pythagoras", image: "/kaos6.jpg" },
    { id: "7", judul: "HarisLab T-Shirt Elektromagnetik", image: "/kaos7.jpg" },
  ];
  return (
    <>
      <div className="text-2xl sm:text-3xl font-semibold font-mw mt-5">
        Merchandise
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-5 sm:gap-10 my-5">
        {kaos.map((kao) => (
          <div key={kaos.id}>
            <div className="font-light sm:text-sm mb-2 w-4/5">{kao.judul}</div>
            <Image
              className="rounded-lg"
              src={kao.image}
              width="1000px"
              height="1000px"
              layout="intrinsic"
              priority
            />
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                <div className="p-1 border border-gray-500 rounded-lg hover:border-[#3a3a3c]">
                  <HiOutlinePlusSm className="text-gray-500 hover:text-[#3a3a3c]" />
                </div>
                <div className="p-1 border border-gray-500 rounded-lg hover:border-[#3a3a3c]">
                  <HiOutlineShare className="text-gray-500 hover:text-[#3a3a3c]" />
                </div>
              </div>
              <div className="rounded-lg px-5 py-1 bg-black border border-black text-sm text-white hover:bg-white hover:text-black">
                Beli
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
