import Layout from '@/components/Layout';
import Title from '@/components/Title';

const bimbel = () => {
  return (
    <Layout browserTitle='Bimbel' description='Booking Les tidak pernah semudah ini'>
      <Title name='Bimbel' />

      <div className='mb-5 -mt-5 text-center'>Pesan les privat ke rumah.</div>

      <div className='grid grid-cols-7 gap-2 p-2 bg-gray-200 border border-gray-300 rounded sm:hidden'>
        <div className='px-2 py-2 text-center border border-gray-400 rounded '>senin</div>
        <div className='px-2 py-2 text-center border border-gray-400 rounded '>senin</div>
        <div className='px-2 py-2 text-center border border-gray-400 rounded '>senin</div>
        <div className='px-2 py-2 text-center border border-gray-400 rounded '>senin</div>
        <div className='px-2 py-2 text-center border border-gray-400 rounded '>senin</div>
        <div className='px-2 py-2 text-center border border-gray-400 rounded '>senin</div>
        <div className='px-2 py-2 text-center border border-gray-400 rounded '>senin</div>
      </div>
      <div className='w-full p-4 mx-auto mt-5 mb-10 bg-white rounded-md shadow hover:shadow-md sm:w-1/3'>
        <div className='text-lg font-medium text-center text-gray-800 mb-7'>Booking Les</div>
        <label htmlFor=''>Untuk tanggal :</label>
        <div className='mb-5 font-semibold'>Selasa, 2 Agustus 2021</div>
        <label htmlFor=''>Pukul :</label>
        <div className='mb-5 font-semibold'>14:00 - 16:00 WIB</div>
        <label htmlFor='nama' className='text-sm'>
          Nama
        </label>
        <input
          type='text'
          id='nama'
          className='block w-full px-2 py-1 mb-5 text-gray-800 border border-gray-400 rounded focus:border-gray-800 focus:outline-none'
        />
        <label htmlFor='MataPelajaran' className='text-sm'>
          Mata Pelajaran
        </label>
        <input
          type='text'
          id='MataPelajaran'
          className='block w-full px-2 py-1 mb-5 text-gray-800 border border-gray-400 rounded focus:border-gray-800 focus:outline-none'
        />
        <label htmlFor='Bab' className='text-sm'>
          Bab
        </label>
        <input
          type='text'
          id='Bab'
          className='block w-full px-2 py-1 mb-5 text-gray-800 border border-gray-400 rounded focus:border-gray-800 focus:outline-none'
        />
        <div className='flex justify-end'>
          <div className='w-1/3 px-2 py-1 text-center text-white rounded-md shadow cursor-pointer bg-harislab hover:bg-opacity-70 hover:shadow-md'>
            Pesan
          </div>
        </div>
      </div>
      <div className=''>
        <div className='text-2xl font-semibold'>Catatan</div>
        <ul className='list-disc'>
          <li>hanya bisa membooking 2 hari sebelumnya</li>
        </ul>
      </div>
    </Layout>
  );
};

export default bimbel;
