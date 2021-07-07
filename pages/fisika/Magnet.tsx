import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import MagnetImage from '../../public/Fisika/MagnetImage.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import ListMagnet from '@/components/ListFisika/ListMagnet';
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

export default function Magnet() {
  return (
    <LayoutMateri browserTitle='Magnet' description='Materi Magnet'>
      <ListMagnet />
      <Gambar
        src={MagnetImage}
        alt='Magnet'
        caption='Gambar 1 : Gunung di Lauterbrunnen Swiss, tempat dimana rumus termoMagnet ke-0 dirumuskan.'
      ></Gambar>
      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Magnet' />
      <A2 title='Siapa yang menggunakan Magnet' />
      <A2 title='Dimana Magnet digunakan' />
      <A2 title='Kapan Magnet digunakan' />
      <AA1 id='Konstanta' title='Konstanta' />
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
                <TeX>\mu_0</TeX>
              </TData>
              <TData>Permeabilitas Magnet ( ruang hampa )</TData>
              <TData>Miu 0</TData>
              <TData>-</TData>
              <TData>
                <KaTeX>{String.raw`4\pi\times10^{-7} \ \frac{N}{A^2}`}</KaTeX>
              </TData>
            </TRowwwww>
          </TBODY>
        </table>
      </section>
      {/* variabel */}
      <AA1 id='Variabel' title='Variabel' />
      <section className='mx-auto overflow-x-auto sm:gap-5 lg:px-0'>
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
                <TeX>F</TeX>
              </TData>
              <TData>Gaya Magnet</TData>
              <TData>f</TData>
              <TData>
                <b>
                  <u>F</u>
                </b>
                orce
              </TData>
              <TData>
                <TeX>N \ (Newton)</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>B</TeX>
              </TData>
              <TData>Medan Magnet</TData>
              <TData>b</TData>
              <TData>-</TData>
              <TData>
                <TeX>T \ (Tesla)</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>\mu</TeX>
              </TData>
              <TData>Permeabilitas Magnet</TData>
              <TData>myu</TData>
              <TData>-</TData>
              <TData>
                <KaTeX>{String.raw`\frac {Wb}{A\cdot m}`}</KaTeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>i</TeX>
              </TData>
              <TData>Arus Listrik</TData>
              <TData>i</TData>
              <TData>-</TData>
              <TData>
                <KaTeX>{String.raw`A \ (Ampere)`}</KaTeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>N</TeX>
              </TData>
              <TData>Banyak lilitan</TData>
              <TData>n</TData>
              <TData>-</TData>
              <TData>
                <TeX>-</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>v</TeX>
              </TData>
              <TData>Kecepatan Partikel di medan magnet</TData>
              <TData>v</TData>
              <TData>
                <b>
                  <u>V</u>
                </b>
                elocity
              </TData>
              <TData>
                <KaTeX>{String.raw`\frac{m}{s}`}</KaTeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>\ell</TeX>
              </TData>
              <TData>Panjang batang</TData>
              <TData>l</TData>
              <TData>-</TData>
              <TData>
                <TeX>m</TeX>
              </TData>
            </TRowwwww>
          </TBODY>
        </table>
      </section>
      {/* rumus */}
      <AA1 id='Rumus' title='Rumus' />
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <article>
          <div className={rumusTitle}>Medan Magnet - pada Loop</div>
          <KaTeX>{String.raw`B = \frac{\mu_0 i}{2 \pi r}`}</KaTeX>
          <KaTeX>{String.raw`B = \frac{\mu_0 i}{2 \pi r}\times N`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Medan Magnet - pada Solenoida</div>
          <KaTeX>{String.raw`B_0 = \frac{\mu_0 i}{l} \times N`}</KaTeX>
          <KaTeX>{String.raw`B_0 = \frac{1}{2} \frac{\mu_0 i}{l} \times N`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Medan Magnet - pada Toroida</div>
          <KaTeX>{String.raw`B = \frac{\mu_0 i}{2 \pi r} \times N`}</KaTeX>
          <KaTeX>{String.raw`r = \frac{r_1 + r_2}{2}`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Gaya Magnet - pada Medan Magnet</div>
          <KaTeX>{String.raw`F = qV\times B = qVB\sin \theta = \frac{mv^2}{r} `}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Gaya Magnet - pada batang di Medan Magnet </div>
          <KaTeX>{String.raw`F = i\ell \times B = i\ell B\sin \theta`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Gaya Magnet - pada dua kawat</div>
          <KaTeX>{String.raw`\frac{F_{12}}{\ell_1} = \frac{F_{21}}{\ell_2}`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Momen Kopel</div>
          <KaTeX>{String.raw`\Sigma \tau = NA_iB\sin \alpha`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Fluks Magnet</div>
          <KaTeX>{String.raw`\Phi = B\cdot A = BA\sin \theta`}</KaTeX>
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
