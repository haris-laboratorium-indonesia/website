import { Disclosure } from "@headlessui/react";

export default function FAQ({ button, panel }) {
  return (
    <Disclosure as="div" className="flex flex-col w-full ">
      <Disclosure.Button className="p-2 text-gray-500 border-b rounded-md hover:bg-blue-50 focus:outline-none">
        {button}
      </Disclosure.Button>
      <Disclosure.Panel className="p-2 mt-1 text-gray-400 border border-gray-500 rounded-md">
        {panel}
      </Disclosure.Panel>
    </Disclosure>
  );
}
