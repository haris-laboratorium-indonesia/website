import { Disclosure } from "@headlessui/react";
import { HiOutlineChevronDown } from "react-icons/hi";

const ExampleChild = ({ type, children }) => {
  return (
    <Disclosure
      as="div"
      className="flex flex-col w-full bg-gray-200 rounded-md"
    >
      {({ open }) => (
        <>
          <Disclosure.Button
            as="div"
            className="flex items-center justify-between px-4 py-2 rounded-md cursor-pointer focus:outline-none"
          >
            <div className="text-gray-700 ">{type}</div>
            <HiOutlineChevronDown
              className={`${open ? "transform rotate-180" : ""} block`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="p-3 mt-1 text-black rounded-md ">
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default ExampleChild;
