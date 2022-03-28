import Layout from '@/components/Layout';

export default function SignIn() {
  return (
    <Layout browserTitle='Login' description='Halaman Login'>
      <form className='w-full p-5 mx-auto mt-16 bg-white rounded-lg shadow-md max-w-xs '>
        <h1 className='mb-4 text-2xl font-semibold text-center text-zinc-800'>Login</h1>
        <section className='flex flex-col mb-4'>
          <label className='text-sm' htmlFor='nama'>
            Nama
          </label>
          <input
            className='px-2 py-1 border border-zinc-400 rounded focus:outline-none focus:border-zinc-800'
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
            className='px-2 py-1 border border-zinc-400 rounded focus:outline-none focus:border-zinc-800'
            type='text'
            id='Password'
            placeholder='Password'
            autoComplete='new-password'
          />
        </section>

        <button className='items-center w-full px-3 py-2 text-white duration-300 bg-zinc-800 border border-zinc-800 rounded-md hover:bg-white hover:text-zinc-800 focus:outline-none'>
          Login
        </button>
      </form>
    </Layout>
  );
}
