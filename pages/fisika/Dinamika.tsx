import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import DinamikaImage from '../../public/Fisika/DinamikaImage.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import ListDinamika from '@/components/ListFisika/ListDinamika';
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

export default function Dinamika() {
  return (
    <LayoutMateri browserTitle='Dinamika' description='Materi Dinamika'>
      <ListDinamika />
      <Gambar
        src={DinamikaImage}
        alt='Dinamika'
        caption='Gambar 1 : Gunung di Lauterbrunnen Swiss, tempat dimana rumus termodinamika ke-0 dirumuskan.'
      ></Gambar>
      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Dinamika' />
      <A2 title='Siapa yang menggunakan Dinamika' />
      <A2 title='Dimana Dinamika digunakan' />
      <A2 title='Kapan Dinamika digunakan' />
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
          <div className={rumusTitle}>Gaya Gravitasi Newton</div>
          <KaTeX>{String.raw`F = G\frac{M\cdot m}{r^2}`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Gaya Setripetal</div>
          <KaTeX>{String.raw`F = \frac{mv^2}{r^2}`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Hukum Kekekalan Momentum</div>
          <KaTeX>{String.raw`m_1v_1 + m_2v_2 = m_1v_1'+m_2v_2' `}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Momentum</div>
          <KaTeX>{String.raw`p = mv`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Hukum Newton Ke-1</div>
          <KaTeX>{String.raw`\Sigma F = 0`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Hukum Newton Ke-2</div>
          <KaTeX>{String.raw`\Sigma F = m\cdot a`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Hukum Newton Ke-3</div>
          <KaTeX>{String.raw`F_{ab} = -F_{ba}`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Usaha</div>
          <KaTeX>{String.raw`W = F\cdot s = Fs\cos \theta`}</KaTeX>
          <KaTeX>{String.raw`W + E_{K_0} = E_{K_t} \to W = E_{K_t} - E_{K_0} = \Delta E_K`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Gaya Berat</div>
          <KaTeX>{String.raw`W = m\cdot g`}</KaTeX>
        </article>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <article>
          <div className={rumusTitle}>Gaya Gravitasi Newton</div>
          <KaTeX>{String.raw`F = G\frac{M\cdot m}{r^2}`}</KaTeX>
        </article>
      </div>
      {/* penurunan rumus */}
      <AA1 id='PenurunanRumus' title='Penurunan Rumus' />
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <article>
          <div className={rumusTitle}>Hukum Kekekalan Momentum</div>
          <KaTeX>{String.raw`F_{12} = -F_{21}`}</KaTeX>
          <KaTeX>{String.raw`m_1a_1 = -m_2a_2`}</KaTeX>
          <KaTeX>{String.raw`m_1(\frac{\Delta v_1}{t}) = -m_2(\frac{\Delta v_2}{t})`}</KaTeX>
          <KaTeX>{String.raw`m_1(\Delta v_1) = -m_2(\Delta v_2)`}</KaTeX>
          <KaTeX>{String.raw`m_1(v_1' - v_1) = -m_2(v_2'-v_2)`}</KaTeX>
          <KaTeX>{String.raw`m_1v_1-m_1v_1' = -m_2v_2'+m_2v_2`}</KaTeX>
          <KaTeX>{String.raw`m_1v_1+m_2v_2 = m_1v_1'+m_2v_2'`}</KaTeX>
        </article>
        <article>
          <div className={rumusTitle}>Gaya Setripetal</div>
          <KaTeX>{String.raw`a = \frac{v_b-v_a}{t}`}</KaTeX>
          <KaTeX>{String.raw`v_b-v_a = 2v\sin (\frac{1}{2}) \theta`}</KaTeX>
          <KaTeX>{String.raw`v_b-v_a = 2v (\frac{1}{2}) \theta`}</KaTeX>
          <KaTeX>{String.raw`v_b-v_a = v\theta`}</KaTeX>
          <KaTeX>{String.raw`a = \frac{v\theta}{t}, \ \theta = \frac{s}{r}`}</KaTeX>
          <KaTeX>{String.raw`a = \frac{v\frac{s}{r}}{t} = \frac{vs}{rt}, \ s=vt `}</KaTeX>
          <KaTeX>{String.raw`a = \frac{v(vt)}{rt} = \frac{v^2t}{rt} = \frac{v^2}{r}`}</KaTeX>
          <KaTeX>{String.raw`F = ma = m(\frac{v^2}{r}) = \frac{mv^2}{r}`}</KaTeX>
          <KaTeX>{String.raw`F_s = \frac{mv^2}{r}`}</KaTeX>
        </article>
      </div>
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
