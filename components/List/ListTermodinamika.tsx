import { Menu } from '@headlessui/react';
import { MenuList, LeftArrow } from '@/Icons';
import Link from 'next/link';
const ListTermodinamika = ({ title, materi, page }) => {
  const H1 = 'block text-gray-200 hover:bg-harislab text-sm hover:text-white rounded px-2 py-1';
  const H2 =
    'block text-gray-200 hover:bg-harislab text-sm hover:text-white rounded pl-6 pr-2 py-1';

  return (
    <div className="sticky z-40 -mx-3 sm:-mx-0 top-2">
      <Menu as="div" className="flex flex-col w-full my-5 sm:mx-auto">
        <div className="flex items-center justify-between w-full p-1 mx-auto bg-gray-800 rounded-md">
          <Link href={materi}>
            <a className="z-50 block p-1 text-sm rounded-lg ">
              <LeftArrow color="text-gray-100 hover:text-white" />
            </a>
          </Link>

          <Link href={`/fisika/${page}`}>
            <a className="text-gray-100 hover:text-white">{title}</a>
          </Link>

          <Menu.Button className="focus:outline-none">
            <div className="p-1 rounded-lg ">
              <MenuList color="text-gray-100 hover:text-white" />
            </div>
          </Menu.Button>
        </div>
        <Menu.Items className="flex w-full sm:justify-end">
          <div className="w-full py-2.5 px-2 mt-2 bg-gray-800 rounded-md  sm:w-1/3 shadow-2xl ">
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
      </Menu>
    </div>
  );
};

export default ListTermodinamika;
