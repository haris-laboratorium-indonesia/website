import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import Link from 'next/link';
import KesetimbanganImage from '../../public/Fisika/KesetimbanganImage.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import ListKesetimbangan from '@/components/ListFisika/ListKesetimbangan';
import LayoutMateri from '@/components/LayoutMateri';
import { KesetimbanganRumus } from 'lib/RumusFisika';
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
  Anchor,
} from '@/components/Materi';

export default function Kesetimbangan() {
  return (
    <LayoutMateri browserTitle='Kesetimbangan' description='Materi Kesetimbangan'>
      <ListKesetimbangan />
      <Gambar
        src={KesetimbanganImage}
        alt='Kesetimbangan'
        caption='Gambar 1 : Gunung di Lauterbrunnen Swiss, tempat dimana rumus termodinamika ke-0 dirumuskan.'
      />
      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Kesetimbangan' />
      <A2 title='Siapa yang menggunakan Kesetimbangan' />
      <A2 title='Dimana Kesetimbangan digunakan' />
      <A2 title='Kapan Kesetimbangan digunakan' />
      
      <AA1 id='Konstanta' title='Konstanta' />
      <section className='overflow-x-auto '>
        <table className='w-full min-w-full border table-max'>
          <THEAD>
            <TRowwwww>
              <TH>Simbol</TH>
              <TH>Nama</TH>
              <TH>Nilai</TH>
            </TRowwwww>
          </THEAD>
        </table>
      </section>

      <AA1 id='Variabel' title='Variabel' />
      <section className='overflow-x-auto'>
        <table className='w-full min-w-full border table-max'>
          <THEAD>
            <TRowwwww>
              <TH>Simbol</TH>
              <TH>Nama</TH>
              <TH>Satuan</TH>
            </TRowwwww>
          </THEAD>
        </table>
      </section>

      <AA1 id='Rumus' title='Rumus' />
      {KesetimbanganRumus.map(a => (
        <TRowwwww>
          <TData>
            <KaTeX>{String.raw`${a.nama}`}</KaTeX>
          </TData>
          <TData>{a.nama}</TData>
          <TData>
            <KaTeX>{String.raw`${a.rumus}`}</KaTeX>
          </TData>
        </TRowwwww>
      ))}

      <AA1 id='PenurunanRumus' title='Penurunan Rumus' />
      <Para>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A laudantium optio earum autem
        quisquam sit inventore, distinctio asperiores! Culpa optio atque similique adipisci id,
        soluta, odio excepturi ducimus laboriosam aspernatur quam velit alias. Saepe consectetur,
        harum dolorum fugit omnis nostrum deleniti exercitationem, magnam nam voluptatem voluptates,
        laudantium consequuntur ad facilis. <Anchor to='/fisika' name='Fisika' />
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
