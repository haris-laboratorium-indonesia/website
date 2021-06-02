export default function signUp() {
  return (
    <main className="max-w-5xl mx-auto px-5 lg:px-0 mt-5">
      <form className=" bg-white mx-auto w-full sm:w-1/2 space-y-4 shadow-md border border-gray-500 rounded-lg p-5 ">
        <h1 className="text-3xl font-medium">Sign Up</h1>
        <section className="flex flex-col">
          <label className="text-sm" htmlFor="nama">
            Nama
          </label>
          <input
            className="px-2 py-1 rounded border border-black focus:outline-none focus:ring-1 focus:ring-blue-500"
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
            className="px-2 py-1 rounded border border-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            type="email"
            id="email"
            placeholder="Email"
          />
        </section>
        <div className="text-center text-sm text-gray-500 ">
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
        <button className="px-3 py-2 items-center rounded-md   bg-black border border-black hover:bg-white hover:text-black focus:outline-none space-x-5 w-full text-white">
          Sign Up
        </button>
      </form>
    </main>
  );
}
