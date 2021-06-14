export default function Tab({ textColor, halaman }) {
  return (
    <main className="sticky top-0 flex flex-row items-center justify-between w-full h-auto py-1 mb-5 bg-white border-b border-gray-300 sm:border-0">
      <section className={`text-2xl font-semibold ${textColor}`}>
        {halaman}
      </section>
    </main>
  );
}
