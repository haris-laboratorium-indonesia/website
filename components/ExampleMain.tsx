import { Disclosure } from '@headlessui/react';
import { HiOutlineChevronDown } from 'react-icons/hi';

const ExampleMain = ({ type, children }) => {
  return (
    <Disclosure as="div" className="flex flex-col w-full bg-gray-200 rounded-md">
      {({ open }) => (
        <>
          <Disclosure.Button
            as="div"
            className="flex items-center justify-between w-full px-4 py-2 rounded-md cursor-pointer focus:outline-none"
          >
            <div className="text-gray-700 tex">{type}</div>

            <HiOutlineChevronDown className={`${open ? 'transform rotate-180' : ''} block`} />
          </Disclosure.Button>
          <Disclosure.Panel className="p-3 mt-1 text-gray-700 rounded-md ">
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default ExampleMain;
