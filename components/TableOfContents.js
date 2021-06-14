import { Menu } from "@headlessui/react";
export default function TableOfContents() {
  return (
    <Menu
      as="div"
      className="sticky top-0 z-20 flex flex-col items-center w-full md:bg-white h-11 md:col-span-1"
    >
      {({ open }) => (
        <>
          <div className="flex items-center md:justify-between justify-end w-full text-[#3A3A3C] py-2">
            <div className="hidden text-lg font-semibold md:block ">
              Fluida Statis
            </div>
            <Menu.Button className="focus:outline-none px-2 py-1 space-x-1 rounded-md flex justify-between items-center border border-[#D1D1DB] bg-[#F2F2F7]">
              <div className="text-xs">Daftar Isi</div>
              <div>
                {open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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
                )}
              </div>
            </Menu.Button>
          </div>
          <Menu.Items className="max-w-5xl space-y-2 bg-[#F2F5F7] text-sm right-0 w-full p-2 rounded  mt-1 origin-top-right border border-[#D1D1DB]  ">
            <Menu.Item as="div">
              <a
                href="#Pengenalan"
                className="block text-[#FF2D55] hover:bg-[#FF2D55] hover:bg-opacity-10 rounded px-2 py-1"
              >
                Pengenalan
              </a>
            </Menu.Item>
            <Menu.Item as="div">
              <a
                href="#Variabel"
                className="block text-[#FF9500] hover:bg-[#FF9500] hover:bg-opacity-10 rounded px-2 py-1"
              >
                Konstanta dan Variabel
              </a>
            </Menu.Item>
            <Menu.Item as="div">
              <a
                href="#Rumus"
                className="block text-[#34C759] hover:bg-[#34C759] hover:bg-opacity-10 rounded px-2 py-1"
              >
                Rumus
              </a>
            </Menu.Item>
            <Menu.Item as="div">
              <a
                href="#PenurunanRumus"
                className="block text-[#32ADFA] hover:bg-[#32ADFA] hover:bg-opacity-10 rounded px-2 py-1"
              >
                Penurunan Rumus
              </a>
            </Menu.Item>
            <Menu.Item as="div">
              <a
                href="#ContohSoal"
                className="block text-[#5856D6] hover:bg-[#5856D6] hover:bg-opacity-10 rounded px-2 py-1"
              >
                Contoh Soal
              </a>
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}
