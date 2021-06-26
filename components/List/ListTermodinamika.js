import { Menu } from '@headlessui/react'
import { Down, Up, MenuList, LeftArrow } from '@/Icons'
import Link from 'next/link'
const ListTermodinamika = ({ title, materi }) => {
  const H1 = 'block text-gray-800 hover:bg-gray-500 hover:text-white rounded-md px-2 py-1'
  const H2 = 'block text-gray-800 hover:bg-gray-500 hover:text-white rounded-md pl-6 pr-2 py-1'

  return (
    <Menu as="div" className="sticky top-0 z-40 flex flex-col items-center w-full my-5 ">
      {({ open }) => (
        <>
          <Menu.Button
            className={` flex flex-row items-center justify-between w-full py-2.5 border-b border-gray-500 bg-white   focus:outline-none `}
          >
            <div className="text-xl font-semibold sm:text-2xl">{title}</div>
            <div className="flex items-center justify-end space-x-2">
              <Link href={materi}>
                <a>
                  <div className="z-50 px-2 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-200 bg-gray-50">
                    <LeftArrow />
                  </div>
                </a>
              </Link>

              <div className={` px-2 py-1 bg-gray-50 border border-gray-300 rounded-md hover:bg-gray-200`}>
                <MenuList />
              </div>
            </div>
          </Menu.Button>
          <Menu.Items className="flex justify-end w-full">
            <div className="w-full p-1.5  border border-gray-300 bg-gray-50 rounded-md drop-shadow-2xl mt-2 sm:w-1/3">
              <Menu.Item>
                <a className={H1} href="#Pengenalan">
                  Pengenalan
                </a>
              </Menu.Item>
              <Menu.Item>
                <a className={H2} href="#Apa">
                  Apa
                </a>
              </Menu.Item>
              <Menu.Item>
                <a className={H2} href="#Siapa">
                  Siapa
                </a>
              </Menu.Item>
              <Menu.Item>
                <a className={H2} href="#Dimana">
                  Dimana
                </a>
              </Menu.Item>
              <Menu.Item>
                <a className={H2} href="#Kapan">
                  Kapan
                </a>
              </Menu.Item>

              <Menu.Item>
                <a className={H1} href="#Variabel">
                  Variabel
                </a>
              </Menu.Item>
              <Menu.Item>
                <a className={H1} href="#Rumus">
                  Rumus
                </a>
              </Menu.Item>
              <Menu.Item>
                <a className={H1} href="#PenurunanRumus">
                  Penurunan Rumus
                </a>
              </Menu.Item>
              <Menu.Item>
                <a className={H1} href="#ContohSoal">
                  ContohSoal
                </a>
              </Menu.Item>
            </div>
          </Menu.Items>
        </>
      )}
    </Menu>
  )
}

export default ListTermodinamika
