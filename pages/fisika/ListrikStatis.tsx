import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import ListrikStatisImage from '../../public/Fisika/ListrikStatisImage.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import ListListrikStatis from '@/components/ListFisika/ListListrikStatis';
import LayoutMateri from '@/components/LayoutMateri';
import {
  AA1,
  A2,
  TH,
  TData,
  TRowwwww,
  THEAD,
  TBODY,
  Para,
  Gambar,
  Legenda,
  KaTeX,
  rumusTitle,
} from '@/components/Materi';

export default function ListrikStatis() {
  return (
    <LayoutMateri browserTitle='Listrik Statis' description='Materi Listrik Statis'>
      <ListListrikStatis />
      <Gambar
        src={ListrikStatisImage}
        alt='Listrik Statis'
        caption='Gambar 1 : Gunung di Lauterbrunnen Swiss, tempat dimana rumus termodinamika ke-0 dirumuskan.'
      ></Gambar>
      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Listrik Statis' />
      <A2 title='Siapa yang menggunakan Listrik Statis' />
      <A2 title='Dimana Listrik Statis digunakan' />
      <A2 title='Kapan Listrik Statis digunakan' />
      <AA1 id='Konstanta' title='Konstanta' />{' '}
      <section className='overflow-x-auto '>
        <table className='w-full min-w-full border table-max'>
          <THEAD>
            <TRowwwww>
              <TH>Simbol</TH>
              <TH>Nama</TH>
              <TH>Dibaca</TH>
              <TH>Asal Kata</TH>
              <TH>Nilai</TH>
            </TRowwwww>
          </THEAD>

          <TBODY>
            <TRowwwww>
              <TData>
                <TeX>k</TeX>
              </TData>
              <TData>Konstanta Listrik Statis / Konstanta Coulomb</TData>
              <TData>k</TData>
              <TData>-</TData>
              <TData>
                <KaTeX>{String.raw`8,9 \times 10^9 \ \frac{N\cdot m^2}{C^2}`}</KaTeX>
              </TData>
            </TRowwwww>
          </TBODY>
        </table>
      </section>
      {/* variabel */}
      <AA1 id='Variabel' title='Variabel' />
      <section className='overflow-x-auto '>
        <table className='w-full min-w-full border table-max'>
          <THEAD>
            <TRowwwww>
              <TH>Simbol</TH>
              <TH>Nama</TH>
              <TH>Dibaca</TH>
              <TH>Asal Kata</TH>
              <TH>Nilai</TH>
            </TRowwwww>
          </THEAD>

          <TBODY>
            <TRowwwww>
              <TData>
                <TeX>Q</TeX>
              </TData>
              <TData>Muatan</TData>
              <TData>
                <TeX>C \ (Coulomb)</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>C</TeX>
              </TData>
              <TData>Kapasitansi</TData>
              <TData>
                <TeX>F \ (Farad)</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>v</TeX>
              </TData>
              <TData>Beda Potensial</TData>
              <TData>
                <TeX>v \ (Volt)</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>\Phi_L</TeX>
              </TData>
              <TData>Fluks Listrik</TData>
              <TData>
                <TeX>Wb \ (Webber)</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>R</TeX>
              </TData>
              <TData>Resistansi</TData>
              <TData>
                <TeX>\varOmega \ (Ohm)</TeX>
              </TData>
            </TRowwwww>
          </TBODY>
        </table>
      </section>
      {/* rumus */}
      <AA1 id='Rumus' title='Rumus' />
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <article>
          <div className={rumusTitle}>Gaya Listrik (Gaya Coulomb)</div>
          <KaTeX>{String.raw`F = k\frac{q_1\cdot q_2}{r^2}`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Medan Listrik</div>
          <KaTeX>{String.raw`F = k\frac{q}{r^2}`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Potensial Listrik</div>
          <KaTeX>{String.raw`F = k\frac{q}{r}`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Energi Potensial</div>
          <KaTeX>{String.raw`F = k\frac{q_1\cdot q_2}{r}`}</KaTeX>
        </article>
      </div>
      {/* penurunan rumus */}
      <AA1 id='PenurunanRumus' title='Penurunan Rumus' />
      <Para>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A laudantium optio earum autem
        quisquam sit inventore, distinctio asperiores! Culpa optio atque similique adipisci id,
        soluta, odio excepturi ducimus laboriosam aspernatur quam velit alias. Saepe consectetur,
        harum dolorum fugit omnis nostrum deleniti exercitationem, magnam nam voluptatem voluptates,
        laudantium consequuntur ad facilis.
      </Para>
      <AA1 id='Pembahasan' title='Pembahasan' />
      <Para>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum cupiditate
        voluptatibus, facere, sunt illum eveniet quasi fuga consequuntur harum quo magnam facilis
        eos dolores. Sint architecto dolorem ratione. Tempora cumque amet expedita praesentium qui
        quae error laudantium incidunt odit inventore unde enim molestias voluptates aut est, facere
        earum adipisci?
      </Para>
      <AA1 id='ContohSoal' title='Contoh Soal' />
      <Para>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa consequatur qui optio
        libero. Error sequi ea assumenda, minus nobis cupiditate!
      </Para>
      <br />
      <ExampleMain type='Contoh Soal Mudah'>
        <ExampleChild type='Teori Kinetik Gas'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa consequatur qui optio
          libero. Error sequi ea assumenda, minus nobis cupiditate!{' '}
        </ExampleChild>
      </ExampleMain>
    </LayoutMateri>
  );
}
