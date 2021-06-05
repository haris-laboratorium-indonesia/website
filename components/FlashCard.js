import Image from "next/image";
import Link from "next/link";
import { HiOutlineCalculator } from "react-icons/hi";

export default function FlashCard() {
  return (
    <div className="p-5 bg-white border border-black rounded-md">
      <div className="text-sm text-center text-gray-400">Kuantum</div>
      <div className="text-center text-gray-800 text">Kuantum Tunelling</div>
      <div className="my-5 text-center">
        <Image src="/quantumTunelling.gif" width="400" height="200" priority />
      </div>
      <div className="flex items-center justify-between bg-blue-400">
        <p>rumus</p>
        <Link href="/calculator/calculatorPhy">
          <a className="flex items-center justify-center w-5 h-5 p-1 text-center border border-black rounded">
            <HiOutlineCalculator className="w-3 h-3" />
          </a>
        </Link>
      </div>
      <div className="mt-5 text-xs">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure molestias
        nostrum amet perferendis quam modi ullam quis corrupti cumque. Eveniet?
      </div>
    </div>
  );
}

// komponen ini ada di cardMath.js
