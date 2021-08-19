import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import Layout from '@/components/Layout';
import { Title, SubTitle } from '@/components/Materi';
import { GlosariumVar } from 'data/VariabelFisika';
import { GlosariumKonstanta } from 'data/KonstantaFisika';
import { AA1, TH, TData, Row, THEAD, Body, KaTeX } from '@/components/Materi';

export default function fisikaKonstanta() {
  return (
    <Layout browserTitle='Konstanta Fisika' description='Konstanta Fisika'>
      <AA1 id='Konstanta' title='Konstanta' />
      <section className='mx-auto overflow-x-auto sm:gap-5 lg:px-0'>
        <table className='w-full min-w-full border table-max'>
          <THEAD>
            <Row>
              <TH>Simbol</TH>
              <TH>Nama</TH>
              <TH>Nilai</TH>
            </Row>
          </THEAD>

          <Body>
            {GlosariumKonstanta.map(a => (
              <Row>
                <TData>
                  <KaTeX>{String.raw`${a.simbol}`}</KaTeX>
                </TData>
                <TData>{a.nama}</TData>
                <TData>
                  <KaTeX>{String.raw`${a.nilai}`}</KaTeX>
                </TData>
              </Row>
            ))}
          </Body>
        </table>
      </section>
    </Layout>
  );
}
