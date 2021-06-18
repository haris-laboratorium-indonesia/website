import Image from "next/image";
import Link from "next/link";
import { HiOutlineChevronLeft } from "react-icons/hi";
import ChapterLayout from "../../../components/ChapterLayout";
import ExampleMain from "../../../components/ExampleMain";
import ExampleChild from "../../../components/ExampleChild";

const List = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      shape-rendering="geometricPrecision"
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
const termodinamika = () => {
  const td = " text-left text-sm p-2";
  const th = "p-2 text-left text-base font-medium text-rose-500 bg-rose-50";
  return (
    <ChapterLayout chapter="Termodinamika">
      <div className="sticky top-0 z-30 flex items-center justify-between py-1 mb-10 bg-white drop-shadow sm:py-2">
        <Link href="/materi/fisika">
          <a className=" flex items-center pr-1 py-0.5 rounded-md  text-rose-500 hover:bg-gray-100">
            <HiOutlineChevronLeft className="text-rose-500" />
            <div>Materi</div>
          </a>
        </Link>
        <div className="flex items-center justify-end w-2/3 space-x-2 text-xs">
          <Link href="/login">
            <a className="block px-2 py-1 duration-200 border rounded border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white">
              SUBSCRIBE
            </a>
          </Link>
          <div className="px-1 p-0.5 text-rose-500 border border-rose-500 rounded">
            <List />
          </div>
        </div>
      </div>
      <div className="text-4xl">Termodinamika</div>
      <div>
        <div>
          <h1
            id="Pengenalan"
            className="z-10 py-2 text-xl font-semibold bg-white rounded-md sm:text-2xl"
          >
            Pengenalan
          </h1>
          <div className="w-full overflow-hidden rounded-lg">
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
          molestiae at vitae consequatur, autem, eos hic nemo debitis recusandae
          deleniti asperiores? Officia quam eaque excepturi facere, eligendi
          perferendis iste. Accusantium nam dolor doloremque unde expedita sunt
          cumque blanditiis, corrupti, in sit ipsum qui laboriosam hic quidem,
          odio ad. In officia, pariatur exercitationem provident deserunt neque
          excepturi nisi voluptates saepe quidem commodi esse, atque odio
          incidunt voluptatum porro ipsum reiciendis iusto nostrum laboriosam.
        </div>
        <div className>
          <h1
            id="Variabel"
            className="z-10 py-2 text-xl font-semibold bg-white rounded-md sm:text-2xl"
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
        <div className>
          <h1
            id="Rumus"
            className="z-10 py-2 text-xl font-semibold bg-white rounded-md sm:text-2xl"
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
        <div className>
          <h1
            id="PenurunanRumus"
            className="z-10 py-2 text-xl font-semibold bg-white rounded-md sm:text-2xl"
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
        <div className>
          <h1
            id="ContohSoal"
            className="py-2 text-xl font-semibold bg-white rounded-md sm:text-2xl"
          >
            Contoh Soal
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero enim
            provident tenetur? Earum voluptas, rerum aliquid corporis, sit
          </p>
          <ExampleMain type="Contoh Soal Mudah" tambahan="space-y-2">
            <ExampleChild type="Teori Kinetik Gas">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              nemo.
            </ExampleChild>
            <ExampleChild type="Teori Kinetik Gas">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              nemo.
            </ExampleChild>
            <ExampleChild type="Teori Kinetik Gas">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              nemo.
            </ExampleChild>
            <ExampleChild type="Teori Kinetik Gas">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              nemo.
            </ExampleChild>
            <ExampleChild type="Teori Kinetik Gas">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              nemo.
            </ExampleChild>
            <ExampleChild type="Teori Kinetik Gas">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              nemo.
            </ExampleChild>

            <ExampleChild type="Teori Kinetik Gas">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              nemo.
            </ExampleChild>
            <ExampleChild type="Teori Kinetik Gas">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              nemo.
            </ExampleChild>

            <ExampleChild type="Teori Kinetik Gas">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              nemo.
            </ExampleChild>
            <ExampleChild type="Teori Kinetik Gas">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              nemo.
            </ExampleChild>
          </ExampleMain>
          <ExampleMain type="Contoh Soal Mudah">
            <ExampleChild type="Teori Kinetik Gas">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              nemo.
            </ExampleChild>
          </ExampleMain>
          <ExampleMain type="Contoh Soal Mudah">
            <ExampleChild type="Teori Kinetik Gas">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              nemo.
            </ExampleChild>
          </ExampleMain>
          <ExampleMain type="Contoh Soal Mudah">
            <ExampleChild type="Teori Kinetik Gas">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              nemo.
            </ExampleChild>
          </ExampleMain>
          <ExampleMain type="Contoh Soal Mudah">
            <ExampleChild type="Teori Kinetik Gas">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              nemo.
            </ExampleChild>
          </ExampleMain>
          <ExampleMain type="Contoh Soal Mudah">
            <ExampleChild type="Teori Kinetik Gas">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              nemo.
            </ExampleChild>
          </ExampleMain>
        </div>
      </div>
    </ChapterLayout>
  );
};
export default termodinamika;
