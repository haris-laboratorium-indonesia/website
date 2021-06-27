import { Menu } from "@headlessui/react";
import { MenuList, LeftArrow } from "@/Icons";
import Link from "next/link";
const ListTermodinamika = ({ title, materi, page }) => {
  const H1 =
    "block text-gray-300 hover:bg-gray-600 hover:text-white rounded-md px-2 py-1";
  const H2 =
    "block text-gray-300 hover:bg-gray-600 hover:text-white rounded-md pl-6 pr-2 py-1";

  return (
    <Menu
      as="div"
      className="sticky z-40 flex flex-col w-full my-5 top-2 md:w-1/2 sm:mx-auto"
    >
      {({ open }) => (
        <>
          <div className="flex items-center justify-between p-1 bg-gray-800 shadow-xl rounded-xl">
            <Link href={materi}>
              <a className="z-50 block p-1 text-sm rounded-lg ">
                <LeftArrow color="text-gray-300 hover:text-white" />
              </a>
            </Link>

            <Link href={`/fisika/${page}`}>
              <a className="font-medium tracking-wider text-gray-100 hover:text-white">
                {title}
              </a>
            </Link>

            <Menu.Button className="focus:outline-none">
              <div className="p-1 rounded-lg ">
                <MenuList color="text-gray-300 hover:text-white" />
              </div>
            </Menu.Button>
          </div>
          <Menu.Items className="flex justify-end w-full">
            <div className="w-full p-2 mt-2 bg-gray-800 rounded-lg drop-shadow-2xl ">
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
  );
};

export default ListTermodinamika;
