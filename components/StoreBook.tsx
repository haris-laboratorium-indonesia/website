import { Tab } from '@headlessui/react';

export default function StoreBook() {
  return (
    <Tab.Group>
      <Tab.List className='grid grid-cols-2 gap-1 p-1 text-base text-gray-600 bg-gray-200 border-b border-gray-300 rounded-t-lg sm:w-1/4 sm:text-tiny'>
        <Tab
          className={({ selected }) =>
            selected
              ? 'bg-white shadow-md rounded-md p-1 sm:p-0.5'
              : 'p-1 sm:p-0.5 hover:bg-gray-300 rounded-md'
          }
        >
          Matematika
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? 'bg-white shadow-md rounded-md p-1 sm:p-0.5'
              : 'p-1 sm:p-0.5 hover:bg-gray-300 rounded-md'
          }
        >
          Fisika
        </Tab>
      </Tab.List>
      <Tab.Panels className='p-1 bg-gray-200 rounded-b-lg'>
        <Tab.Panel className='h-48 p-2'>Content 1</Tab.Panel>
        <Tab.Panel className='h-48 p-2'>Content 2</Tab.Panel>
        <Tab.Panel className='h-48 p-2'>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
