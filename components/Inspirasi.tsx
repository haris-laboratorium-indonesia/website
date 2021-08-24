export default function Inspirasi() {
  return (
    <div className='mb-32 sm:mb-60'>
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
      className={`items-center pl-4 pr-3 py-2.5 font-medium text-center border border-gray-400 hover:bg-gray-200 rounded-lg  ${textColor} hover:bg-gray-300 flex justify-between`}
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
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      shapeRendering='geometricPrecision'
    >
      <path d='M7 17L17 7' />
      <path d='M7 7h10v10' />
    </svg>
  );
};
