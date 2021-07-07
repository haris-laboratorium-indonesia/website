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
        <Title name='Glosarium Matematika' />
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
            </TBODY>
          </table>
        </section>
      </div>
    </Layout>
  );
}
