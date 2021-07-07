import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import GelombangMekanikImage from '../../public/Fisika/GelombangMekanikImage.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import ListGelombangMekanik from '@/components/ListFisika/ListGelombangMekanik';
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

export default function GelombangMekanik() {
  return (
    <LayoutMateri browserTitle='Gelombang Mekanik' description='Materi Gelombang Mekanik'>
      <ListGelombangMekanik />
      <Gambar
        src={GelombangMekanikImage}
        alt='Gelombang Mekanik'
        caption='Gambar 1 : Gunung di Lauterbrunnen Swiss, tempat dimana rumus termodinamika ke-0 dirumuskan.'
      ></Gambar>
      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Gelombang Mekanik' />
      <A2 title='Siapa yang menggunakan Gelombang Mekanik' />
      <A2 title='Dimana Gelombang Mekanik digunakan' />
      <A2 title='Kapan Gelombang Mekanik digunakan' />
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
              <TH>Satuan</TH>
            </TRowwwww>
          </THEAD>

          <TBODY>
            <TRowwwww>
              <TData>
                <TeX>\varphi</TeX>
              </TData>
              <TData>Beda Fase Gelombang</TData>
              <TData>var phi</TData>
              <TData>-</TData>
              <TData>-</TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>\theta</TeX>
              </TData>
              <TData>Beda Sudut Fase Gelombang</TData>
              <TData>teta</TData>
              <TData>-</TData>
              <TData>
                <TeX>\degree</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>A</TeX>
              </TData>
              <TData>Amplitudo Gelombang</TData>
              <TData>a</TData>
              <TData>
                <b>
                  <u>A</u>
                </b>
                mplitude
              </TData>
              <TData>
                <TeX>m</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>y</TeX>
              </TData>
              <TData>Simpangan Gelombang</TData>
              <TData>y</TData>
              <TData>-</TData>
              <TData>
                <TeX>m</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>\omega</TeX>
              </TData>
              <TData>Kecepatan Sudut</TData>
              <TData>omega</TData>
              <TData>-</TData>
              <TData>
                <KaTeX>{String.raw`\frac {rad}{s}`}</KaTeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>t</TeX>
              </TData>
              <TData>Lamanya gelombang bergetar</TData>
              <TData>t</TData>
              <TData>
                <b>
                  <u>T</u>
                </b>
                ime
              </TData>
              <TData>
                <TeX>sekon</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>T</TeX>
              </TData>
              <TData>Periode Gelombang</TData>
              <TData>t</TData>
              <TData>
                <b>
                  <u>T</u>
                </b>
                ime
              </TData>
              <TData>
                <TeX>sekon</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>x</TeX>
              </TData>
              <TData>Jarak ke sumber gelombang/getaran</TData>
              <TData>x</TData>
              <TData>-</TData>
              <TData>
                <TeX>m</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>k</TeX>
              </TData>
              <TData>Bilangan gelombang</TData>
              <TData>k</TData>
              <TData>-</TData>
              <TData>
                <TeX>-</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>\lambda</TeX>
              </TData>
              <TData>Panjang gelombang</TData>
              <TData>lambda</TData>
              <TData>-</TData>
              <TData>
                <TeX>m</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>f</TeX>
              </TData>
              <TData>Frekuensi gelombang</TData>
              <TData>f</TData>
              <TData>
                <b>
                  <u>F</u>
                </b>
                requency
              </TData>
              <TData>
                <KaTeX>{String.raw`\frac{1}{s}`}</KaTeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>v</TeX>
              </TData>
              <TData>Kecepatan gelombang</TData>
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
          </TBODY>
        </table>
      </section>
      {/* rumus */}
      <AA1 id='Rumus' title='Rumus' />
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <article>
          <div className={rumusTitle}>Frekuensi Sudut</div>
          <KaTeX>{String.raw`\omega = 2\pi f `}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Sudut Fase</div>
          <KaTeX>{String.raw`\theta = \omega t - kx`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Perbedaan Sudut Fase</div>
          <KaTeX>{String.raw`\psi = \frac{\theta}{2\pi}`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Persamaan Gelombang</div>
          <KaTeX>{String.raw`y = A\sin(\omega t - kx)`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Gelombang Stasioner - Ujung Bebas</div>
          <KaTeX>{String.raw`y = 2A\cos (kx)\sin(\omega t)`}</KaTeX>
          <KaTeX>{String.raw`A_p = 2A\cos (kx)`}</KaTeX>
          <KaTeX>{String.raw`simpul \to \frac{(2n+1)\lambda_n}{4}, \ n = 0,1,2,3,...`}</KaTeX>
          <KaTeX>{String.raw`perut \to \frac{\lambda_n}{4},\ n = 0,1,2,3,... `}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Gelombang Stasioner - Ujung Terikat</div>
          <KaTeX>{String.raw`y = 2A\sin(kx)\cos(\omega t)`}</KaTeX>
          <KaTeX>{String.raw`A_p = 2A\sin(kx)`}</KaTeX>
          <KaTeX>{String.raw`simpul \to \frac{\lambda_n}{4}`}</KaTeX>
          <KaTeX>{String.raw`perut \to \frac{(2n+1)\lambda_n}{4}`}</KaTeX>
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
