import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import GelombangBunyiImage from '../../public/Fisika/GelombangBunyiImage.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import ListGelombangBunyi from '@/components/ListFisika/ListGelombangBunyi';
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

export default function GelombangBunyi() {
  return (
    <LayoutMateri browserTitle='Gelombang Bunyi' description='Materi Gelombang Bunyi'>
      <ListGelombangBunyi />
      <Gambar
        src={GelombangBunyiImage}
        alt='Gelombang Bunyi'
        caption='Gambar 1 : Gunung di Lauterbrunnen Swiss, tempat dimana rumus termodinamika ke-0 dirumuskan.'
      ></Gambar>
      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Gelombang Bunyi' />
      <A2 title='Siapa yang menggunakan Gelombang Bunyi' />
      <A2 title='Dimana Gelombang Bunyi digunakan' />
      <A2 title='Kapan Gelombang Bunyi digunakan' />
      <AA1 id='Konstanta' title='Konstanta' />
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
                <TeX>\gamma</TeX>
              </TData>
              <TData>Konstanta Laplace</TData>
              <TData>
                <TeX>-</TeX>
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
                <TeX>m</TeX>
              </TData>
              <TData>Mass Tali Dawai</TData>
              <TData>
                <TeX>kg</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>\ell</TeX>
              </TData>
              <TData>Panjang Tali Dawai</TData>
              <TData>
                <TeX>m</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>\varUpsilon</TeX>
              </TData>
              <TData>Modulus Young</TData>
              <TData>
                <TeX>-</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>k</TeX>
              </TData>
              <TData>Modulus Bulk</TData>
              <TData>
                <TeX>-</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>M</TeX>
              </TData>
              <TData>Massa Molar</TData>
              <TData>
                <TeX>{String.raw`\frac{kg}{mol}`}</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>F</TeX>
              </TData>
              <TData>Gaya</TData>
              <TData>
                <TeX>N \ (Newton)</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>\rho</TeX>
              </TData>
              <TData>Massa Jenis</TData>
              <TData>
                <TeX>{String.raw`\frac{kg}{m^3}`}</TeX>
              </TData>
            </TRowwwww>
          </TBODY>
        </table>
      </section>
      {/* rumus */}
      <AA1 id='Rumus' title='Rumus' />
      <div className={`${rumusTitle} text-pink-600`}>Cepat Rambat Bergantung Medium</div>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <article>
          <div className={rumusTitle}>Dawai</div>
          <KaTeX>{String.raw`v = \sqrt{\frac{F}{\mu}} \to \mu = \frac{m}{\ell}`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Zat Padat</div>
          <KaTeX>{String.raw`v = \sqrt{\frac{\varUpsilon}{\rho}} \to \varUpsilon = \frac{\sigma}{\varepsilon} = Modulus \ Young`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Zat Cair</div>
          <KaTeX>{String.raw`v = \sqrt{\frac{k}{\rho}} \to k = -V \frac{dP}{dV} = Modulus \ Bulk`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Gas</div>
          <KaTeX>{String.raw`v = \sqrt{\frac{\gamma P}{\rho}} = \sqrt{\frac{\gamma RT}{M}} \to \gamma = Konstanta \ Laplace, \ M = massa  \ molar`}</KaTeX>
        </article>
      </div>

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
