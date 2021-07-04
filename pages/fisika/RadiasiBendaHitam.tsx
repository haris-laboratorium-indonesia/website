import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import Nature from '../../public/nature.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import ListRadiasiBendaHitam from '@/List/ListRadiasiBendaHitam';
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
} from '@/components/Materi';

const RadiasiBendaHitam = () => {
  return (
    <LayoutMateri browserTitle='Radiasi Benda Hitam' description='Materi Radiasi Benda Hitam'>
      <ListRadiasiBendaHitam />
      <Gambar
        src={Nature}
        alt='Radiasi Benda Hitam'
        caption='Gambar 1 : Gunung di Lauterbrunnen Swiss, tempat dimana rumus termodinamika ke-0 dirumuskan.'
      ></Gambar>
      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Radiasi Benda Hitam' />
      <A2 title='Siapa yang menggunakan Radiasi Benda Hitam' />
      <A2 title='Dimana Radiasi Benda Hitam digunakan' />
      <A2 title='Kapan Radiasi Benda Hitam digunakan' />
      <AA1 id='Konstanta' title='Konstanta' />
      <table className='w-full min-w-full border table-max'>
        <THEAD>
          <TRowwwww>
            <TH>Simbol</TH>
            <TH>Nama</TH>
            <TH>Nilai</TH>
          </TRowwwww>
        </THEAD>

        <TBODY>
          <TRowwwww>
            <TData>
              <TeX>{String.raw`\lambda_{I_{max}}\cdot T`}</TeX>
            </TData>
            <TData>Konstanta Wien</TData>
            <TData>
              <KaTeX>{String.raw`2,89 \times 10^{-3} \ m\cdot K`}</KaTeX>
            </TData>
          </TRowwwww>

          <TRowwwww>
            <TData>
              <TeX>\sigma</TeX>
            </TData>

            <TData>Konstanta Steffan Boltzmann</TData>
            <TData>
              <KaTeX>{String.raw`5,67\times 10^{-8} \frac{watt}{m^k}`}</KaTeX>
            </TData>
          </TRowwwww>

          <TRowwwww>
            <TData>
              <TeX>h</TeX>
            </TData>

            <TData>Konstanta Planck</TData>
            <TData>
              <KaTeX>{String.raw`6,626\times 10^{-34} \frac{m^2kg}{s}`}</KaTeX>
            </TData>
          </TRowwwww>

          <TRowwwww>
            <TData>
              <TeX>c</TeX>
            </TData>

            <TData>Kecepatan Cahaya</TData>
            <TData>
              <KaTeX>{String.raw`3\times10^8 \frac{m}{s}`}</KaTeX>
            </TData>
          </TRowwwww>
        </TBODY>
      </table>
      {/* variabel */}
      <AA1 id='Variabel' title='Variabel' />
      <section className='mx-auto overflow-x-auto sm:gap-5 lg:px-0'>
        <table className='w-full min-w-full border table-max'>
          <THEAD>
            <TRowwwww>
              <TH>Simbol</TH>
              <TH>Nama</TH>
              <TH>Satuan</TH>
            </TRowwwww>
          </THEAD>

          <TBODY>
            <TRowwwww>
              <TData>
                <TeX>\lambda</TeX>
              </TData>
              <TData>Panjang Gelombang</TData>
              <TData>
                <TeX>m</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>m</TeX>
              </TData>
              <TData>Massa</TData>
              <TData>
                <TeX>kg</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>v</TeX>
              </TData>
              <TData>Kecepatan</TData>
              <TData>
                <TeX>{String.raw`\frac{m}{s}`}</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>E</TeX>
              </TData>
              <TData>Energi Radiasi</TData>
              <TData>
                <TeX>J \ (Joule)</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>P</TeX>
              </TData>
              <TData>Daya Radiasi</TData>
              <TData>
                <TeX>{String.raw`Watt / \frac{Joule}{s}`}</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>I</TeX>
              </TData>
              <TData>Intensitas Radiasi</TData>
              <TData>
                <TeX>{String.raw`\frac{W}{m^2}`}</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>T</TeX>
              </TData>
              <TData>Suhu</TData>
              <TData>
                <TeX>K</TeX>
              </TData>
            </TRowwwww>
          </TBODY>
        </table>
      </section>
      {/* rumus */}
      <AA1 id='Rumus' title='Rumus' />
      <KaTeX>{String.raw`\lambda = \frac{h}{p} = \frac{h}{mv}`}</KaTeX>
      <KaTeX>{String.raw`\Delta \lambda = \lambda'-\lambda = \frac{h}{m_0c}(1-cos\theta)`}</KaTeX>
      <KaTeX>{String.raw`P = \frac{E}{t}`}</KaTeX>
      <KaTeX>{String.raw`I = \frac{P}{A} = \sigma T^4`}</KaTeX>
      <KaTeX>{String.raw`E_f = h\cdot f`}</KaTeX>
      <KaTeX>{String.raw``}</KaTeX>
      <KaTeX>{String.raw``}</KaTeX>
      <KaTeX>{String.raw``}</KaTeX>
      <KaTeX>{String.raw``}</KaTeX>
      <KaTeX>{String.raw``}</KaTeX>
      <KaTeX>{String.raw``}</KaTeX>
      <KaTeX>{String.raw``}</KaTeX>
      <KaTeX>{String.raw``}</KaTeX>

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
};

export default RadiasiBendaHitam;
