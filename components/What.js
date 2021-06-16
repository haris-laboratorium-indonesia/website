const What = ({ title, description }) => {
  return (
    <main className="mt-20 mb-5 sm:mt-20 sm:mb-10">
      <section className="py-1 my-2 text-xl font-semibold ">{title}</section>
      <section>{description}</section>
    </main>
  );
};

export default What;
