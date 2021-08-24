import Image from 'next/image';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import Link from 'next/link';

const ArrowUpRight = () => {
  return (
    <svg
      className='w-6 h-6 text-harislab'
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

export const AA1 = ({ title, id }) => {
  return (
    <h1
      id={id}
      className={`z-10 text-3xl sm:text-4xl lg:pt-0 font-semibold mt-24 mb-3 text-gray-700 font-mw pb-1`}
    >
      {title}
    </h1>
  );
};

export const A2 = ({ title }) => {
  return <button className='mt-5 mb-2 font-semibold text-gray-700 font-mw'>{title}</button>;
};

export const P = ({ children }) => {
  return <p className='text-gray-700 font-inter indent-sm'>{children}</p>;
};

export const Gambar = ({ src, alt, caption }) => {
  return (
    <button className='mb-4 -mx-2 sm:-mx-0'>
      <Image
        src={src}
        alt={alt}
        placeholder='blur'
        layout='intrinsic'
        priority
        className='bg-contain rounded-md'
      />
      <figcaption className='text-sm italic text-center text-gray-700 font-mw'>
        {caption}
      </figcaption>
    </button>
  );
};

export const rumusTitle = 'font-medium text-md inline-block w-full  text-pink-600';

const thead = 'border-t border-gray-400';
const th = 'w-1/5 py-2 px-4 text-left font-medium text-gray-800 bg-gray-300 w-max';
const tr = 'buttonide-x buttonide-gray-400 border-b border-l border-r border-gray-400';
const td = 'text-left px-2 sm:px-4 py-0.5 table-auto w-max text-gray-700 whitespace-nowrap';

export const THEAD = ({ children }) => {
  return <thead className={thead}>{children}</thead>;
};
export const Row = ({ children }) => {
  return <tr className={tr}>{children}</tr>;
};
export const TH = ({ children }) => {
  return <th className={th}>{children}</th>;
};
export const TData = ({ children }) => {
  return <td className={td}>{children}</td>;
};
export const Body = ({ children }) => {
  return <tbody>{children}</tbody>;
};
export const rms = ({ children }) => {
  return <TeX>{`${children}`}</TeX>;
};
export const Legenda = ({ name, rumus }) => {
  return (
    <button className='py-2'>
      <TeX>{rumus}</TeX> = {name}
    </button>
  );
};
export const KaTeX = ({ children }) => {
  return <TeX className='inline-block py-2 text-sm w-max'>{children}</TeX>;
};
export const Anchor = ({ to, name }) => {
  return (
    <Link href={to}>
      <a className='text-blue-500 hover:text-fuschsia-500 hover:underline'>{name}</a>
    </Link>
  );
};

//Typography
export function Title({ name }) {
  return (
    <h1 className='z-40 w-full h-auto mt-10 mb-5 pt-2.5  max-w-4xl mx-auto font-inter font-bold text-center text-4xl text-gray-800 sm:text-5xl block'>
      {name}
    </h1>
  );
}

export function SubTitle({ name }) {
  return <h2 className='max-w-2xl mx-auto mb-10 -mt-4 text-center '>{name}</h2>;
}

export const Topic = ({ name }) => {
  return (
    <h3 className='mb-3 text-2xl font-semibold text-left text-gray-700 sm:text-2xl mt-14'>
      {name}
    </h3>
  );
};

export function SubTopic({ name }) {
  return <h4 className='mb-5 font-medium '>{name}</h4>;
}

//Button
export function ButtonPrimary({ name }) {
  return (
    <button className='px-4 py-2.5 text-center text-white duration-200 rounded-md bg-harislab hover:bg-opacity-80 '>
      {name}
    </button>
  );
}

export function ButtonSecondary({ name }) {
  return (
    <button className='px-4 py-2.5 text-center duration-200 border rounded-md border-harislab text-harislab hover:bg-blue-50'>
      {name}
    </button>
  );
}

export function ButtonTertiary({ name }) {
  return (
    <button className='px-4 py-2.5 text-center duration-200 hover:bg-blue-50 rounded-md text-harislab '>
      {name}
    </button>
  );
}

export function InternalLink({ name, to }) {
  return (
    <Link href={to}>
      <a className='flex items-center py-2.5 text-harislab hover:underline cursor-pointer space-x-2 text-lg'>
        {name}
        <RightArrow />
      </a>
    </Link>
  );
}

export function ExternalLink({ name, to }) {
  return (
    <a
      href={to}
      className='flex items-center space-x-2 py-2.5  text-lg text-harislab hover:underline cursor-pointer '
    >
      <div>{name}</div>
      <ArrowUpRight />
    </a>
  );
}

const RightArrow = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-5 h-5 text-harislab'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
    </svg>
  );
};
