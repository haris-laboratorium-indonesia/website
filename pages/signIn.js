export default function signUp() {
  return (
    
      <form className="mx-auto w-full sm:w-1/2 space-y-4 shadow-md border border-gray-500 rounded-lg p-5 bg-white">
        <h1 className="text-3xl  font-medium">Sign In</h1>
        <section className="flex flex-col">
          <label className="text-sm" htmlFor="nama">
            Nama
          </label>
          <input
            className=" px-2 py-1 rounded border border-black focus:outline-none focus:ring-1 focus:ring-blue-500"
            type="text"
            id="nama"
            placeholder="Nama "
            autoComplete="username"
          />
        </section>
        <section className="flex flex-col">
          <label className="text-sm" htmlFor="Password">
            Password
          </label>
          <input
            className=" px-2 py-1 rounded border border-black focus:outline-none focus:ring-1 focus:ring-blue-500"
            type="text"
            id="Password"
            placeholder="Password"
            autoComplete="new-password"
            autoComplete="current-password"
          />
        </section>

        <button className="px-3 py-2 items-center rounded-md   bg-black border border-black hover:bg-white hover:text-black focus:outline-none space-x-5 w-full text-white">
          Sign In
        </button>
      </form>
  );
}
