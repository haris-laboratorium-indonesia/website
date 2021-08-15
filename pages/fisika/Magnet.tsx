import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import MagnetImage from '../../public/Fisika/MagnetImage.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import LayoutMateri from '@/components/LayoutMateri';
import { MagnetVar } from 'data/VariabelFisika';
import { MagnetRumus } from 'data/RumusFisika';
import { NavListFisika } from '@/components/List';
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

export default function Magnet() {
  return (
    <LayoutMateri browserTitle='Magnet' description='Materi Magnet'>
      <List close='text-orange-400' branch='fisika' to='Magnet' title='Magnet'>
        <NavListFisika title='Pengenalan' href='Pengenalan' />
        <NavListFisika title='Konstanta' href='Konstanta' />
        <NavListFisika title='Variabel' href='Variabel' />
        <NavListFisika title='Rumus' href='Rumus' />
        <NavListFisika title='Penurunan Rumus' href='PenurunanRumus' />
        <NavListFisika title='Pembahasan' href='Pembahasan' />
        <NavListFisika title='Contoh Soal' href='ContohSoal' />
      </List>
      
      <Gambar
        src={MagnetImage}
        alt='Magnet'
        caption='Gambar 1 : Gunung di Lauterbrunnen Swiss, tempat dimana rumus termoMagnet ke-0 dirumuskan.'
      />
      
      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Magnet' />
      <A2 title='Siapa yang menggunakan Magnet' />
      <A2 title='Dimana Magnet digunakan' />
      <A2 title='Kapan Magnet digunakan' />
      
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
                <TeX>\mu_0</TeX>
              </TData>
              <TData>Permeabilitas Magnet ( ruang hampa )</TData>
              <TData>
                <KaTeX>{String.raw`4\pi\times10^{-7} \ \frac{N}{A^2}`}</KaTeX>
              </TData>
            </Row>
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
            {MagnetVar.map(a => (
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
        {MagnetRumus.map(a => (
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
