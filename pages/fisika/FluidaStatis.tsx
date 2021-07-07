import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import FluidaStatisImage from '../../public/Fisika/FluidaStatisImage.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import ListFluidaStatis from '@/components/ListFisika/ListFluidaStatis';
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

export default function FluidaStatis() {
  return (
    <LayoutMateri browserTitle='Fluida Statis' description='Materi Fluida Statis'>
      <ListFluidaStatis />
      <Gambar
        src={FluidaStatisImage}
        alt='Fluida Statis'
        caption='Gambar 1 : Gunung di Lauterbrunnen Swiss, tempat dimana rumus termoFluidaStatis ke-0 dirumuskan.'
      ></Gambar>
      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Fluida Statis' />
      <A2 title='Siapa yang menggunakan Fluida Statis' />
      <A2 title='Dimana Fluida Statis digunakan' />
      <A2 title='Kapan Fluida Statis digunakan' />
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
                <TeX>g</TeX>
              </TData>
              <TData>Percepatan Gravitasi</TData>
              <TData>g</TData>
              <TData>
                <b>
                  <u>G</u>
                </b>
                ravitataion
              </TData>

              <TData>
                <KaTeX>{String.raw`9,8 \frac{m}{s^2}`}</KaTeX>
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
                <TeX>F</TeX>
              </TData>
              <TData>Gaya</TData>
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
                <TeX>F_A</TeX>
              </TData>
              <TData>Gaya Archimedes</TData>
              <TData>f a</TData>
              <TData>
                <b>
                  <u>F</u>
                </b>
                orce,{' '}
                <b>
                  <u>A</u>
                </b>
                rchimedes
              </TData>

              <TData>
                <TeX>N \ (Newton)</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>W</TeX>
              </TData>
              <TData>Gaya Berat</TData>
              <TData>w</TData>

              <TData>
                <b>
                  <u>W</u>
                </b>
                eight
              </TData>
              <TData>
                <TeX>{String.raw`N \ (Newton)`}</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>P</TeX>
              </TData>
              <TData>Tekanan</TData>
              <TData>p</TData>
              <TData>
                <b>
                  <u>P</u>
                </b>
                ressure
              </TData>
              <TData>
                <TeX>{String.raw`Pa \ / Pascal \ / \frac{N}{m^2}`}</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>P_h</TeX>
              </TData>
              <TData>Tekanan Hidrostatis</TData>
              <TData>p h</TData>

              <TData>
                <b>
                  <u>P</u>
                </b>
                ressure,{' '}
                <b>
                  <u>H</u>
                </b>
                idrostatic
              </TData>
              <TData>
                <TeX>{String.raw`Pa \ / Pascal \ / \frac{N}{m^2}`}</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>P_u</TeX>
              </TData>
              <TData>Tekanan Udara</TData>
              <TData>p u</TData>
              <TData>
                <b>
                  <u>P</u>
                </b>
                ressure
              </TData>
              <TData>
                <TeX>{String.raw`Pa \ / Pascal \ / \frac{N}{m^2}`}</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>h</TeX>
              </TData>
              <TData>Ketinggian</TData>
              <TData>h</TData>

              <TData>
                <b>
                  <u>H</u>
                </b>
                eight
              </TData>
              <TData>
                <TeX>m</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>A</TeX>
              </TData>
              <TData>Luas</TData>
              <TData>a</TData>
              <TData>
                <b>
                  <u>A</u>
                </b>
                rea
              </TData>

              <TData>
                <TeX>m^2</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>V</TeX>
              </TData>
              <TData>Volume</TData>
              <TData>V</TData>

              <TData>
                <b>
                  <u>V</u>
                </b>
                olume
              </TData>
              <TData>
                <TeX>m^3</TeX>
              </TData>
            </TRowwwww>
          </TBODY>
        </table>
      </section>
      {/* rumus */}
      <AA1 id='Rumus' title='Rumus' />
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <article>
          <div className={rumusTitle}>Hukum Pascal</div>
          <KaTeX>{String.raw`P_1 = P_2`}</KaTeX>
          <KaTeX>{String.raw`\frac{F_1}{A_1} = \frac{F_2}{A_2}`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Tekanan Hidrostatis</div>
          <KaTeX>{String.raw`P_h = \rho g h`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Hukum Archimedes</div>
          <KaTeX>{String.raw`F_A  = \rho g V`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Hukum Archimedes - Mengapung</div>
          <KaTeX>{String.raw`F_A  > W`}</KaTeX>
          <KaTeX>{String.raw`m_{fluida}g > m_{benda}g`}</KaTeX>
          <KaTeX>{String.raw`\rho_{fluida}V > \rho_{benda}V_{benda(tercelup)}`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Hukum Archimedes - Melayang</div>
          <KaTeX>{String.raw`F_A  = W`}</KaTeX>
          <KaTeX>{String.raw`m_{fluida}g = m_{benda}g`}</KaTeX>
          <KaTeX>{String.raw`\rho_{fluida}V = \rho_{benda}V_{benda(tercelup)}`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Hukum Archimedes - Tenggelam</div>
          <KaTeX>{String.raw`F_A  < W`}</KaTeX>
          <KaTeX>{String.raw`m_{fluida}g < m_{benda}g`}</KaTeX>
          <KaTeX>{String.raw`\rho_{fluida}V < \rho_{benda}V_{benda(tercelup)}`}</KaTeX>
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
