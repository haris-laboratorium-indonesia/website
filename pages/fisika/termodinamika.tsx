import 'katex/dist/katex.min.css';
import Nature from '../../public/nature.jpg';
import Forest from '../../public/amazing.jpg';

import TeX from '@matejmazur/react-katex';
import Image from 'next/image';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import ListTermodinamika from '@/List/ListTermodinamika';
import Layout from '@/components/Layout';

import Materi from '@/components/Materi';
import { AA1, A2, th, td, tr, thead, Para } from '@/components/Blog';

const termodinamika = () => {
  return (
    <Materi browserTitle='Termodinamika' description='Materi Termodinamika'>
      <ListTermodinamika title='Termodinamika' materi='/fisika' page='termodinamika' />
      <div className='mb-4 -mx-5 sm:-mx-0'>
        <Image
          src={Nature}
          alt='Termodinamika'
          placeholder='blur'
          layout='intrinsic'
          priority
          className='lg:rounded'
        />
        <figcaption className='text-sm italic text-center text-gray-700 font-mw'>
          Gambar 1 : Gunung di Lauterbrunnen Swiss, tempat dimana rumus termodinamika ke-0
          dirumuskan.
        </figcaption>
      </div>
      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Termodinamika' />
      <Para>
        <em>Termo</em> = Panas. <em>Dinamika</em> = bergerak. Termodinamika adalah ilmu yang
        mempelajari panas yang bergerak. Panas adalah suhu, suhu memiliki energi, suhu yang bergerak
        dinamakan kalor. Semua hal di dunia ini memiliki panas, bahkan suhu <TeX>-10\degree</TeX>{' '}
        yang biasa manusia rasakan sebagai sesuatu yang dingin pada dasarnya adalah panas, bahkan
        dalam fisika sebenarnya tidak ada yang namanya dingin, suhu badan manusia rata-rata adalah{' '}
        <TeX>30\degree s.d \ 37\degree</TeX>, itu untuk suhu badan yang sehat, suhu badan di bawah
        itu maka tubuh akan merasakannya sebagai dingin, dan suhu di atas itu akan dianggap sebagai
        sesuatu yang panas.
      </Para>
      <Para>
        Namun bagi hewan lain yang tinggal di bawah laut yang suhunya bisa mencapai{' '}
        <TeX>0\degree</TeX> mereka nyaman dengan suhu tersebut, sehingga persepsi dingin yang
        manusia rasakan pada suhu itu tidak mereka anggap sebagai sesuatu yang dingin bagi mereka,
        melainkan suhu normal.
      </Para>
      <A2 title='Siapa yang menggunakan Termodinamika' />
      <Para>
        Pada dasarnya dunia ini ada karena panas matahari, panas matahati adalah objek dari ilmu
        termodinamika juga. Semua hal di dunia ini yang bergerak baik secara mikroskopik maupun
        makroskopik memiliki properti termodinamika.
      </Para>
      <Para>
        Pekerjaan yang mengandung ilmu termodinamika secara khusus biasanya terknik perminyakan,
        pemadam kebakaran, koki, dan apapun yang berhubungan dengan api. Namun secara umum, karena
        definisi termodinamika adalah sebuah panas yang bergerak, maka semua yang ada di dunia ini
        adalah objek termodinamika, bahkan kuli bangunan yang sedang mengaduk semen juga sedang
        melakukan ilmu termodinamika, panas tubuh yang mereka hasilkan setelah mengankat semen lalu
        jika kita mendekatinya maka panas tubuh mereka kan terasa pada tubuh kita karena ada hukum
        di termodinamika bahwa benda yang suhunya lebih tinggi, suhunya akan pindah ke benda yang
        suhunya lebih rendah.
      </Para>
      <A2 title='Dimana Termodinamika digunakan' />
      <Para>Semua hal di dunia menggunakan prinsip termodinamika.</Para>
      <A2 title='Kapan Termodinamika digunakan' />
      <Para>Selama matahari masih menyinari bumi.</Para>
      <AA1 id='Konstanta' title='Konstanta' />
      <section className='mx-auto overflow-x-auto sm:gap-5 lg:px-0'>
        <table className='w-full min-w-full border table-max'>
          <thead className={thead}>
            <tr className={tr}>
              <th className={th}>Simbol</th>
              <th className={th}>Nama</th>
              <th className={th}>Nilai</th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-300'>
            <tr className={tr}>
              <td className={td}>
                <TeX>k</TeX>
              </td>
              <td className={td}>Konstanta Bolzmann</td>
              <td className={td}>
                <TeX>{`1,380 \\times 10^{-23} \\frac{J}{K}`}</TeX>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      {/* variabel */}
      <AA1 id='Variabel' title='Variabel' />
      <section className='mx-auto overflow-x-auto sm:gap-5 lg:px-0'>
        <table className='w-full min-w-full border table-max'>
          <thead className={thead}>
            <tr className={tr}>
              <th className={th}>Simbol</th>
              <th className={th}>Nama</th>
              <th className={th}>Satuan</th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-300'>
            <tr className={tr}>
              <td className={td}>
                <TeX>P</TeX>
              </td>
              <td className={td}>Tekanan</td>
              <td className={td}>
                <TeX>Pascal/Pa</TeX>
              </td>
            </tr>

            <tr className={tr}>
              <td className={td}>
                <TeX>P_h</TeX>
              </td>
              <td className={td}>Tekanan Hidrostatis</td>
              <td className={td}>
                <TeX>Pascal/Pa</TeX>
              </td>
            </tr>

            <tr className={tr}>
              <td className={td}>
                <TeX>Q_h</TeX>
              </td>
              <td className={td}>Kalor masuk (Hot)</td>
              <td className={td}>
                <TeX>Kelvin / K</TeX>
              </td>
            </tr>

            <tr className={tr}>
              <td className={td}>
                <TeX>Q_c</TeX>
              </td>
              <td className={td}>Kalor keluar (Cold)</td>
              <td className={td}>
                <TeX>Kelvin / K</TeX>
              </td>
            </tr>

            <tr className={tr}>
              <td className={td}>
                <TeX>\eta</TeX>
              </td>
              <td className={td}>Efisiensi</td>
              <td className={td}>
                <TeX>\%</TeX>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      {/* rumus */}
      <AA1 id='Rumus' title='Rumus' />
      <Para>
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
        <div className='my-8 -mx-5 sm:-mx-0 indent-no'>
          <Image
            src={Forest}
            alt='Termodinamika'
            placeholder='blur'
            layout='intrinsic'
            priority
            className='lg:rounded'
          />

          <figcaption className='text-sm italic text-center text-gray-700 font-mw'>
            Gambar 2 : Lembah Einstein, tempat dimana mekanika kuantum dicela dan dicaci maki.
          </figcaption>
        </div>
        illum accusantium reprehenderit eos! Eligendi illo iste, at obcaecati quaerat corporis qui
        iusto eveniet soluta unde sunt rem? Corrupti, quidem! Aspernatur perspiciatis quibusdam iure
        laborum perferendis eligendi quas dolor quia, sit expedita modi quis nam aliquid deserunt
        amet soluta cumque at eaque dolores dolore corporis libero provident consectetur quidem.
        Repudiandae sed debitis omnis corrupti possimus in sit magni labore, sapiente repellat nam
        libero explicabo aspernatur rerum facere, incidunt eligendi consequatur magnam inventore
        voluptatem illo. Nihil, asperiores!
      </Para>
      {/* penurunan rumus */}
      <AA1 id='PenurunanRumus' title='Penurunan Rumus' />
      <Para>
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
      </Para>{' '}
      {/* Pembahasan */}
      <AA1 id='Pembahasan' title='Pembahasan' />
      <Para>
        {' '}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laborum dignissimos odit
        nesciunt eligendi voluptate placeat praesentium ab dolor. Aspernatur, maiores sit
        accusantium neque nobis quibusdam odit similique debitis pariatur illum voluptatem
        repellendus, adipisci ab accusamus eos quidem rem id autem fugiat ad iusto quia dolor? Omnis
        eveniet iusto aspernatur fugiat, quas ex laborum voluptatum officiis rerum cumque placeat
        tempora voluptates! Cum nulla magnam quia ab. Minima nemo quae, hic exercitationem
        accusantium iure voluptas sequi omnis culpa in non incidunt recusandae optio rerum fugit
        totam eligendi inventore est ab repudiandae? Soluta, obcaecati ducimus corrupti vel quod
        quasi totam ipsum debitis?
      </Para>
      {/* contoh soal */}
      <AA1 id='ContohSoal' title='Contoh Soal' />
      <Para>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero enim provident tenetur? Earum
        voluptas, rerum aliquid corporis, sit
      </Para>
      <br />
      <ExampleMain type='Contoh Soal Mudah'>
        <ExampleChild type='Teori Kinetik Gas'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, nemo.
        </ExampleChild>
      </ExampleMain>
    </Materi>
  );
};

export default termodinamika;
