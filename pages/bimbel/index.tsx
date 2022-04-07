import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
// import { Disclosure } from '@headlessui/react';
// import { HiOutlineChevronDown, HiChevronRight } from 'react-icons/hi';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

const people = [{ subject: 'Matematika' }, { subject: 'Fisika' }];

export default function Bimbel() {
  const [selected, setSelected] = useState(people[0]);

  // console.log(people[0].subject);
  // console.log(typeof people[0].subject);
  // console.log(typeof setSelected);
  return (
    <Layout browserTitle='Bimbel' description='Bimbel'>
      <div>
        <section className='py-5 space-y-5 sm:space-y-0 sm:space-x-5 flex flex-col sm:items-start sm:flex-row'>
          <div className='bg-white rounded-lg shadow-md p-5 border'>
            <label htmlFor='pet-select' className=' text-xl text-zinc-800 '>
              Pilih Mata pelajaran
            </label>
            <div className='mt-5 text-sm text-zinc-400'>Matematika atau Fisika</div>
            <Listbox value={selected} onChange={setSelected}>
              <div className='relative mt-1.5'>
                <Listbox.Button className='relative w-full py-2 pl-3 pr-10 text-left bg-zinc-100 border border-zinc-300 rounded-lg cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm focus:ring-2 focus:ring-blue-500'>
                  <span className='block truncate'>{selected.subject}</span>
                  <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                    <SelectorIcon className='w-5 h-5 text-gray-400' aria-hidden='true' />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave='transition ease-in duration-100'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border border-zinc-300'>
                    {people.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`${
                                selected ? 'font-medium' : 'font-normal'
                              } block truncate`}
                            >
                              {person.subject}
                            </span>
                            {selected ? (
                              <span
                                className={`${active ? 'text-amber-600' : 'text-amber-600'}
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                              >
                                <CheckIcon className='w-5 h-5' aria-hidden='true' />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <div className='bg-white rounded-lg shadow-md p-5 border'>
            <label htmlFor='pet-select' className='text-xl text-zinc-800 '>
              Pilih Tanggal
            </label>
            <div className='mt-5 text-sm text-zinc-400'>Hari, Bulan, Tahun </div>
            <input
              type='date'
              name=''
              id=''
              className='w-full mt-1.5 py-1.5 px-2 bg-zinc-100 border border-zinc-300 rounded-md'
            />

            <div className='mt-5 text-sm text-zinc-400'>Jam</div>
            <input
              type='time'
              name=''
              id=''
              className='w-full mt-1.5 py-1.5 px-2 bg-zinc-100 border border-zinc-300 rounded-md'
            />
          </div>
        </section>
        <button className='bg-blue-600 text-center rounded-lg text-white shadow-lg active:translate-y-0.5 duration-200 hover:bg-blue-700 py-3 text-xl hover:cursor-pointer active:shadow-none w-full focus:outline-none focus:ring-2 focus:ring-orange-600'>
          Buat pesanan
        </button>
      </div>
    </Layout>
  );
}
