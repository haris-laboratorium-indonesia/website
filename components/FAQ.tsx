import { Disclosure } from '@headlessui/react';
import { HiOutlineChevronDown } from 'react-icons/hi';

const FAQ = ({ button, panel }) => {
  return (
    <Disclosure as='div'>
      {({ open }) => (
        <>
          <Disclosure.Button
            as='div'
            className={`${
              open ? 'rounded-b-none bg-gray-200' : ''
            } rounded-lg flex flex-row items-center justify-between py-2.5 px-3 border border-gray-400  cursor-pointer focus:outline-none  hover:bg-gray-200`}
          >
            <div>{button}</div>
            <HiOutlineChevronDown
              className={`${open ? 'transform rotate-180' : ''} block w-6 h-6 text-gray-700`}
            />
          </Disclosure.Button>
          <Disclosure.Panel
            className={`rounded-b-lg border border-t-0 border-gray-400 p-3 text-gray-600 `}
          >
            {panel}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default FAQ;
