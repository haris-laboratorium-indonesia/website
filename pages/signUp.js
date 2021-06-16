const signUp = () => {
  return (
    <main className="mt-16">
      <form className="w-full p-5 mx-auto space-y-4 bg-white border border-gray-500 rounded-lg shadow-md sm:w-1/2">
        <h1 className="text-3xl font-medium">Daftar</h1>
        <section className="flex flex-col">
          <label className="text-sm" htmlFor="nama">
            Nama
          </label>
          <input
            className="px-2 py-1 border border-black rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            type="text"
            id="nama"
            placeholder="Nama"
          />
        </section>

        <section className="flex flex-col">
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="px-2 py-1 border border-gray-500 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            type="email"
            id="email"
            placeholder="Email"
          />
        </section>
        <div className="text-sm text-center text-gray-500 ">
          Dengan mendaftar berarti kalian setuju dengan{" "}
          <a href="/" className="text-blue-500">
            aturan
          </a>{" "}
          dan{" "}
          <a href="/" className="text-blue-500">
            privasi
          </a>{" "}
          kami.
        </div>
        <button className="items-center w-full px-3 py-2 space-x-5 text-white bg-black border border-black rounded-md hover:bg-white hover:text-black focus:outline-none">
          Daftar{" "}
        </button>
      </form>
    </main>
  );
};

export default signUp;
