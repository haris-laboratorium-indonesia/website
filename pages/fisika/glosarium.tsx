import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import { GlosariumVar } from 'lib/VariabelFisika';
import { GlosariumKonstanta } from 'lib/KonstantaFisika';
import { AA1, TH, TData, Row, THEAD, Body, KaTeX } from '@/components/Materi';

export default function glosarium() {
  return (
    <Layout browserTitle='Glosarium Fisika' description='Glosarium Fisika'>
      <div className='max-w-4xl mx-auto'>
        <Title name='Glosarium Fisika' />

        <div className='mb-5 -mt-5 text-center'>
          Kumpulan konstanta dan variabel fisika. Metode ilmiah.
        </div>

        <AA1 id='Konstanta' title='Konstanta' />

        <section className='mx-auto overflow-x-auto'>
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

        <AA1 id='Variabel' title='Variabel' />
        <section className='mx-auto overflow-x-auto sm:gap-5 lg:px-0'>
          <table className='w-full min-w-full border table-max'>
            <THEAD>
              <Row>
                <TH>Simbol</TH>
                <TH>Nama</TH>
                <TH>Satuan</TH>
              </Row>
            </THEAD>
            <Body>
              {GlosariumVar.map(a => (
                <Row>
                  <TData>
                    <KaTeX>{String.raw`${a.simbol}`}</KaTeX>
                  </TData>
                  <TData>{a.nama}</TData>
                  <TData>
                    <KaTeX>{String.raw`${a.satuan}`}</KaTeX>
                  </TData>
                </Row>
              ))}
            </Body>
          </table>
        </section>

        <AA1 id='Sistem' title='Sistem Satuan Internasional' />
        <section className='mx-auto overflow-x-auto sm:gap-5 lg:px-0'>
          <table className='w-full min-w-full border table-max'>
            <THEAD>
              <Row>
                <TH>Nama Satuan</TH>
                <TH>Simbol Satuan</TH>
                <TH>Simbol Dimensi</TH>
                <TH>Nama Besaran</TH>
              </Row>
            </THEAD>
            <Body>
              <Row>
                <TData>detik</TData>
                <TData>s</TData>
                <TData>T</TData>
                <TData>waktu</TData>
              </Row>
              <Row>
                <TData>meter</TData>
                <TData>m</TData>
                <TData>L</TData>
                <TData>panjang</TData>
              </Row>
              <Row>
                <TData>kilogram</TData>
                <TData>kg</TData>
                <TData>M</TData>
                <TData>massa</TData>
              </Row>
              <Row>
                <TData>ampere</TData>
                <TData>A</TData>
                <TData>I</TData>
                <TData>arus listrik</TData>
              </Row>
              <Row>
                <TData>kelvin</TData>
                <TData>K</TData>
                <TData>
                  <KaTeX>{String.raw`\Theta`}</KaTeX>
                </TData>
                <TData>suhu termodinamika</TData>
              </Row>
              <Row>
                <TData>mol</TData>
                <TData>mol</TData>
                <TData>N</TData>
                <TData>jumlah zat</TData>
              </Row>
              <Row>
                <TData>kandela</TData>
                <TData>cd</TData>
                <TData>J</TData>
                <TData>intensitas cahaya</TData>
              </Row>
            </Body>
          </table>
        </section>
      </div>
    </Layout>
  );
}
