import { Disclosure } from "@headlessui/react";

const FAQ = ({ button, panel }) => {
  return (
    <Disclosure as="div" className="flex flex-col max-w-xl mx-auto">
      <Disclosure.Button className="p-2 border border-black rounded-md focus:text-white focus:bg-blue-harislab focus:outline-none">
        {button}
      </Disclosure.Button>
      <Disclosure.Panel className="p-3 border border-black rounded-md">
        {panel}
      </Disclosure.Panel>
    </Disclosure>
  );
};

export default FAQ;
