import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import DinamikaImage from '../../public/Fisika/DinamikaImage.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import LayoutMateri from '@/components/LayoutMateri';
import { DinamikaVar } from 'data/VariabelFisika';
import { DinamikaRumus } from 'data/RumusFisika';
import { DinamikaPenurunanRumus } from 'data/PenurunanRumusFisika';
import { NavList } from '@/components/List';
import List from '@/components/List';
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

export default function Dinamika() {
  return (
    <LayoutMateri browserTitle='Dinamika' description='Materi Dinamika'>
      <List branch='fisika' to='Dinamika' title='Dinamika'>
        <NavList title='Pengenalan' href='Pengenalan' />
        <NavList title='Konstanta' href='Konstanta' />
        <NavList title='Variabel' href='Variabel' />
        <NavList title='Rumus' href='Rumus' />
        <NavList title='Penurunan Rumus' href='PenurunanRumus' />
        <NavList title='Pembahasan' href='Pembahasan' />
        <NavList title='Contoh Soal' href='ContohSoal' />
      </List>

      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Dinamika' />
      <A2 title='Siapa yang menggunakan Dinamika' />
      <A2 title='Dimana Dinamika digunakan' />
      <A2 title='Kapan Dinamika digunakan' />
      <AA1 id='Konstanta' title='Konstanta' />
      <section className='overflow-x-auto '>
        <table className='w-full min-w-full border table-max'>
          <THEAD>
            <Row>
              <TH>Simbol</TH>
              <TH>Nama</TH>
              <TH>Nilai</TH>
            </Row>
          </THEAD>

          <Body>
            <Row>
              <TData>
                <TeX>k</TeX>
              </TData>
              <TData>Konstanta Boltzmann</TData>
              <TData>
                <KaTeX>{`1,380 \\times 10^{-23} \\frac{J}{K}`}</KaTeX>
              </TData>
            </Row>

            <Row>
              <TData>
                <TeX>R</TeX>
              </TData>

              <TData>Konstanta Gas Ideal</TData>
              <TData>
                <KaTeX>{`8,3145 \\enspace \\frac{J\\cdot mol}{K}`}</KaTeX>
              </TData>
            </Row>
          </Body>
        </table>
      </section>
      <AA1 id='Variabel' title='Variabel' />
      <section className='overflow-x-auto'>
        <table className='w-full min-w-full border border-gray-400 table-max'>
          <THEAD>
            <Row>
              <TH>Simbol</TH>
              <TH>Nama</TH>
              <TH>Nilai</TH>
            </Row>
          </THEAD>

          <Body>
            {DinamikaVar.map(a => (
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
      <AA1 id='Rumus' title='Rumus' />
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        {DinamikaRumus.map(a => (
          <article>
            <div className={rumusTitle}>{a.nama}</div>
            {typeof a.rumus === 'string' ? (
              <KaTeX>{String.raw`${a.rumus}`}</KaTeX>
            ) : (
              a.rumus.map(b => <KaTeX>{String.raw`${b.rumus}`}</KaTeX>)
            )}
          </article>
        ))}
      </div>
      <AA1 id='PenurunanRumus' title='Penurunan Rumus' />
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        {DinamikaPenurunanRumus.map(a => (
          <article>
            <div className={rumusTitle}>{a.nama}</div>
            {typeof a.rumus === 'string' ? (
              <KaTeX>{String.raw`${a.rumus}`}</KaTeX>
            ) : (
              a.rumus.map(b => <KaTeX>{String.raw`${b.rumus}`}</KaTeX>)
            )}
          </article>
        ))}
      </div>
      <AA1 id='Pembahasan' title='Pembahasan' />
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum cupiditate
        voluptatibus, facere, sunt illum eveniet quasi fuga consequuntur harum quo magnam facilis
        eos dolores. Sint architecto dolorem ratione. Tempora cumque amet expedita praesentium qui
        quae error laudantium incidunt odit inventore unde enim molestias voluptates aut est, facere
        earum adipisci?
      </P>
      <AA1 id='ContohSoal' title='Contoh Soal' />
      <P>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa consequatur qui optio
        libero. Error sequi ea assumenda, minus nobis cupiditate!
      </P>
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
