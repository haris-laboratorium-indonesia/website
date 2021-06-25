import {Menu} from '@headlessui/react'
import Link from 'next/link'
import {Down, Up, MenuList, LeftArrow} from '@/Icons'

const ListTermodinamika = ({title, backToLink, backToName}) => {
  const daftarIsi =
    'block text-blue-400 hover:bg-blue-400 hover:text-white text-sm rounded-md px-2 py-1'

  return (
    <Menu
      as="div"
      className="sticky top-0 z-40 flex flex-col items-center w-full mb-5 "
    >
      {({open}) => (
        <>
          <Menu.Button
            className={` flex flex-row items-center justify-between w-full py-2 bg-white bg-opacity-95 border-b  focus:outline-none `}
          >
            <Link href={backToLink}>
              <a className="flex items-center justify-center rounded-md py-0.5 px-1 hover:bg-gray-100">
                <LeftArrow />
              </a>
            </Link>

            <div className="text-lg font-semibold">{title}</div>
            <div
              className={` ${
                open
                  ? 'sm:bg-blue-400 border-blue-400 sm:text-white'
                  : 'text-black border-gray-300'
              } flex items-center justify-between sm:px-2 sm:py-1 sm:border rounded-md sm:space-x-2 `}
            >
              <span className="hidden text-sm sm:block">Daftar Isi</span>
              <div className="block sm:hidden py-0.5 px-1">
                <MenuList textColor={open ? 'text-harislab' : 'text-black'} />
              </div>
              <div className="hidden sm:block">{open ? <Up /> : <Down />}</div>
            </div>
          </Menu.Button>
          <Menu.Items className="flex justify-end w-full">
            <div className="w-full p-1.5 bg-white border border-gray-200 rounded-md drop-shadow-2xl sm:w-1/3">
              <Menu.Item>
                <a className={daftarIsi} href="#Pengenalan">
                  Pengenalan
                </a>
              </Menu.Item>
              <Menu.Item>
                <a className={daftarIsi} href="#Variabel">
                  Variabel
                </a>
              </Menu.Item>
              <Menu.Item>
                <a className={daftarIsi} href="#Rumus">
                  Rumus
                </a>
              </Menu.Item>
              <Menu.Item>
                <a className={daftarIsi} href="#PenurunanRumus">
                  Penurunan Rumus
                </a>
              </Menu.Item>
              <Menu.Item>
                <a className={daftarIsi} href="#ContohSoal">
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
