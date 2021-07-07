import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import Nature from '../../public/nature.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import ListTurunan from '@/components/ListMatematika/ListTurunan';
import LayoutMateri from '@/components/LayoutMateri';
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
} from '@/components/Materi';

export default function Turunan() {
  return (
    <LayoutMateri browserTitle='Turunan' description='Materi Turunan'>
      <ListTurunan />

      <Gambar
        src={Nature}
        alt='Turunan'
        caption='Gambar 1 : Gunung di Lauterbrunnen Swiss, tempat dimana rumus termodinamika ke-0 dirumuskan.'
      ></Gambar>

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
      <KaTeX>{`a^ma^n = \\underbrace{a \\cdot a \\cdot a}_{\\text{m}}\\cdot \\underbrace{a \\cdot a \\cdot a \\cdot a}_{\\text{n}} = \\underbrace{a \\cdot a \\cdot a \\cdot a \\cdot a \\cdot a \\cdot a}_{\\text{m+n}} = a^{m+n}`}</KaTeX>
      <KaTeX>{`\\frac{a^m}{a^n} = \\frac{{\\overbrace{a \\cdot a \\cdot a \\cdot a}^{\\text{m}}}}{\\underbrace{a \\cdot a \\cdot a}_{\\text{n}}} = \\frac{{\\overbrace{a \\cdot \\cancel a \\cdot \\cancel a \\cdot \\cancel a}^{\\text{m}}}}{\\underbrace{\\cancel a \\cdot \\cancel a \\cdot \\cancel a}_{\\text{n}}} = a^{m-n}`}</KaTeX>
      <KaTeX>{`(a\\cdot b)^m =  \\underbrace{a\\cdot b \\cdot a\\cdot b \\cdot a\\cdot b \\ ...}_{\\text{m}} = \\underbrace{a \\cdot a\\cdot a}_{\\text{m}} \\cdot \\underbrace{b \\cdot b\\cdot b }_{\\text{m}} = a^mb^m`}</KaTeX>
      <KaTeX>{String.raw`\frac{a^m}{a^m} = a^{m-m} = a^0 = 1`}</KaTeX>

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