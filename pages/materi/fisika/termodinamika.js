import "katex/dist/katex.min.css";
import Termodinamika from "../../../public/Termodinamika.jpg";
import TeX from "@matejmazur/react-katex";
import Image from "next/image";
import ExampleMain from "../../../components/ExampleMain";
import ExampleChild from "../../../components/ExampleChild";
import List from "../../../components/List";
import Layout from "../../../components/Layout";

const termodinamika = () => {
  const th =
    "w-1/5 p-2 text-center text-base font-medium text-blue-500 bg-blue-50";
  const td = " text-left p-2";
  const tr = "divide-x divide-blue-200 ";
  const header =
    "z-10 pt-8 pb-4 text-3xl bg-white rounded-md lg:pt-0 font-mw mt-14";
  return (
    <Layout title="Termodinamika" description="Materi Termodinamika">
      <List title="Fisika / Termodinamika" />
      <div className="grid grid-cols-5">
        <div className="col-span-5 sm:col-span-4">
          <div className="mt-10 mb-5 text-5xl font-semibold font-mw">
            Termodinamika
          </div>
          <Image
            src={Termodinamika}
            alt="Termodinamika"
            placeholder="blur"
            layout="intrinsic"
            className="mb-4 rounded-lg"
            priority
          />
          <h1 id="Pengenalan" className={header}>
            Pengenalan
          </h1>
          <TeX>{`\\frac{d}{dx}(cos x) = - sin x`}</TeX>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero enim
          provident tenetur? Earum voluptas, rerum aliquid corporis, sit
          veritatis laborum aut eum sed saepe natus esse quas expedita animi!
          Quasi odio architecto impedit voluptatum eligendi nihil placeat
          molestiae at vitae <TeX>{`\\frac{d}{dx}(cos x) = - sin x`}</TeX>
          consequatur, autem, eos hic nemo debitis recusandae deleniti
          asperiores? Officia quam eaque excepturi facere, eligendi perferendis
          iste. Accusantium nam dolor doloremque unde expedita sunt cumque
          blanditiis, corrupti, in sit ipsum qui laboriosam hic quidem, odio ad.
          In officia, pariatur exercitationem provident deserunt neque excepturi
          nisi voluptates saepe quidem commodi esse, atque odio incidunt
          voluptatum porro ipsum reiciendis iusto nostrum laboriosam.
          {/* variabel */}
          <h1 id="Variabel" className={header}>
            Variabel
          </h1>
          <section className="mx-auto overflow-x-auto sm:gap-5 lg:px-0">
            <table className="w-full table-fixed">
              <thead>
                <tr className={tr}>
                  <th className={th}>Nama</th>
                  <th className={th}>Satuan</th>
                  <th className={th}>Simbol</th>
                  <th className={th}>Arah</th>
                  <th className={th}>Keterangan</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-blue-300">
                <tr className={tr}>
                  <td className={td}>Tekanan</td>
                  <td className={td}>
                    <TeX>Pascal/Pa</TeX>
                  </td>
                  <td className={td}>
                    <TeX>{`P  = \\frac{F}{A}`}</TeX>
                  </td>
                  <td className={td}>Tergantung kondisi</td>{" "}
                  <td className={td}>-</td>
                </tr>

                <tr className={tr}>
                  <td className={td}>Tekanan Hidrostatis</td>
                  <td className={td}>
                    <TeX>Pascal/Pa</TeX>
                  </td>
                  <td className={td}>
                    <TeX>{`\P_h = \\rho g h`}</TeX>
                  </td>
                  <td className={td}>Tergantung kondisi</td>
                  <td className={td}>-</td>
                </tr>

                <tr className={tr}>
                  <td className={td}>Hukum Pascal</td>
                  <td className={td}>
                    <TeX>Pascal/Pa</TeX>
                  </td>
                  <td className={td}>
                    <TeX>{`\\frac{P_1}{A_1} = \\frac{P_2}{A_2}`}</TeX>
                  </td>
                  <td className={td}>Tergantung kondisi</td>
                  <td className={td}>-</td>
                </tr>

                <tr className={tr}>
                  <td className={td}>Hukum Archimedes</td>
                  <td className={td}>
                    <TeX>{`Newton/N`}</TeX>
                  </td>
                  <td className={td}>
                    {" "}
                    <TeX>{`F_A < W`}</TeX>
                  </td>
                  <td className={td}>Ke atas </td>
                  <td className={td}></td>
                </tr>
              </tbody>
            </table>
          </section>
          {/* rumus */}
          <h1 id="Rumus" className={header}>
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
          {/* penurunan rumus */}
          <h1 id="PenurunanRumus" className={header}>
            Penurunan Rumus
          </h1>
          <p>
            Math Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            enim provident tenetur? Earum voluptas, rerum aliquid corporis, sit
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
          {/* contoh soal */}
          <h1 id="ContohSoal" className={header}>
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
          </ExampleMain>
          <ExampleMain type="Contoh Soal Mudah">
            <ExampleChild type="Teori Kinetik Gas">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              nemo.
            </ExampleChild>
          </ExampleMain>
        </div>
      </div>
    </Layout>
  );
};

export default termodinamika;
