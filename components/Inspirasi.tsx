export default function Inspirasi() {
  return (
    <div className='mb-32 sm:mb-60 '>
      <header className='mb-10 text-2xl font-bold text-center bg-gradient-to-r from-[#06B6D4] via-rose-500 to-amber-500 sm:text-4xl trns'>
        Terinspirasi dari prinsip desain website informasi terbaik
      </header>
      <div className='grid grid-cols-1 gap-5 font-medium text-center sm:grid-cols-2'>
        <a
          className='py-3 shadow hover:shadow-lg  text-white duration-200 border rounded-lg bg-[#06B6D4]  hover:-translate-y-1 border-[#06B6D4]'
          href='https://www.tailwindcss.com'
          target='_blank'
        >
          <p>Tailwind CSS</p>
        </a>
        <a
          className='py-3 text-white duration-200 border rounded-lg shadow hover:-translate-y-1 hover:shadow-lg bg-rose-500 border-rose-500 '
          href='https://www.nngroup.com'
          target='_blank'
        >
          <p>NNGroup</p>
        </a>
        <a
          className='py-3 text-white duration-200 bg-gray-700 border border-gray-700 rounded-lg shadow hover:-translate-y-1 hover:shadow-lg '
          href='https://developer.apple.com'
          target='_blank'
        >
          Apple Developer
        </a>
        <a
          className='py-3 text-white duration-200 border rounded-lg shadow hover:-translate-y-1 hover:shadow-lg bg-amber-500 border-amber-500 '
          href='https://www.lawsofux.com'
          target='_blank'
        >
          Laws of UX
        </a>
      </div>
    </div>
  );
}
