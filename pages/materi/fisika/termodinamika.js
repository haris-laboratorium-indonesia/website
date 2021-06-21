import Image from "next/image";
import Link from "next/link";
import { HiOutlineChevronLeft } from "react-icons/hi";
import ChapterLayout from "../../../components/ChapterLayout";
import ExampleMain from "../../../components/ExampleMain";
import ExampleChild from "../../../components/ExampleChild";
import { Menu } from "@headlessui/react";

const List = () => {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    >
      <path d="M8 6h13" />
      <path d="M8 12h13" />
      <path d="M8 18h13" />
      <path d="M3 6h.01" />
      <path d="M3 12h.01" />
      <path d="M3 18h.01" />
    </svg>
  );
};
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
const termodinamika = () => {
  const daftarIsi = "block text-blue-500 hover:underline hover:text-blue-700";
  const td = " text-left text-sm p-2";
  const th = "p-2 text-left text-base font-medium text-rose-500 bg-rose-50";
  return (
    <ChapterLayout chapter="Termodinamika">
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        <div className="sticky top-0 z-40 lg:w-1/4">
          <Menu
            as="div"
            className="sticky top-0 z-30 flex flex-col items-center w-full py-2 mb-5 bg-white border-b border-gray-300 lg:top-3 "
          >
            {({ open }) => (
              <>
                <Menu.Button className="flex flex-row items-center justify-between w-full focus:outline-none ">
                  <div className="text-lg font-semibold">Termodinamika</div>
                  <div className="p-1 rounded-md hover:bg-gray-100">
                    {open ? <Up /> : <Down />}
                  </div>
                </Menu.Button>
                <Menu.Items className="flex flex-col w-full p-3 mt-2 space-y-2 bg-gray-100 rounded-lg ">
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
                </Menu.Items>
              </>
            )}
          </Menu>
        </div>

        <section className="lg:w-3/4">
          <div className="mb-10">
            <h1
              id="Pengenalan"
              className="z-10 pt-8 pb-2 text-2xl font-semibold bg-white rounded-md lg:pt-0 "
            >
              Pengenalan
            </h1>
            <div className="z-10 w-full overflow-hidden rounded-lg">
              <Image
                src="/monterey-dark.jpg"
                alt="MacOS Monteret Light Wallpaper"
                width={6008}
                height={3379}
                priority
              />
            </div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero enim
            provident tenetur? Earum voluptas, rerum aliquid corporis, sit
            veritatis laborum aut eum sed saepe natus esse quas expedita animi!
            Quasi odio architecto impedit voluptatum eligendi nihil placeat
            molestiae at vitae consequatur, autem, eos hic nemo debitis
            recusandae deleniti asperiores? Officia quam eaque excepturi facere,
            eligendi perferendis iste. Accusantium nam dolor doloremque unde
            expedita sunt cumque blanditiis, corrupti, in sit ipsum qui
            laboriosam hic quidem, odio ad. In officia, pariatur exercitationem
            provident deserunt neque excepturi nisi voluptates saepe quidem
            commodi esse, atque odio incidunt voluptatum porro ipsum reiciendis
            iusto nostrum laboriosam.
          </div>
          <div className="mb-10">
            <h1
              id="Variabel"
              className="z-10 pt-8 pb-2 text-2xl font-semibold bg-white rounded-md lg:pt-0"
            >
              Variabel
            </h1>

            <section className="mx-auto overflow-x-auto sm:gap-5 lg:px-0">
              <table className="w-full border border-rose-300">
                <thead>
                  <tr className="divide-x divide-rose-300 ">
                    <th className={th}>Nama</th>
                    <th className={th}>Satuan</th>
                    <th className={th}>Simbol</th>
                    <th className={th}>Arah</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rose-300">
                  <tr className="divide-x divide-rose-300">
                    <td className={td}>Harga</td>
                    <td className={td}>25rb/bln</td>
                    <td className={td}>50rb/bln</td>
                    <td className={td}>80rb/bln</td>
                  </tr>
                  <tr className="divide-x divide-rose-300">
                    <td className={td}>Update Informasi</td>
                    <td className={td}>Selalu Update</td>
                    <td className={td}>Selalu Update</td>
                    <td className={td}>Selalu Update</td>
                  </tr>
                  <tr className="divide-x divide-rose-300">
                    <td className={td}>Durabilitas</td>
                    <td className={td}>Aman</td>
                    <td className={td}>Aman</td>
                    <td className={td}>Aman</td>
                  </tr>
                  <tr className="divide-x divide-rose-300">
                    <td className={td}>Mobilitas</td>
                    <td className={td}>Mudah dibawa</td>
                    <td className={td}>Mudah dibawa</td>
                    <td className={td}>Mudah dibawa</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
          <div className="mb-10">
            <h1
              id="Rumus"
              className="z-10 pt-8 pb-2 text-2xl font-semibold bg-white rounded-md lg:pt-0"
            >
              Rumus
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              enim provident tenetur? Earum voluptas, rerum aliquid corporis,
              sit veritatis laborum aut eum sed saepe natus esse quas expedita
              animi! Quasi odio architecto impedit voluptatum eligendi nihil
              placeat molestiae at vitae consequatur, autem, eos hic nemo
              debitis recusandae deleniti asperiores? Officia quam eaque
              excepturi facere, eligendi perferendis iste. Accusantium nam dolor
              doloremque unde expedita sunt cumque blanditiis, corrupti, in sit
              ipsum qui laboriosam hic quidem, odio ad. In officia, pariatur
              exercitationem provident deserunt neque excepturi nisi voluptates
              saepe quidem commodi esse, atque odio incidunt voluptatum porro
              ipsum reiciendis iusto nostrum laboriosam. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Laborum quibusdam ipsa nostrum
              facilis qui nisi ratione molestias, sequi dolores nihil sint
              corporis tenetur nam illum accusantium reprehenderit eos! Eligendi
              illo iste, at obcaecati quaerat corporis qui iusto eveniet soluta
              unde sunt rem? Corrupti, quidem! Aspernatur perspiciatis quibusdam
              iure laborum perferendis eligendi quas dolor quia, sit expedita
              modi quis nam aliquid deserunt amet soluta cumque at eaque dolores
              dolore corporis libero provident consectetur quidem. Repudiandae
              sed debitis omnis corrupti possimus in sit magni labore, sapiente
              repellat nam libero explicabo aspernatur rerum facere, incidunt
              eligendi consequatur magnam inventore voluptatem illo. Nihil,
              asperiores!
            </p>
          </div>
          <div className="mb-10">
            <h1
              id="PenurunanRumus"
              className="z-10 pt-8 pb-2 text-2xl font-semibold bg-white rounded-md lg:pt-0"
            >
              Penurunan Rumus
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              enim provident tenetur? Earum voluptas, rerum aliquid corporis,
              sit veritatis laborum aut eum sed saepe natus esse quas expedita
              animi! Quasi odio architecto impedit voluptatum eligendi nihil
              placeat molestiae at vitae consequatur, autem, eos hic nemo
              debitis recusandae deleniti asperiores? Officia quam eaque
              excepturi facere, eligendi perferendis iste. Accusantium nam dolor
              doloremque unde expedita sunt cumque blanditiis, corrupti, in sit
              ipsum qui laboriosam hic quidem, odio ad. In officia, pariatur
              exercitationem provident deserunt neque excepturi nisi voluptates
              saepe quidem commodi esse, atque odio incidunt voluptatum porro
              ipsum reiciendis iusto nostrum laboriosam. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Laborum quibusdam ipsa nostrum
              facilis qui nisi ratione molestias, sequi dolores nihil sint
              corporis tenetur nam illum accusantium reprehenderit eos! Eligendi
              illo iste, at obcaecati quaerat corporis qui iusto eveniet soluta
              unde sunt rem? Corrupti, quidem! Aspernatur perspiciatis quibusdam
              iure laborum perferendis eligendi quas dolor quia, sit expedita
              modi quis nam aliquid deserunt amet soluta cumque at eaque dolores
              dolore corporis libero provident consectetur quidem. Repudiandae
              sed debitis omnis corrupti possimus in sit magni labore, sapiente
              repellat nam libero explicabo aspernatur rerum facere, incidunt
              eligendi consequatur magnam inventore voluptatem illo. Nihil,
              asperiores!
            </p>
          </div>
          <div className="mb-10">
            <h1
              id="ContohSoal"
              className="pt-8 pb-2 text-2xl font-semibold bg-white rounded-md lg:pt-0"
            >
              Contoh Soal
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              enim provident tenetur? Earum voluptas, rerum aliquid corporis,
              sit
            </p>
            <ExampleMain type="Contoh Soal Mudah" tambahan="space-y-2">
              <ExampleChild type="Teori Kinetik Gas">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nemo.
              </ExampleChild>
              <ExampleChild type="Teori Kinetik Gas">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nemo.
              </ExampleChild>
              <ExampleChild type="Teori Kinetik Gas">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nemo.
              </ExampleChild>
              <ExampleChild type="Teori Kinetik Gas">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nemo.
              </ExampleChild>
              <ExampleChild type="Teori Kinetik Gas">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nemo.
              </ExampleChild>
              <ExampleChild type="Teori Kinetik Gas">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nemo.
              </ExampleChild>

              <ExampleChild type="Teori Kinetik Gas">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nemo.
              </ExampleChild>
              <ExampleChild type="Teori Kinetik Gas">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nemo.
              </ExampleChild>

              <ExampleChild type="Teori Kinetik Gas">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nemo.
              </ExampleChild>
              <ExampleChild type="Teori Kinetik Gas">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nemo.
              </ExampleChild>
            </ExampleMain>
            <ExampleMain type="Contoh Soal Mudah">
              <ExampleChild type="Teori Kinetik Gas">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nemo.
              </ExampleChild>
            </ExampleMain>
            <ExampleMain type="Contoh Soal Mudah">
              <ExampleChild type="Teori Kinetik Gas">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nemo.
              </ExampleChild>
            </ExampleMain>
            <ExampleMain type="Contoh Soal Mudah">
              <ExampleChild type="Teori Kinetik Gas">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nemo.
              </ExampleChild>
            </ExampleMain>
            <ExampleMain type="Contoh Soal Mudah">
              <ExampleChild type="Teori Kinetik Gas">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nemo.
              </ExampleChild>
            </ExampleMain>
            <ExampleMain type="Contoh Soal Mudah">
              <ExampleChild type="Teori Kinetik Gas">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nemo.
              </ExampleChild>
            </ExampleMain>
          </div>
        </section>
      </div>
    </ChapterLayout>
  );
};
export default termodinamika;
