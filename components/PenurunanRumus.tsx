import { Disclosure } from '@headlessui/react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

const PenurunanRumus = ({ title, children }) => {
  return (
    <Disclosure
      as='div'
      className='flex flex-col w-full bg-white rounded-md shadow hover:shadow-md'
    >
      {({ open }) => (
        <>
          <Disclosure.Button
            as='div'
            className={`flex items-center justify-between w-full px-4 py-2 cursor-pointer rounded-t-md focus:outline-none shadow hover:shadow-md hover:bg-indigo-50`}
          >
            <TeX className='text-gray-800 '>{title}</TeX>

            <HiOutlineChevronDown className={`${open ? 'transform rotate-180' : ''} block `} />
          </Disclosure.Button>
          <Disclosure.Panel className='p-3 overflow-x-auto text-gray-700 bg-white border-t border-gray-300 shadow rounded-b-md hover:shadow-md'>
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default PenurunanRumus;
