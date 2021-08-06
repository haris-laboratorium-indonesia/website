import { Disclosure } from '@headlessui/react';
import { HiOutlineChevronDown } from 'react-icons/hi';

const ExampleChild = ({ type, children }) => {
  return (
    <Disclosure
      as='div'
      className='flex flex-col w-full bg-white rounded-md shadow hover:shadow-md'
    >
      {({ open }) => (
        <>
          <Disclosure.Button
            as='div'
            className='flex items-center justify-between px-4 py-2 rounded-md cursor-pointer focus:outline-none hover:bg-indigo-50'
          >
            <div className='text-gray-700 '>{type}</div>
            <HiOutlineChevronDown className={`${open ? 'transform rotate-180' : ''} block`} />
          </Disclosure.Button>
          <Disclosure.Panel className='p-3 text-black border-t border-gray-300 shadow rounded-b-md hover:shadow-md '>
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default ExampleChild;
