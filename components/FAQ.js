import { Disclosure } from "@headlessui/react";

export default function FAQ({ button, panel }) {
  return (
    <Disclosure as="div" className="flex flex-col max-w-xl mx-auto">
      <Disclosure.Button className="p-2 text-gray-500 border border-black rounded-md focus:text-white focus:bg-blue-harislab focus:outline-none">
        {button}
      </Disclosure.Button>
      <Disclosure.Panel className="p-3 text-gray-700 border border-gray-700 rounded-md">
        {panel}
      </Disclosure.Panel>
    </Disclosure>
  );
}
