import Link from "next/link";

export default function Icons({ to, children, name }) {
  return (
    <main className="block">
      <Link href={to}>
        <a>
          <div className="group flex justify-center h-15 w-15 lg:w-16 lg:h-16 rounded-xl p-3.5 bg-white bg-opacity-70 items-center transform hover:translate-y-0.5 -translate-y-0.5 transition duration-100 ease-in-out hover:shadow-none shadow-lg">
            {children}
          </div>
        </a>
      </Link>
      <div className="mt-1 text-xs text-center w-14 lg:w-16">{name}</div>
    </main>
  );
}

// komponen ini ada di index.js
