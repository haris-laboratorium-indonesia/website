import { Disclosure } from "@headlessui/react";
import { HiOutlineChevronDown } from "react-icons/hi";

const ExampleMain = ({ type, children, tambahan }) => {
  return (
    <Disclosure as="div" className="flex flex-col my-5 rounded-md bg-rose-50">
      {({ open }) => (
        <>
          <Disclosure.Button
            as="div"
            className="flex items-center justify-between px-4 py-2 rounded-md cursor-pointer focus:outline-none"
          >
            <div className="font-semibold text-rose-400">{type}</div>

            <HiOutlineChevronDown
              className={`${open ? "transform rotate-180" : ""} block`}
            />
          </Disclosure.Button>
          <Disclosure.Panel
            className={` ${tambahan} pb-2 pl-5 pr-2 text-gray-600 rounded-md`}
          >
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default ExampleMain;
