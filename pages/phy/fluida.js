import { Menu } from "@headlessui/react";
export default function fluida() {
  return (
    <main className="grid grid-cols-1 gap-4 md:grid-cols-4 ">
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
      <div className="md:col-span-3">
        <div>
          <h1
            id="Pengenalan"
            className="z-10 text-xl sm:text-2xl bg-white rounded-md  sticky top-0  py-2 text-[#FF2D55] font-semibold"
          >
            Pengenalan
          </h1>
          <p>
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
          </p>
        </div>
        <div>
          <h1
            id="Variabel"
            className="z-10 text-xl sm:text-2xl bg-white rounded-md  sticky top-0  py-2 text-[#FF9500] font-semibold"
          >
            Variabel
          </h1>
          <p>
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
            iusto nostrum laboriosam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum quibusdam ipsa nostrum facilis qui nisi
            ratione molestias, sequi dolores nihil sint corporis tenetur nam
            illum accusantium reprehenderit eos! Eligendi illo iste, at
            obcaecati quaerat corporis qui iusto eveniet soluta unde sunt rem?
            Corrupti, quidem! Aspernatur perspiciatis quibusdam iure laborum
            perferendis eligendi quas dolor quia, sit expedita modi quis nam
            aliquid deserunt amet soluta cumque at eaque dolores dolore corporis
            libero provident consectetur quidem. Repudiandae sed debitis omnis
            corrupti possimus in sit magni labore, sapiente repellat nam libero
            explicabo aspernatur rerum facere, incidunt eligendi consequatur
            magnam inventore voluptatem illo. Nihil, asperiores!
          </p>
        </div>
        <div>
          <h1
            id="Rumus"
            className="z-10 text-xl sm:text-2xl bg-white rounded-md  sticky top-0  py-2 text-[#34C759] font-semibold"
          >
            Rumus
          </h1>
          <p>
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
            iusto nostrum laboriosam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum quibusdam ipsa nostrum facilis qui nisi
            ratione molestias, sequi dolores nihil sint corporis tenetur nam
            illum accusantium reprehenderit eos! Eligendi illo iste, at
            obcaecati quaerat corporis qui iusto eveniet soluta unde sunt rem?
            Corrupti, quidem! Aspernatur perspiciatis quibusdam iure laborum
            perferendis eligendi quas dolor quia, sit expedita modi quis nam
            aliquid deserunt amet soluta cumque at eaque dolores dolore corporis
            libero provident consectetur quidem. Repudiandae sed debitis omnis
            corrupti possimus in sit magni labore, sapiente repellat nam libero
            explicabo aspernatur rerum facere, incidunt eligendi consequatur
            magnam inventore voluptatem illo. Nihil, asperiores!
          </p>
        </div>
        <div>
          <h1
            id="PenurunanRumus"
            className="z-10 text-xl sm:text-2xl bg-white rounded-md  sticky top-0  py-2 text-[#32ADFA] font-semibold"
          >
            Penurunan Rumus
          </h1>
          <p>
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
            iusto nostrum laboriosam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum quibusdam ipsa nostrum facilis qui nisi
            ratione molestias, sequi dolores nihil sint corporis tenetur nam
            illum accusantium reprehenderit eos! Eligendi illo iste, at
            obcaecati quaerat corporis qui iusto eveniet soluta unde sunt rem?
            Corrupti, quidem! Aspernatur perspiciatis quibusdam iure laborum
            perferendis eligendi quas dolor quia, sit expedita modi quis nam
            aliquid deserunt amet soluta cumque at eaque dolores dolore corporis
            libero provident consectetur quidem. Repudiandae sed debitis omnis
            corrupti possimus in sit magni labore, sapiente repellat nam libero
            explicabo aspernatur rerum facere, incidunt eligendi consequatur
            magnam inventore voluptatem illo. Nihil, asperiores!
          </p>
        </div>
        <div>
          <h1
            id="ContohSoal"
            className="z-10 text-xl sm:text-2xl bg-white rounded-md  sticky top-0  py-2 text-[#5856D6] font-semibold"
          >
            Contoh Soal
          </h1>
          <p>
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
            iusto nostrum laboriosam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum quibusdam ipsa nostrum facilis qui nisi
            ratione molestias, sequi dolores nihil sint corporis tenetur nam
            illum accusantium reprehenderit eos! Eligendi illo iste, at
            obcaecati quaerat corporis qui iusto eveniet soluta unde sunt rem?
            Corrupti, quidem! Aspernatur perspiciatis quibusdam iure laborum
            perferendis eligendi quas dolor quia, sit expedita modi quis nam
            aliquid deserunt amet soluta cumque at eaque dolores dolore corporis
            libero provident consectetur quidem. Repudiandae sed debitis omnis
            corrupti possimus in sit magni labore, sapiente repellat nam libero
            explicabo aspernatur rerum facere, incidunt eligendi consequatur
            magnam inventore voluptatem illo. Nihil, asperiores!
          </p>
        </div>
      </div>
    </main>
  );
}
