import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import Nature from '../../public/nature.jpg';
import ExampleMain from '@/components/ExampleMain';
import PenurunanRumus from '@/components/PenurunanRumus';
import ExampleChild from '@/components/ExampleChild';
import LayoutMateri from '@/components/LayoutMateri';
import { TurunanPenurunanRumus } from 'lib/PenurunanRumusMatematika';
import { NavListMatematika } from '@/components/List';
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

export default function Turunan() {
  return (
    <LayoutMateri browserTitle='Turunan' description='Materi Turunan'>
      <List close='text-green-500' branch='matematika' to='Turunan' title='Turunan'>
        <NavListMatematika title='Pengenalan' href='Pengenalan' />
        <NavListMatematika title='Konstanta' href='Konstanta' />
        <NavListMatematika title='Variabel' href='Variabel' />
        <NavListMatematika title='Rumus' href='Rumus' />
        <NavListMatematika title='Penurunan Rumus' href='PenurunanRumus' />
        <NavListMatematika title='Pembahasan' href='Pembahasan' />
        <NavListMatematika title='Contoh Soal' href='ContohSoal' />
      </List>

      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Turunan' />
      <A2 title='Siapa yang menggunakan Turunan' />
      <A2 title='Dimana Turunan digunakan' />
      <A2 title='Kapan Turunan digunakan' />

      <AA1 id='Konstanta' title='Konstanta' />

      <AA1 id='Variabel' title='Variabel' />

      <AA1 id='Rumus' title='Rumus' />
      <KaTeX>{String.raw``}</KaTeX>

      <AA1 id='PenurunanRumus' title='Penurunan Rumus' />
      <div className='grid grid-cols-1'>
        {TurunanPenurunanRumus.map(a => (
          <article className='mb-3 overflow-x-auto rounded-md shadow hover:shadow-md' key={a.nama}>
            <PenurunanRumus title={a.nama}>
              {typeof a.rumus === 'string' ? (
                <KaTeX>{String.raw`${a.rumus}`}</KaTeX>
              ) : (
                a.rumus.map(b => <KaTeX>{String.raw`${b.step}`}</KaTeX>)
              )}
            </PenurunanRumus>
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
