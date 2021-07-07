import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import RadiasiBendaHitamImage from '../../public/Fisika/RadiasiBendaHitamImage.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import ListRadiasiBendaHitam from '@/components/ListFisika/ListRadiasiBendaHitam';
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

export default function radiasiBendaHitam() {
  return (
    <LayoutMateri browserTitle='Radiasi Benda Hitam' description='Materi Radiasi Benda Hitam'>
      <ListRadiasiBendaHitam />
      <Gambar
        src={RadiasiBendaHitamImage}
        alt='Radiasi Benda Hitam'
        caption='Gambar 1 : Gunung di Lauterbrunnen Swiss, tempat dimana rumus termodinamika ke-0 dirumuskan.'
      ></Gambar>
      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Radiasi Benda Hitam' />
      <A2 title='Siapa yang menggunakan Radiasi Benda Hitam' />
      <A2 title='Dimana Radiasi Benda Hitam digunakan' />
      <A2 title='Kapan Radiasi Benda Hitam digunakan' />
      <AA1 id='Konstanta' title='Konstanta' />{' '}
      <section className='overflow-x-auto '>
        <table className='w-full min-w-full border table-max'>
          <THEAD>
            <TRowwwww>
              <TH>Simbol</TH>
              <TH>Dibaca</TH>
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
              <TData>Lamda I Max kali Temperature</TData>
              <TData>-</TData>
              <TData>
                <KaTeX>{String.raw`2,89 \times 10^{-3} \ m\cdot K`}</KaTeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>\sigma</TeX>
              </TData>
              <TData>Konstanta Steffan Boltzmann</TData>
              <TData>sigma</TData>
              <TData>-</TData>
              <TData>
                <KaTeX>{String.raw`5,67\times 10^{-8} \frac{watt}{m^k}`}</KaTeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>h</TeX>
              </TData>
              <TData>Konstanta Planck</TData>
              <TData>h</TData>
              <TData>-</TData>
              <TData>
                <KaTeX>{String.raw`6,626\times 10^{-34} \frac{m^2kg}{s}`}</KaTeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>c</TeX>
              </TData>
              <TData>Kecepatan Cahaya</TData>
              <TData>c</TData>
              <TData>-</TData>
              <TData>
                <KaTeX>{String.raw`3\times10^8 \frac{m}{s}`}</KaTeX>
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
                <TeX>\lambda</TeX>
              </TData>
              <TData>Lambda</TData>
              <TData>Panjang Gelombang</TData>
              <TData>
                <TeX>m</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>m</TeX>
              </TData>
              <TData>Mass</TData>
              <TData>Massa</TData>
              <TData>
                <TeX>kg</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>v</TeX>
              </TData>
              <TData>Velocity</TData>
              <TData>Kecepatan</TData>
              <TData>
                <TeX>{String.raw`\frac{m}{s}`}</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>E</TeX>
              </TData>
              <TData>Energy</TData>
              <TData>Energi Radiasi</TData>
              <TData>
                <TeX>J \ (Joule)</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>P</TeX>
              </TData>
              <TData>Power</TData>
              <TData>Daya Radiasi</TData>
              <TData>
                <TeX>{String.raw`Watt / \frac{Joule}{s}`}</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>I</TeX>
              </TData>
              <TData>Intensity</TData>
              <TData>Intensitas Radiasi</TData>
              <TData>
                <TeX>{String.raw`\frac{W}{m^2}`}</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>T</TeX>
              </TData>
              <TData>Temperature</TData>
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
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <article>
          <div className={rumusTitle}>Panjang Gelombang de Broglie</div>
          <KaTeX>{String.raw`\lambda = \frac{h}{p} = \frac{h}{mv}`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Effect Compton</div>
          <KaTeX>{String.raw`\Delta \lambda = \lambda'-\lambda = \frac{h}{m_0c}(1-cos\theta)`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Daya Radiasi</div>
          <KaTeX>{String.raw`P = \frac{E}{t}`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Intensitas Radiasi</div>
          <KaTeX>{String.raw`I = \frac{P}{A} = \sigma T^4`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Energi Foton</div>
          <KaTeX>{String.raw`E_f = h\cdot f`}</KaTeX>
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
