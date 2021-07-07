import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import OptikImage from '../../public/Fisika/OptikImage.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import ListOptik from '@/components/ListFisika/ListOptik';
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

export default function Optik() {
  return (
    <LayoutMateri browserTitle='Optik' description='Materi Optik'>
      <ListOptik />
      <Gambar
        src={OptikImage}
        alt='Optik'
        caption='Gambar 1 : Gunung di Lauterbrunnen Swiss, tempat dimana rumus termoOptik ke-0 dirumuskan.'
      ></Gambar>
      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Optik' />
      <A2 title='Siapa yang menggunakan Optik' />
      <A2 title='Dimana Optik digunakan' />
      <A2 title='Kapan Optik digunakan' />
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
        </table>
      </section>
      {/* variabel */}
      <AA1 id='Variabel' title='Variabel' />
      <section className='overflow-x-auto'>
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
          <div className={rumusTitle}>Rumus Umum</div>
          <KaTeX>{String.raw`\frac{1}{s} + \frac{1}{s'} = \frac{1}{f}`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Kekuatan / Daya Lensa</div>
          <KaTeX>{String.raw`P = \frac{1}{f}`}</KaTeX>
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
