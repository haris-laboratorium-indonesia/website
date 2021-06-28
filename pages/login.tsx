import Layout from "@/components/Layout";

const login = () => {
  return (
    <Layout browserTitle="Login" description="Halaman Login">
      <form className="w-full p-5 mx-auto mt-16 space-y-4 bg-white border border-gray-500 rounded-lg shadow-md sm:w-1/2 ">
        <h1 className="text-3xl font-medium">Login</h1>
        <section className="flex flex-col">
          <label className="text-sm" htmlFor="nama">
            Nama
          </label>
          <input
            className="px-2 py-1 border border-black rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
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
            className="px-2 py-1 border border-black rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            type="text"
            id="Password"
            placeholder="Password"
            autoComplete="new-password"
            autoComplete="current-password"
          />
        </section>

        <button className="items-center w-full px-3 py-2 space-x-5 text-white duration-200 bg-black border border-black rounded-md hover:bg-white hover:text-black focus:outline-none">
          Login
        </button>
      </form>
    </Layout>
  );
};

export default login;
