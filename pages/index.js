import Link from "next/link";
export default function Home() {
  const a =
    "rounded-md text-white hover:text-black bg-black hover:bg-white border border-black px-2 py-1.5 text-center";
  return (
    <main className="grid grid-cols-2 sm:grid-cols-5 gap-5">
      <Link href="/learn/math/homeMath">
        <a className={a}>Belajar</a>
      </Link>

      <Link href="/calculator/calculatorMath">
        <a className={a}>Kalkulator</a>
      </Link>

      <Link href="/flashCard/flashCardMath">
        <a className={a}>Flash Card</a>
      </Link>

      <Link href="/animation/animationMath">
        <a className={a}>Animasi</a>
      </Link>

      <Link href="/scan/scanMath">
        <a className={a}>Scan</a>
      </Link>
    </main>
  );
}
