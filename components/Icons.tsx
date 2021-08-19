export const Down = ({ color }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`${color} w-6 h-6`}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M19 9l-7 7-7-7' />
    </svg>
  );
};
export const Up = ({ color }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`${color} w-6 h-6`}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M5 15l7-7 7 7' />
    </svg>
  );
};

// export const MenuList = ({ color }) => {
//   return (
//     <svg
//       className={`${color} w-6 h-6`}
//       viewBox='0 0 24 24'
//       width='24'
//       height='24'
//       stroke='currentColor'
//       strokeWidth='1.5'
//       strokeLinecap='round'
//       strokeLinejoin='round'
//       fill='none'
//     >
//       <path d='M8 6h13' />
//       <path d='M8 12h13' />
//       <path d='M8 18h13' />
//       <path d='M3 6h.01' />
//       <path d='M3 12h.01' />
//       <path d='M3 18h.01' />
//     </svg>
//   );
// };

export const Collection = ({ color }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`${color} w-6 h-6`}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
      />
    </svg>
  );
};

<svg
  xmlns='http://www.w3.org/2000/svg'
  className='w-6 h-6'
  fill='none'
  viewBox='0 0 24 24'
  stroke='currentColor'
>
  <path
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={2}
    d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
  />
</svg>;

export const RightArrow = ({ color }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-6 h-6 text-gray-500'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.1} d='M9 5l7 7-7 7' />
    </svg>
  );
};

export const Folder = () => {
  return (
    <svg
      className='w-6 h-6 text-blue-400'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='currentColor'
    >
      <path d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' />
    </svg>
  );
};

export const X = ({ color }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`${color}w-7 h-7 text-white`}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1' d='M6 18L18 6M6 6l12 12' />
    </svg>
  );
};

export const HamburgerMenu = ({ color }) => {
  return (
    <svg
      className={`${color} h-7 w-7`}
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
    >
      <path d='M3 12h18' />
      <path d='M3 6h18' />
      <path d='M3 18h18' />
    </svg>
  );
};
