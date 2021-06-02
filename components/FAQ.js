import { Disclosure } from "@headlessui/react";

export default function FAQ({ button, panel }) {
  return (
    <Disclosure as="div" className="flex flex-col w-full ">
      <Disclosure.Button className=" hover:bg-blue-50 border border-gray-500 text-gray-500 p-2  rounded-md focus:outline-none">
        {button}
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-400 p-2 rounded-md mt-1 border border-gray-500">
        {panel}
      </Disclosure.Panel>
    </Disclosure>
  );
}
