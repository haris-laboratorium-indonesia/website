import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import FluidaDinamisImage from '../../public/Fisika/FluidaDinamisImage.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import ListFluidaDinamis from '@/components/ListFisika/ListFluidaDinamis';
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

export default function FluidaDinamis() {
  return (
    <LayoutMateri browserTitle='Fluida Dinamis' description='Materi Fluida Dinamis'>
      <ListFluidaDinamis />
      <Gambar
        src={FluidaDinamisImage}
        alt='Fluida Dinamis'
        caption='Gambar 1 : Gunung di Lauterbrunnen Swiss, tempat dimana rumus termoFluidaDinamis ke-0 dirumuskan.'
      ></Gambar>
      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Fluida Dinamis' />
      <A2 title='Siapa yang menggunakan Fluida Dinamis' />
      <A2 title='Dimana Fluida Dinamis digunakan' />
      <A2 title='Kapan Fluida Dinamis digunakan' />
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
              <TData>Percepatan Gravitasi Bumi</TData>
              <TData>g</TData>
              <TData>
                <b>
                  <u>G</u>
                </b>
                ravitation
              </TData>
              <TData>
                <KaTeX>{`9,8 \\frac{m}{s^2}`}</KaTeX>
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
              <TH>Satuan</TH>
            </TRowwwww>
          </THEAD>

          <TBODY>
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
                <KaTeX>{String.raw`Pa \ /  Pascal \ / \frac{N}{m^2} `}</KaTeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>\rho</TeX>
              </TData>
              <TData>Massa Jenis</TData>
              <TData>rho</TData>
              <TData>-</TData>

              <TData>
                <KaTeX>{String.raw`\frac{kg}{m^3}`}</KaTeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>Q</TeX>
              </TData>
              <TData>Debit</TData>
              <TData>q</TData>
              <TData>-</TData>
              <TData>
                <KaTeX>{String.raw`\frac{m^3}{s}`}</KaTeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>v</TeX>
              </TData>
              <TData>Kecepatan</TData>
              <TData>ve</TData>
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
              <TData>v</TData>
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
          <div className={rumusTitle}>Persamaan Bernoulli</div>
          <KaTeX>{String.raw`P_1 + \frac{1}{2}\rho V_1^2 + \rho_1 g h_1 = P_2 + \frac{1}{2}\rho V_2^2 + \rho_2 g h_2 `}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Persamaan Kontinuitas</div>
          <KaTeX>{String.raw`v_1A_1 = v_2A_2`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Debit</div>
          <KaTeX>{String.raw`Q = \frac{V}{t}`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Toricelli (Tong Bocor)</div>
          <KaTeX>{String.raw`v = \sqrt{2gh}`}</KaTeX>
        </article>
        <article></article>
        <article></article>
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
