export default function Inspirasi() {
  return (
    <div className='mb-32 sm:mb-60'>
      <header className='mb-10 text-2xl font-bold text-center bg-gradient-to-r from-[#06B6D4] via-rose-500 to-amber-500 sm:text-4xl trns sm:w-2/3 mx-auto'>
        Terinspirasi dari prinsip desain website informasi terbaik
      </header>
      <section className='grid grid-cols-1 gap-5 font-medium text-center sm:grid-cols-2'>
        <Box to='https://www.tailwindcss.com' title='Tailwind CSS' textColor='text-[#06B6D4]' />
        <Box to='https://www.nngroup.com' title='NNGroup' textColor='text-rose-500' />
        <Box to='https://developer.apple.com' title='Apple Developer' textColor='text-gray-700' />
        <Box to='https://www.lawsofux.com' title='Laws of UX' textColor='text-orange-500' />
      </section>
    </div>
  );
}

const Box = ({ to, title, textColor }) => {
  return (
    <a
      className={`items-center p-3 font-medium text-lg text-center bg-gray-200 rounded-md  ${textColor} hover:bg-gray-300`}
      href={to}
      target='_blank'
    >
      {title}
    </a>
  );
};
