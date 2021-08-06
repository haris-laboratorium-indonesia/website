import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import Layout from '@/components/Layout';
import Title from '@/components/Title';

import {
  AA1,
  A2,
  TH,
  TData,
  Row,
  THEAD,
  Body,
  P,
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

        <div className='mb-5 -mt-5 text-center'>Konstanta dan variabel matematika.</div>

        <AA1 id='Konstanta' title='Konstanta' />

        <section className='overflow-x-auto '>
          <table className='w-full min-w-full border table-max'>
            <THEAD>
              <Row>
                <TH>Simbol</TH>
                <TH>Nama</TH>
                <TH>Dibaca</TH>
                <TH>Asal Kata</TH>
                <TH>Satuan</TH>
              </Row>
            </THEAD>
            <Body>
              <Row>
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
              </Row>
            </Body>
          </table>
        </section>
      </div>
    </Layout>
  );
}
