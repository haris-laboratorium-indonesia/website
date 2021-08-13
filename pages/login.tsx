import Layout from '@/components/Layout';

const login = () => {
  return (
    <Layout browserTitle='Login' description='Halaman Login'>
      <form className='w-full p-5 mx-auto mt-16 bg-white rounded-lg shadow-md sm:w-2/5 '>
        <h1 className='mb-4 text-2xl font-semibold text-center text-gray-800'>Login</h1>
        <section className='flex flex-col mb-4'>
          <label className='text-sm' htmlFor='nama'>
            Nama
          </label>
          <input
            className='px-2 py-1 border border-gray-400 rounded focus:outline-none focus:border-gray-800'
            type='text'
            id='nama'
            placeholder='Nama '
            autoComplete='username'
          />
        </section>
        <section className='flex flex-col mb-7'>
          <label className='text-sm' htmlFor='Password'>
            Password
          </label>
          <input
            className='px-2 py-1 border border-gray-400 rounded focus:outline-none focus:border-gray-800'
            type='text'
            id='Password'
            placeholder='Password'
            autoComplete='new-password'
          />
        </section>

        <button className='items-center w-full px-3 py-2 text-white duration-300 bg-gray-800 border border-gray-800 rounded-md hover:bg-white hover:text-gray-800 focus:outline-none'>
          Login
        </button>
      </form>
    </Layout>
  );
};

export default login;
