import Link from "next/link";

export default function Icons({ to, children, name }) {
  return (
    <div className="mx-auto ">
      <Link href={to}>
        <a>
          <div className="group flex justify-center h-15 w-15 lg:w-16 lg:h-16 rounded-xl p-3.5 bg-white bg-opacity-70 items-center transform hover:translate-y-0.5 -translate-y-0.5 transition duration-200 ease-in-out hover:shadow-none shadow-hero">
            {children}
          </div>
        </a>
      </Link>
      <div className="text-[#45484a] text-xs mt-1 text-center w-14">{name}</div>
    </div>
  );
}
