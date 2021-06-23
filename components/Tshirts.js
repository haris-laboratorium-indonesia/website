import Image from "next/image";
import { HiOutlinePlusSm } from "react-icons/hi";
import { HiOutlineShare } from "react-icons/hi";

const Tshirts = ({ key, title, image }) => {
  return (
    <div key={key}>
      <div className="w-4/5 mb-2 text-sm font-light truncate sm:text-sm">
        {title}
      </div>
      <Image
        className="rounded-md"
        alt="Foto Baju"
        src={image}
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
  );
};

export default Tshirts;
