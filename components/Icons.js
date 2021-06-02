import Link from "next/link";

export default function Icons({ to, children, name }) {
  return (
    <div className="mx-auto group ">
      <Link href={to}>
        <a>
          <div className="flex justify-centerh-15 w-15 rounded-xl p-3.5 bg-gradient-to-t from-gray-200 to-gray-100 items-center transform hover:translate-y-0.5 -translate-y-0.5 transition duration-200 ease-in-out hover:shadow-inner shadow-hero">
            {children}
          </div>
        </a>
      </Link>
      <div className="text-[#45484a] text-xs mt-1 text-center w-14">{name}</div>
    </div>
  );
}
