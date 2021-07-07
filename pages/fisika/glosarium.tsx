import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import FluidaDinamisImage from '../../public/Fisika/FluidaDinamisImage.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import ListFluidaDinamis from '@/components/ListFisika/ListFluidaDinamis';
import Layout from '@/components/Layout';
import Title from '@/components/Title';

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

export default function glosarium() {
  return (
    <Layout browserTitle='Glosarium Fisika' description='Glosarium Fisika'>
      <div className='max-w-4xl mx-auto'>
        <Title name='Glosarium Fisika' />

        <div className='mb-5 -mt-5'>Konstanta dan variabel fisika.</div>
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

              <TRowwwww>
                <TData>
                  <TeX>\mu_0</TeX>
                </TData>
                <TData>Permeabilitas Magnet ( ruang hampa )</TData>
                <TData>Myu nol</TData>
                <TData>-</TData>
                <TData>
                  <KaTeX>{String.raw`4\pi\times10^{-7} \ \frac{N}{A^2}`}</KaTeX>
                </TData>
              </TRowwwww>

              <TRowwwww>
                <TData>
                  <TeX>\varepsilon_0</TeX>
                </TData>
                <TData>Permitivitas Listrik ( ruang hampa )</TData>
                <TData>Epsilon nol</TData>
                <TData>-</TData>
                <TData>
                  <KaTeX>{String.raw`8.854 \times10^{-12} \ \frac{F}{m}`}</KaTeX>
                </TData>
              </TRowwwww>

              <TRowwwww>
                <TData>
                  <TeX>R</TeX>
                </TData>
                <TData>Konstanta Gas Ideal</TData>
                <TData>r</TData>
                <TData>-</TData>
                <TData>
                  <KaTeX>{String.raw`8,3145 \ \frac{J\cdot mol}{K}`}</KaTeX>
                </TData>
              </TRowwwww>

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
                <TData>Sigma</TData>
                <TData>-</TData>
                <TData>
                  <KaTeX>{String.raw`5,67\times 10^{-8} \ \frac{watt}{m^2K^4}`}</KaTeX>
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
                  <KaTeX>{String.raw`6,626\times 10^{-34} \ \frac{m^2kg}{s}`}</KaTeX>
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
                  <KaTeX>{String.raw`3\times10^8 \ \frac{m}{s}`}</KaTeX>
                </TData>
              </TRowwwww>

              <TRowwwww>
                <TData>
                  <TeX>k</TeX>
                </TData>
                <TData>Konstanta Listrik Statis / Konstanta Coulomb</TData>
                <TData>k</TData>
                <TData>-</TData>
                <TData>
                  <KaTeX>{String.raw`8,9 \times 10^9 \ \frac{N\cdot m^2}{C^2}`}</KaTeX>
                </TData>
              </TRowwwww>
            </TBODY>
          </table>
        </section>
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
            </TBODY>
          </table>
        </section>
      </div>
    </Layout>
  );
}
