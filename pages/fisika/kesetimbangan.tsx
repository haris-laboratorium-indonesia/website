import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import Link from 'next/link';
import KesetimbanganImage from '../../public/Fisika/KesetimbanganImage.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import LayoutMateri from '@/components/LayoutMateri';
import { KesetimbanganRumus } from 'data/RumusFisika';
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
  Anchor,
} from '@/components/DesignSystem';

export default function Kesetimbangan() {
  return (
    <LayoutMateri browserTitle='Kesetimbangan' description='Materi Kesetimbangan'>
      <List branch='fisika' to='Kesetimbangan' title='Kesetimbangan'>
        <NavList title='Pengenalan' href='Pengenalan' />
        <NavList title='Konstanta' href='Konstanta' />
        <NavList title='Variabel' href='Variabel' />
        <NavList title='Rumus' href='Rumus' />
        <NavList title='Penurunan Rumus' href='PenurunanRumus' />
        <NavList title='Pembahasan' href='Pembahasan' />
        <NavList title='Contoh Soal' href='ContohSoal' />
      </List>

   
      
      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Kesetimbangan' />
      <A2 title='Siapa yang menggunakan Kesetimbangan' />
      <A2 title='Dimana Kesetimbangan digunakan' />
      <A2 title='Kapan Kesetimbangan digunakan' />
      
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
      <section className='overflow-x-auto'>
        <table className='w-full min-w-full border table-max'>
          <THEAD>
            <Row>
              <TH>Simbol</TH>
              <TH>Nama</TH>
              <TH>Satuan</TH>
            </Row>
          </THEAD>
        </table>
      </section>
      
      <AA1 id='Rumus' title='Rumus' />
      {KesetimbanganRumus.map(a => (
        <Row>
          <TData>
            <KaTeX>{String.raw`${a.nama}`}</KaTeX>
          </TData>
          <TData>{a.nama}</TData>
          <TData>
            <KaTeX>{String.raw`${a.rumus}`}</KaTeX>
          </TData>
        </Row>
      ))}
      
      <AA1 id='PenurunanRumus' title='Penurunan Rumus' />
      <P>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A laudantium optio earum autem
        quisquam sit inventore, distinctio asperiores! Culpa optio atque similique adipisci id,
        soluta, odio excepturi ducimus laboriosam aspernatur quam velit alias. Saepe consectetur,
        harum dolorum fugit omnis nostrum deleniti exercitationem, magnam nam voluptatem voluptates,
        laudantium consequuntur ad facilis. <Anchor to='/fisika' name='Fisika' />
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
