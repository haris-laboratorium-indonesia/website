export default function What({ title, description }) {
  return (
    <main className="max-w-4xl mx-auto mt-20 mb-5 sm:mt-20 sm:mb-10">
      <section className="py-1 my-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        {title}
      </section>
      <section>{description}</section>
    </main>
  );
}
