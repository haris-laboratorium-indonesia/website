import 'katex/dist/katex.min.css';
import Nature from '../../public/nature.jpg';
import Forest from '../../public/amazing.jpg';

import TeX from '@matejmazur/react-katex';
import Image from 'next/image';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import ListTermodinamika from '@/List/ListTermodinamika';
import Layout from '@/components/Layout';

const HIRARKI1 = ({ title }) => {
  return (
    <h1
      id={title}
      className={`z-10 pt-8 pb-4  text-3xl sm:text-4xl lg:pt-0 font-bold mt-14 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500`}
    >
      {title}
    </h1>
  );
};

const HIRARKI2 = ({ id, title, children }) => {
  return (
    <div className='text-lg tracking-wide mb-7'>
      <div id={id} className='font-bold '>
        {title}
      </div>
      <div className='font-light'>{children}</div>
    </div>
  );
};

const termodinamika = () => {
  const th = 'w-1/5 p-2 text-center text-base font-medium text-amber-500 bg-amber-50';
  const td = ' text-left py-3 px-2 table-auto min-w-min';
  const tr = 'divide-x divide-amber-200 ';
  const H1 = 'z-10 pt-8 pb-4 text-3xl bg-white rounded-md lg:pt-0 font-mw mt-14';
  return (
    <Layout browserTitle='Termodinamika' description='Materi Termodinamika'>
      <ListTermodinamika title='Termodinamika' materi='/fisika' page='termodinamika' />
      <div className='mb-4 -mx-5 sm:-mx-10'>
        <Image
          src={Nature}
          alt='Termodinamika'
          placeholder='blur'
          layout='intrinsic'
          priority
          className='lg:rounded-md'
        />
      </div>
      <figcaption className='text-sm italic text-center font-mw'>
        Gambar 1 : Gunung di Lauterbrunnen Swiss, tempat dimana rumus termodinamika ke-0 dirumuskan.
      </figcaption>
      <HIRARKI1 title='Pengenalan' />
      <HIRARKI2 id='Apa' title='Apa itu Termodinamika'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos consequatur veritatis, animi
        sed nihil dolor ad maiores obcaecati exercitationem possimus adipisci optio dolorem nobis
        architecto autem minima velit laborum iusto eum vitae esse asperiores, cum hic ratione!
        Alias, odio? Adipisci, qui nam modi fuga eum ad. Ducimus excepturi cupiditate odio.
      </HIRARKI2>
      <HIRARKI2 id='Siapa' title='Siapa yang menggunakan Termodinamika'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos consequatur veritatis, animi
        sed nihil dolor ad maiores obcaecati exercitationem possimus adipisci optio dolorem nobis
        architecto autem minima velit laborum iusto eum vitae esse asperiores, cum hic ratione!
        Alias, odio? Adipisci, qui nam modi fuga eum ad. Ducimus excepturi cupiditate odio.
      </HIRARKI2>
      <HIRARKI2 id='Dimana' title='Dimana Termodinamika digunakan'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos consequatur veritatis, animi
        sed nihil dolor ad maiores obcaecati exercitationem possimus adipisci optio dolorem nobis
        architecto autem minima velit laborum iusto eum vitae esse asperiores, cum hic ratione!
        Alias, odio? Adipisci, qui nam modi fuga eum ad. Ducimus excepturi cupiditate odio.
      </HIRARKI2>
      <HIRARKI2 id='Kapan' title='Kapan Termodinamika digunakan'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos consequatur veritatis, animi
        sed nihil dolor ad maiores obcaecati exercitationem possimus adipisci optio dolorem nobis
        architecto autem minima velit laborum iusto eum vitae esse asperiores, cum hic ratione!
        Alias, odio? Adipisci, qui nam modi fuga eum ad. Ducimus excepturi cupiditate odio.
      </HIRARKI2>
      {/* variabel */}
      <HIRARKI1 title='Variabel' />
      <section className='mx-auto overflow-x-auto sm:gap-5 lg:px-0'>
        <table className='w-full min-w-full table-max'>
          <thead>
            <tr className={tr}>
              <th className={th}>Nama</th>
              <th className={th}>Satuan</th>
              <th className={th}>Simbol</th>
            </tr>
          </thead>

          <tbody className='divide-y divide-amber-300'>
            <tr className={tr}>
              <td className={td}>Tekanan</td>
              <td className={td}>
                <TeX>Pascal/Pa</TeX>
              </td>
              <td className={td}>
                <TeX>{`P  = \\frac{F}{A}`}</TeX>
              </td>
            </tr>

            <tr className={tr}>
              <td className={td}>Tekanan Hidrostatis</td>
              <td className={td}>
                <TeX>Pascal/Pa</TeX>
              </td>
              <td className={td}>
                <TeX>{`\P_h = \\rho g h`}</TeX>
              </td>
            </tr>

            <tr className={tr}>
              <td className={td}>Hukum Pascal</td>
              <td className={td}>
                <TeX>Pascal/Pa</TeX>
              </td>
              <td className={td}>
                <TeX>{`\\frac{P_1}{A_1} = \\frac{P_2}{A_2}`}</TeX>
              </td>
            </tr>

            <tr className={tr}>
              <td className={td}>Hukum Archimedes</td>
              <td className={td}>
                <TeX>{`Newton/N`}</TeX>
              </td>
              <td className={td}>
                <TeX>{`F_A < W`}</TeX>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      {/* rumus */}
      <HIRARKI1 title='Rumus' />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero enim provident tenetur? Earum
        voluptas, rerum aliquid corporis, sit veritatis laborum aut eum sed saepe natus esse quas
        expedita animi! Quasi odio architecto impedit voluptatum eligendi nihil placeat molestiae at
        vitae consequatur, autem, eos hic nemo debitis recusandae deleniti asperiores? Officia quam
        eaque excepturi facere, eligendi perferendis iste. Accusantium nam dolor doloremque unde
        expedita sunt cumque blanditiis, corrupti, in sit ipsum qui laboriosam hic quidem, odio ad.
        In officia, pariatur exercitationem provident deserunt neque excepturi nisi voluptates saepe
        quidem commodi esse, atque odio incidunt voluptatum porro ipsum reiciendis iusto nostrum
        laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quibusdam ipsa
        nostrum facilis qui nisi ratione molestias, sequi dolores nihil sint corporis tenetur nam
        <div className='my-4 mb-4 -mx-5 sm:-mx-10'>
          <Image
            src={Forest}
            alt='Termodinamika'
            placeholder='blur'
            layout='intrinsic'
            priority
            className='lg:rounded-md'
          />
        </div>
        illum accusantium reprehenderit eos! Eligendi illo iste, at obcaecati quaerat corporis qui
        iusto eveniet soluta unde sunt rem? Corrupti, quidem! Aspernatur perspiciatis quibusdam iure
        laborum perferendis eligendi quas dolor quia, sit expedita modi quis nam aliquid deserunt
        amet soluta cumque at eaque dolores dolore corporis libero provident consectetur quidem.
        Repudiandae sed debitis omnis corrupti possimus in sit magni labore, sapiente repellat nam
        libero explicabo aspernatur rerum facere, incidunt eligendi consequatur magnam inventore
        voluptatem illo. Nihil, asperiores!
      </p>
      {/* penurunan rumus */}
      <HIRARKI1 title='PenurunanRumus' />
      <p>
        Math Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero enim provident tenetur?
        Earum voluptas, rerum aliquid corporis, sit veritatis laborum aut eum sed saepe natus esse
        quas expedita animi! Quasi odio architecto impedit voluptatum eligendi nihil placeat
        molestiae at vitae consequatur, autem, eos hic nemo debitis recusandae deleniti asperiores?
        Officia quam eaque excepturi facere, eligendi perferendis iste. Accusantium nam dolor
        doloremque unde expedita sunt cumque blanditiis, corrupti, in sit ipsum qui laboriosam hic
        quidem, odio ad. In officia, pariatur exercitationem provident deserunt neque excepturi nisi
        voluptates saepe quidem commodi esse, atque odio incidunt voluptatum porro ipsum reiciendis
        iusto nostrum laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        quibusdam ipsa nostrum facilis qui nisi ratione molestias, sequi dolores nihil sint corporis
        tenetur nam illum accusantium reprehenderit eos! Eligendi illo iste, at obcaecati quaerat
        corporis qui iusto eveniet soluta unde sunt rem? Corrupti, quidem! Aspernatur perspiciatis
        quibusdam iure laborum perferendis eligendi quas dolor quia, sit expedita modi quis nam
        aliquid deserunt amet soluta cumque at eaque dolores dolore corporis libero provident
        consectetur quidem. Repudiandae sed debitis omnis corrupti possimus in sit magni labore,
        sapiente repellat nam libero explicabo aspernatur rerum facere, incidunt eligendi
        consequatur magnam inventore voluptatem illo. Nihil, asperiores!
      </p>
      {/* Pembahasan */}
      <HIRARKI1 title='Pembahasan' />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laborum dignissimos odit
      nesciunt eligendi voluptate placeat praesentium ab dolor. Aspernatur, maiores sit accusantium
      neque nobis quibusdam odit similique debitis pariatur illum voluptatem repellendus, adipisci
      ab accusamus eos quidem rem id autem fugiat ad iusto quia dolor? Omnis eveniet iusto
      aspernatur fugiat, quas ex laborum voluptatum officiis rerum cumque placeat tempora
      voluptates! Cum nulla magnam quia ab. Minima nemo quae, hic exercitationem accusantium iure
      voluptas sequi omnis culpa in non incidunt recusandae optio rerum fugit totam eligendi
      inventore est ab repudiandae? Soluta, obcaecati ducimus corrupti vel quod quasi totam ipsum
      debitis?
      {/* contoh soal */}
      <HIRARKI1 title='ContohSoal' />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero enim provident tenetur? Earum
        voluptas, rerum aliquid corporis, sit
      </p>
      <ExampleMain type='Contoh Soal Mudah'>
        <ExampleChild type='Teori Kinetik Gas'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, nemo.
        </ExampleChild>
      </ExampleMain>
    </Layout>
  );
};

export default termodinamika;
