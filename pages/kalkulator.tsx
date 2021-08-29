import Layout from '@/components/Layout';
import { Title, InternalLink } from '@/components/Materi';
import { Tab } from '@headlessui/react';

export default function Kalkulator() {
  const tab = 'active:bg-gray-200 rounded-md text-tiny hover:bg-white hover:shadow-md py-2 px-4';
  return (
    <Layout browserTitle='Kalkulator' description='Kalkulator'>
      <Title name='Kalkulator' />

      <Tab.Group as='div' className='mt-5 '>
        <Tab.List className='grid grid-cols-3 gap-2 p-1 bg-gray-200 rounded-md sm:w-1/2'>
          <Tab
            className={({ selected }) =>
              selected
                ? 'bg-white shadow-md rounded-md text-black p-1'
                : 'p-1 hover:bg-gray-300 rounded-md'
            }
          >
            Biasa
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? 'bg-white shadow-md rounded-md text-black p-1'
                : 'p-1 hover:bg-gray-300 rounded-md'
            }
          >
            Saintifik
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? 'bg-white shadow-md rounded-md text-black p-1'
                : 'p-1 hover:bg-gray-300 rounded-md'
            }
          >
            Rumus
          </Tab>
        </Tab.List>

        <Tab.Panels className='p-1 mt-2 bg-gray-200 rounded-md'>
          <Tab.Panel className='h-48'>Content 1</Tab.Panel>
          <Tab.Panel className='h-48'>Content 2</Tab.Panel>
          <Tab.Panel className='h-48'>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </Layout>
  );
}
