import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import Nature from '../../public/nature.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import ListRelativitasKhusus from '@/List/ListRelativitasKhusus';
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

const RelativitasKhusus = () => {
  return (
    <LayoutMateri browserTitle='Relativitas Khusus' description='Materi Relativitas Khusus'>
      <ListRelativitasKhusus />
      <Gambar
        src={Nature}
        alt='Relativitas Khusus'
        caption='Gambar 1 : Gunung di Lauterbrunnen Swiss, tempat dimana rumus termodinamika ke-0 dirumuskan.'
      ></Gambar>
      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Relativitas Khusus' />
      <A2 title='Siapa yang menggunakan Relativitas Khusus' />
      <A2 title='Dimana Relativitas Khusus digunakan' />
      <A2 title='Kapan Relativitas Khusus digunakan' />
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
              <TeX>c</TeX>
            </TData>

            <TData>Kecepatan Cahaya</TData>
            <TData>
              <KaTeX>{String.raw`3\times10^8 \frac{m}{s}`}</KaTeX>
            </TData>
          </TRowwwww>

          <TRowwwww>
            <TData>
              <TeX>\gamma</TeX>
            </TData>
            <TData>Konstanta Lorentz</TData>
            <TData>
              <TeX>{String.raw`\sqrt{\frac{1}{1-\frac{v^2}{c^2}}}`}</TeX>
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
                <TeX>p</TeX>
              </TData>
              <TData>Momentum Relativistik</TData>
              <TData>
                <TeX>{String.raw`\frac{kg\cdot m}{s}`}</TeX>{' '}
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>c</TeX>
              </TData>
              <TData>Kecepatan</TData>
              <TData>
                <TeX>{String.raw`\frac{m}{s}`}</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>\Delta m</TeX>
              </TData>
              <TData>Massa Relativistik</TData>
              <TData>
                <TeX>kg</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>\Delta t</TeX>
              </TData>
              <TData>Dilatasi Waktu</TData>
              <TData>
                <TeX>sekon</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>\Delta L</TeX>
              </TData>
              <TData>Konstraksi Panjang</TData>
              <TData>
                <TeX>m</TeX>
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
              <TData>Energi Relativistik</TData>
              <TData>
                <TeX>{String.raw`J \ (Joule)`}</TeX>
              </TData>
            </TRowwwww>
          </TBODY>
        </table>
      </section>
      {/* rumus */}
      <AA1 id='Rumus' title='Rumus' />

      <KaTeX>{String.raw`\gamma = \sqrt{\frac{1}{1-\frac{v^2}{c^2}}}`}</KaTeX>
      <KaTeX>{String.raw`\Delta t = \frac{\Delta t_o}{\gamma} = \Delta t_0 \sqrt{1- \frac{v^2}{c^2}}`}</KaTeX>
      <KaTeX>{String.raw`\Delta L = \frac{\Delta L_o}{\gamma} = \Delta L_0 \sqrt{1- \frac{v^2}{c^2}}`}</KaTeX>
      <KaTeX>{String.raw`m = m_0\gamma = \frac{m_0}{ \sqrt{1-\frac{v^2}{c^2}}}`}</KaTeX>
      <KaTeX>{String.raw`P = m_0v = \frac{m_0v}{\sqrt{1-\frac{v^2}{c^2}}}`}</KaTeX>
      <KaTeX>{String.raw`E = m_0c^2\gamma = \frac{m_0c^2}{\sqrt{1-\frac{v^2}{c^2}}}`}</KaTeX>
      <KaTeX>{String.raw``}</KaTeX>
      <KaTeX>{String.raw``}</KaTeX>
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

export default RelativitasKhusus;
