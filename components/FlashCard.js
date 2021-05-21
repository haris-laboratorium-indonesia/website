import Image from "next/image";
import Link from "next/link";
import { HiOutlineCalculator } from "react-icons/hi";

export default function FlashCard() {
  return (
    <div className="rounded-md bg-white border border-black p-5">
      <div className="text-center text-gray-400 text-sm">Kuantum</div>
      <div className="text-center text-gray-800 text">Kuantum Tunelling</div>
      <div className="text-center my-5">
        <Image src="/quantumTunelling.gif" width="400" height="200" priority />
      </div>
      <div className="flex justify-between bg-blue-400 items-center">
        <p>rumus</p>
        <Link href="/calculator/calculatorPhy">
          <a className="p-1 rounded border-black border w-5 h-5 items-center flex text-center justify-center">
            <HiOutlineCalculator className="w-3 h-3"/>
          </a>
        </Link>
      </div>
      <div className="text-xs mt-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure molestias
        nostrum amet perferendis quam modi ullam quis corrupti cumque. Eveniet?
      </div>
    </div>
  );
}
