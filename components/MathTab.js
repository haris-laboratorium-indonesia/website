import Link from "next/link";
export default function MathTab(props) {
  return (
    <main className="flex flex-row items-center w-full my-5 sm:space-x-5 sm:my-10">
      <section className="py-1 text-2xl font-semibold sm:text-3xl">
        {props.in}
      </section>
      <section className="flex flex-row justify-end w-full space-x-2 sm:justify-start ">
        <div className="px-2 py-1 border border-black rounded-md ">Matematika</div>
        <Link href={props.to}>
          <a>
            <div className="px-2 py-1 border border-black rounded-md ">Fisika</div>
          </a>
        </Link>
      </section>
    </main>
  );
}
