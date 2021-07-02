export const AA1 = ({ title, id }) => {
  return (
    <h1
      id={id}
      className={`z-10 text-3xl sm:text-4xl lg:pt-0 font-bold mt-24 mb-3 text-gray-800 font-mw border-b border-gray-400 pb-1`}
    >
      {title}
    </h1>
  );
};

export const A2 = ({ title }) => {
  return <div className='mt-4 font-semibold font-mw'>{title}</div>;
};

export const Para = ({ children }) => {
  return <p className='text-gray-800 sm:text-lg indent-sm'>{children}</p>;
};

export const th = 'w-1/5 p-2 text-left text-base font-semibold text-gray-600 bg-gray-50';
export const td = ' text-left p-2 table-auto min-w-min text-gray-700';
export const tr = 'divide-x divide-gray-200 ';
export const thead = 'border-b';
