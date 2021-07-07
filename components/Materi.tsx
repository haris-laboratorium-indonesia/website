import Image from 'next/image';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import Link from 'next/link';
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

export const Gambar = ({ src, alt, caption }) => {
  return (
    <div className='mb-4 -mx-5 md:-mx-10 lg:-mx-20'>
      <Image
        src={src}
        alt={alt}
        placeholder='blur'
        layout='intrinsic'
        priority
        className='bg-contain lg:rounded-md'
      />
      <figcaption className='text-sm italic text-center text-gray-700 font-mw'>
        {caption}
      </figcaption>
    </div>
  );
};
const th = 'w-1/5 py-2 px-4 text-left font-semibold text-gray-700 bg-blue-50';
const td = 'text-left px-4 py-1.5 table-auto min-w-min text-gray-700';
const tr = 'divide-x border-b border-gray-300';
const thead = 'border-b border-gray-300';
const tbody = '';

export const THEAD = ({ children }) => {
  return <thead className={thead}>{children}</thead>;
};
export const TRowwwww = ({ children }) => {
  return <tr className={tr}>{children}</tr>;
};
export const TH = ({ children }) => {
  return <th className={th}>{children}</th>;
};
export const TData = ({ children }) => {
  return <td className={td}>{children}</td>;
};
export const TBODY = ({ children }) => {
  return <tbody className={tbody}>{children}</tbody>;
};

export const rms = ({ children }) => {
  return <TeX>{`${children}`}</TeX>;
};

export const Legenda = ({ name, rumus }) => {
  return (
    <div className='py-2'>
      <TeX>{rumus}</TeX> = {name}
    </div>
  );
};

export const KaTeX = ({ children }) => {
  return <TeX className={'inline-block w-full py-2 text-sm sm:text-base'}>{children}</TeX>;
};

export const rumusTitle = 'font-medium text-lg mt-5 underline';

export const Anchor = ({ to, name }) => {
  return (
    <Link href={to}>
      <a className='text-blue-500 hover:text-fuschsia-500 hover:underline'>{name}</a>
    </Link>
  );
};
