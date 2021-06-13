import { Menu } from "@headlessui/react";
export default function fluida() {
  return (
    <main>
      <Menu
        as="div"
        className="sticky flex flex-col items-center w-full bg-white top-16"
      >
        {({ open }) => (
          <>
            <div className="flex items-center justify-between w-full text-[#3A3A3C] py-1">
              <div className="font-semibold">Fluida Statis</div>
              <Menu.Button className="focus:outline-none px-2 py-1 space-x-1 rounded-md flex justify-between items-center border border-[#D1D1DB] bg-[#F2F2F7]">
                <div className="text-xs">Daftar Isi</div>
                <div>
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
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
                      className="w-4 h-4"
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
            <Menu.Items className="max-w-5xl space-y-2 bg-[#F2F5F7] text-sm right-0 w-full p-2 rounded  mt-4 origin-top-right border border-[#D1D1DB]  ">
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
                  href="#Konstanta"
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
      <div>
        <h1 id="Pengenalan" className="sticky top-24 bg-white py-1 text-[#FF2D55] font-semibold">
          Pengenalan
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto,
          nobis ea unde a quisquam molestias? Debitis fuga unde reprehenderit,
          expedita omnis voluptates at animi quod quaerat exercitationem nam
          ipsam molestiae, modi dolores cum neque eius adipisci esse quas ad
          dignissimos sequi dolorum possimus. Consectetur, sunt, vero aliquam
          itaque ab dolorem non nesciunt incidunt possimus dolorum veritatis.
          Cum veniam reprehenderit iste qui consequuntur sint repudiandae, natus
          excepturi quaerat debitis? Nulla iste ut natus nisi. Vel adipisci,
          dolorum laboriosam suscipit autem quisquam, ex vitae blanditiis dicta
          sapiente recusandae, eaque nulla voluptate. Reiciendis provident eaque
          fugit, necessitatibus vero nemo deserunt incidunt natus numquam odio
          dolore ipsam consectetur suscipit dolores porro consequatur molestiae
          quis repellendus doloribus. Ad cupiditate impedit illo perspiciatis
          alias quam vitae voluptatem quibusdam tempora ea error aperiam, ipsa
          dolorum, reprehenderit accusamus nisi deleniti? Ad voluptas beatae
          velit optio cum modi accusantium? Facilis unde dolore consequatur vel?
          Quae modi non nisi sunt adipisci aut impedit, mollitia, consequuntur
          dolorum eum iste voluptatem optio cupiditate facere nihil magnam.
          Neque quam accusantium, repellat iure esse porro itaque repellendus
          aliquam similique deleniti harum quia ipsum culpa, sint maxime dolor
          illo. Rem aliquid quisquam provident est excepturi magni animi illo
          quos mollitia asperiores doloribus ea eius a quas ipsam veritatis
          nesciunt voluptates placeat repellendus fuga, officia dolores
          accusamus. Magni, nisi praesentium porro fugiat, in provident, quidem
          velit esse id qui temporibus adipisci voluptatibus. Maiores aspernatur
          dicta accusamus aut cupiditate labore necessitatibus similique odio
          unde magni eius dolores facere sed saepe voluptatum maxime, eaque non
          et reprehenderit deserunt? Nemo nesciunt minima vero nulla mollitia
          neque nisi distinctio! Sequi, cumque maxime molestiae commodi repellat
          eum numquam minima, nemo quam vitae quisquam vero possimus recusandae
          quis deleniti tenetur deserunt praesentium porro quaerat similique
          omnis ad! Debitis natus repudiandae maiores error quos aperiam porro
          consectetur incidunt, suscipit necessitatibus quod rem placeat ipsa
          explicabo vero minus! Harum cumque sapiente nostrum ducimus qui,
          beatae, unde aspernatur debitis fuga tenetur vero voluptatibus
          necessitatibus, architecto blanditiis obcaecati? Explicabo soluta a
          commodi, praesentium repudiandae corporis ea modi dolorem error
          numquam? Quis temporibus corrupti tempora et officia velit adipisci
          dolorum quo quas totam tenetur ullam minus veniam aliquam esse, dicta
          illum libero quam numquam voluptatum sapiente hic! Rerum veritatis
          consequuntur doloremque culpa eos magni sunt nostrum omnis velit!
          Vitae velit provident voluptate nihil esse adipisci hic? Repellendus
          omnis aperiam et quibusdam, officiis animi iusto porro quisquam, sed
          neque libero blanditiis exercitationem? Unde nam ad doloribus
          molestiae nostrum laboriosam alias labore id ipsam consequatur aliquam
          mollitia impedit, et minus, cum atque hic dolorem libero ut quod
          itaque distinctio aut non. Pariatur odit maxime ad vel quae
          voluptatibus, inventore nihil nisi fugit deleniti ab exercitationem
          rem, vitae nostrum aut placeat vero dignissimos! Ratione nisi maxime
          sapiente consequuntur totam labore autem enim harum accusamus magni
          sed alias libero inventore placeat aut, dolorum odio dicta delectus
          officia facere quidem animi? Minus officiis exercitationem commodi
          similique quasi praesentium voluptates temporibus doloribus dolore
          alias porro esse soluta fugiat voluptate non, neque molestiae sit
          beatae. Tenetur aliquid similique autem adipisci. Commodi magnam
          recusandae voluptate! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aspernatur, repudiandae itaque ipsam qui porro,
          harum fugiat quidem officiis amet adipisci corrupti quos excepturi nam
          voluptates pariatur alias? Architecto nemo similique consequatur
          repellendus. Atque non architecto provident necessitatibus corrupti
          quis, ab aut facere expedita incidunt? Placeat ex, dolore deleniti
          fugit quaerat quidem quia neque iusto consectetur suscipit,
          consequuntur, facere fuga facilis commodi similique dolores odit.
          Natus amet recusandae dignissimos nesciunt aperiam enim asperiores
          iste incidunt nobis perspiciatis, animi nam iusto, veniam minima illo
          culpa a delectus neque unde. Dolor modi iste laboriosam blanditiis,
          adipisci, a animi incidunt, doloribus exercitationem eveniet
          nisi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          atque doloremque asperiores quis optio. Dolorem nostrum excepturi,
          vitae repudiandae necessitatibus labore. Atque, sed, doloremque error
          adipisci dolore veniam et quae, reiciendis sapiente ipsum quas aliquid
          similique dolorum voluptas illo amet? Accusantium alias aut iure, quae
          libero magnam voluptate iste suscipit autem laboriosam possimus
          voluptates laudantium commodi ipsa quidem debitis eligendi pariatur?
          Expedita aperiam dolore voluptate dolorum voluptas mollitia, sunt
          blanditiis, deleniti alias, laboriosam earum odit doloribus? Cumque
          laboriosam perspiciatis amet explicabo aliquid incidunt architecto aut
          corporis quibusdam vel. Nobis architecto perferendis facere cumque?
          Assumenda voluptatum minus maiores dignissimos. Incidunt, reiciendis?
        </p>
      </div>
    </main>
  );
}
