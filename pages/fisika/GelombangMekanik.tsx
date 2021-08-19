import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import GelombangMekanikImage from '../../public/Fisika/GelombangMekanikImage.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import LayoutMateri from '@/components/LayoutMateri';
import { GelombangMekanikVar } from 'data/VariabelFisika';
import { GelombangMekanikRumus } from 'data/RumusFisika';
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

export default function GelombangMekanik() {
  return (
    <LayoutMateri browserTitle='Gelombang Mekanik' description='Materi Gelombang Mekanik'>
      <List branch='fisika' to='GelombangMekanik' title='Gelombang Mekanik'>
        <NavList title='Pengenalan' href='Pengenalan' />
        <NavList title='Konstanta' href='Konstanta' />
        <NavList title='Variabel' href='Variabel' />
        <NavList title='Rumus' href='Rumus' />
        <NavList title='Penurunan Rumus' href='PenurunanRumus' />
        <NavList title='Pembahasan' href='Pembahasan' />
        <NavList title='Contoh Soal' href='ContohSoal' />
      </List>

  

      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Gelombang Mekanik' />
      <A2 title='Siapa yang menggunakan Gelombang Mekanik' />
      <A2 title='Dimana Gelombang Mekanik digunakan' />
      <A2 title='Kapan Gelombang Mekanik digunakan' />

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
        </table>
      </section>

      <AA1 id='Variabel' title='Variabel' />
      <section className='overflow-x-auto '>
        <table className='w-full min-w-full border table-max'>
          <THEAD>
            <Row>
              <TH>Simbol</TH>
              <TH>Nama</TH>
              <TH>Satuan</TH>
            </Row>
          </THEAD>

          <Body>
            {GelombangMekanikVar.map(a => (
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
        {GelombangMekanikRumus.map(a => (
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
      <P>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A laudantium optio earum autem
        quisquam sit inventore, distinctio asperiores! Culpa optio atque similique adipisci id,
        soluta, odio excepturi ducimus laboriosam aspernatur quam velit alias. Saepe consectetur,
        harum dolorum fugit omnis nostrum deleniti exercitationem, magnam nam voluptatem voluptates,
        laudantium consequuntur ad facilis.
      </P>
      
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
