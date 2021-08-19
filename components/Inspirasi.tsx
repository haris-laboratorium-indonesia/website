export default function Inspirasi() {
  return (
    <div className='mb-32 sm:mb-60'>
      <div className='mb-10 text-2xl font-semibold text-left text-gray-800 sm:text-3xl'>
        Inspirasi. <span className='text-gray-500'>Bagaimana website ini dibuat.</span>
      </div>
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
      className={`items-center pl-4 pr-3 py-3 font-medium text-lg text-center bg-gray-200 rounded-md  ${textColor} hover:bg-gray-300 flex justify-between`}
      href={to}
      target='_blank'
    >
      <div>{title}</div>
      <ArrowUpRight />
    </a>
  );
};

const ArrowUpRight = () => {
  return (
    <svg
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
      fill='none'
      shape-rendering='geometricPrecision'
    >
      <path d='M7 17L17 7' />
      <path d='M7 7h10v10' />
    </svg>
  );
};
