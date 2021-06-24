import { Menu } from "@headlessui/react";

const List = ({ title }) => {
  const daftarIsi =
    "block text-harislab hover:bg-harislab hover:text-white rounded-md px-2 py-1";

  return (
    <Menu
      as="div"
      className="sticky top-0 z-40 flex flex-col items-center w-full mb-5 "
    >
      {({ open }) => (
        <>
          <Menu.Button
            className={` flex flex-row items-center justify-between w-full py-2 bg-white border-b  focus:outline-none `}
          >
            <div className="text-lg">{title}</div>
            <div
              className={` ${
                open
                  ? "bg-harislab border-harislab text-white"
                  : "text-black border-gray-300"
              } flex items-center justify-between px-2 py-1 border rounded-md sm:space-x-2  `}
            >
              <span className="hidden sm:block">Daftar Isi</span>
              {open ? <Up /> : <Down />}
            </div>
          </Menu.Button>
          <Menu.Items className="flex justify-end w-full ">
            <div className="w-full p-1 bg-white border border-gray-300 rounded-lg drop-shadow-2xl sm:w-1/3">
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
  );
};

export default List;

const Down = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};
const Up = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M5 15l7-7 7 7"
      />
    </svg>
  );
};
