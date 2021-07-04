import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import Nature from '../../public/nature.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import ListListrikDinamis from '@/List/ListListrikDinamis';
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

const ListrikDinamis = () => {
  return (
    <LayoutMateri browserTitle='Listrik Dinamis' description='Materi Listrik Dinamis'>
      <ListListrikDinamis />
      <Gambar
        src={Nature}
        alt='Listrik Dinamis'
        caption='Gambar 1 : Gunung di Lauterbrunnen Swiss, tempat dimana rumus termodinamika ke-0 dirumuskan.'
      ></Gambar>
      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Listrik Dinamis' />
      <A2 title='Siapa yang menggunakan Listrik Dinamis' />
      <A2 title='Dimana Listrik Dinamis digunakan' />
      <A2 title='Kapan Listrik Dinamis digunakan' />
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
              <TeX>k</TeX>
            </TData>
            <TData>Konstanta Boltzmann</TData>
            <TData>
              <KaTeX>{`1,380 \\times 10^{-23} \\frac{J}{K}`}</KaTeX>
            </TData>
          </TRowwwww>

          <TRowwwww>
            <TData>
              <TeX>R</TeX>
            </TData>

            <TData>Konstanta Gas Ideal</TData>
            <TData>
              <KaTeX>{`8,3145 \\enspace \\frac{J\\cdot mol}{K}`}</KaTeX>
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
      <KaTeX>{String.raw`R = \frac{\rho\ell}{A} = \frac{V}{I} `}</KaTeX>
      <KaTeX>{String.raw`\rho_t = \rho_o(1+\alpha\Delta T)`}</KaTeX>
      <KaTeX>{String.raw`R_t = R_o(1+\alpha\Delta T)`}</KaTeX>
      <KaTeX>{String.raw`V = E\cdot d`}</KaTeX>
      <KaTeX>{String.raw`Q = c \cdot V`}</KaTeX>
      <KaTeX>{String.raw`W = \frac{1}{2}\frac{Q^2}{C} = \frac{Q}{V}`}</KaTeX>
      <KaTeX>{String.raw`\frac{V_p}{V_s} = \frac{N_p}{N_s} = \frac{I_p}{I_s}`}</KaTeX>
      <KaTeX>{String.raw`P_p = P_s + P_{Loss}`}</KaTeX>
      <KaTeX>{String.raw`\eta = \frac{P_s}{P_p}`}</KaTeX>
      <KaTeX>{String.raw`W = \frac{1}{2}LI^2`}</KaTeX>
      <KaTeX>{String.raw`\varepsilon_i = -N\frac{\Delta\phi}{\Delta T}`}</KaTeX>
      <KaTeX>{String.raw`W = QV`}</KaTeX>
      <KaTeX>{String.raw`P = \frac{W}{t} = \frac{QV}{t} = VI`}</KaTeX>
      <KaTeX>{String.raw`\Phi_L = E\cdot A = EA\cos \theta`}</KaTeX>
      <KaTeX>{String.raw`v = \frac{E_p}{q}`}</KaTeX>
      <KaTeX>{String.raw`E_p =  qv = q\Delta v = q(v_t - v_0)`}</KaTeX>
      <KaTeX>{String.raw`W_{listrik} = \Delta E_k = -\Delta E_p = -q(v_2 - v_1) `}</KaTeX>
      
      
      
      
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

export default ListrikDinamis;
