import { Disclosure } from "@headlessui/react";
import { HiOutlineChevronDown } from "react-icons/hi";

const FAQ = ({ button, panel }) => {
  return (
    <Disclosure as="div" className="flex flex-col max-w-xl mx-auto">
      {({ open }) => (
        <>
          <Disclosure.Button
            as="div"
            className="flex items-center justify-between p-2 border-b rounded-md focus:outline-none"
          >
            <div>{button}</div>
            <HiOutlineChevronDown
              className={`${open ? "transform rotate-180" : ""} block`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="p-3 text-gray-600 rounded-md">
            {panel}
          </Disclosure.Panel>{" "}
        </>
      )}
    </Disclosure>
  );
};

export default FAQ;
