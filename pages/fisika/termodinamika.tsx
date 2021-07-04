import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import Nature from '../../public/nature.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import ListTermodinamika from '@/List/ListTermodinamika';
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

const termodinamika = () => {
  return (
    <LayoutMateri browserTitle='Termodinamika' description='Materi Termodinamika'>
      <ListTermodinamika title='Termodinamika' materi='/fisika' page='termodinamika' />
      <Gambar
        src={Nature}
        alt='Termodinamika'
        caption='Gambar 1 : Gunung di Lauterbrunnen Swiss, tempat dimana rumus termodinamika ke-0 dirumuskan.'
      ></Gambar>
      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Termodinamika' />
      <Para>
        <em>Termo</em> = Panas. <em>Dinamika</em> = bergerak. Termodinamika adalah ilmu yang
        mempelajari panas yang bergerak. Panas adalah suhu, suhu memiliki energi, suhu yang bergerak
        dinamakan kalor. Semua hal di dunia ini memiliki panas, bahkan suhu <TeX>-10\degree</TeX>
        yang biasa manusia rasakan sebagai sesuatu yang dingin pada dasarnya adalah panas, bahkan
        dalam fisika sebenarnya tidak ada yang namanya dingin, suhu badan manusia rata-rata adalah
        <TeX>30\degree s.d \ 37\degree</TeX>, itu untuk suhu badan yang sehat, suhu badan di bawah
        itu maka tubuh akan merasakannya sebagai dingin, dan suhu di atas itu akan dianggap sebagai
        sesuatu yang panas.
      </Para>
      <Para>
        Namun bagi hewan lain yang tinggal di bawah laut yang suhunya bisa mencapai
        <TeX>0\degree</TeX> mereka nyaman dengan suhu tersebut, sehingga persepsi dingin yang
        manusia rasakan pada suhu itu tidak mereka anggap sebagai sesuatu yang dingin bagi mereka,
        melainkan suhu normal. <KaTeX>{`P_h = \\rho g h = \\frac{A}{B}`}</KaTeX>
      </Para>
      <A2 title='Siapa yang menggunakan Termodinamika' />
      <Para>
        Pada dasarnya dunia ini ada karena panas matahari, panas matahati adalah objek dari ilmu
        termodinamika juga. Semua hal di dunia ini yang bergerak baik secara mikroskopik maupun
        makroskopik memiliki properti termodinamika.
      </Para>
      <Para>
        Pekerjaan yang mengandung ilmu termodinamika secara khusus biasanya terknik perminyakan,
        pemadam kebakaran, koki, dan apapun yang berhubungan dengan api. Namun secara umum, karena
        definisi termodinamika adalah sebuah panas yang bergerak, maka semua yang ada di dunia ini
        adalah objek termodinamika, bahkan kuli bangunan yang sedang mengaduk semen juga sedang
        melakukan ilmu termodinamika, panas tubuh yang mereka hasilkan setelah mengankat semen lalu
        jika kita mendekatinya maka panas tubuh mereka kan terasa pada tubuh kita karena ada hukum
        di termodinamika bahwa benda yang suhunya lebih tinggi, suhunya akan pindah ke benda yang
        suhunya lebih rendah.
      </Para>
      <A2 title='Dimana Termodinamika digunakan' />
      <Para>Semua hal di dunia menggunakan prinsip termodinamika.</Para>
      <A2 title='Kapan Termodinamika digunakan' />
      <Para>Selama matahari masih menyinari bumi.</Para>
      <AA1 id='Konstanta' title='Konstanta' />
      <table className='w-full min-w-full border table-max'>
        <THEAD>
          <TRowwwww>
            <TH>Simbol</TH>
            <TH>Nama</TH>
            <TH>Nilai</TH>
          </TRowwwww>
        </THEAD>

        <TBODY>
          <TRowwwww>
            <TData>
              <TeX>k</TeX>
            </TData>
            <TData>Konstanta Boltzmann</TData>
            <TData>
              <KaTeX>{`1,380 \\times 10^{-23} \\frac{J}{K}`}</KaTeX>
            </TData>
          </TRowwwww>

          <TRowwwww>
            <TData>
              <TeX>R</TeX>
            </TData>

            <TData>Konstanta Gas Ideal</TData>
            <TData>
              <KaTeX>{`8,3145 \\enspace \\frac{J\\cdot mol}{K}`}</KaTeX>
            </TData>
          </TRowwwww>
        </TBODY>
      </table>
      {/* variabel */}
      <AA1 id='Variabel' title='Variabel' />
      <section className='mx-auto overflow-x-auto sm:gap-5 lg:px-0'>
        <table className='w-full min-w-full border table-max'>
          <THEAD>
            <TRowwwww>
              <TH>Simbol</TH>
              <TH>Nama</TH>
              <TH>Satuan</TH>
            </TRowwwww>
          </THEAD>

          <TBODY>
            <TRowwwww>
              <TData>
                <TeX>P</TeX>
              </TData>
              <TData>Tekanan</TData>
              <TData>
                <TeX>Pascal/Pa</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>V</TeX>
              </TData>
              <TData>Volume</TData>
              <TData>
                <TeX>m^3</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>n</TeX>
              </TData>
              <TData>Bayak molekul</TData>
              <TData>
                <TeX>-</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>T</TeX>
              </TData>
              <TData>Suhu/Temperatur</TData>
              <TData>
                <TeX>Kelvin/K</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>Q_h</TeX>
              </TData>
              <TData>Kalor masuk (Hot)</TData>
              <TData>
                <TeX>Joule / J</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>Q_c</TeX>
              </TData>
              <TData>Kalor keluar (Cold)</TData>
              <TData>
                <TeX>Joule / J</TeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>\eta</TeX>
              </TData>
              <TData>Efisiensi</TData>
              <TData>
                <TeX>\%</TeX>
              </TData>
            </TRowwwww>
          </TBODY>
        </table>
      </section>
      {/* rumus */}
      <AA1 id='Rumus' title='Rumus' />
      <div className='grid grid-cols-2 gap-5 sm:grid-cols-4'>
        <KaTeX>PV = nRT</KaTeX>
        <KaTeX>PV = nKT</KaTeX>
        <KaTeX>{String.raw`\frac{1}{2}mv^2 = \frac{3}{2}KT`}</KaTeX>
        <KaTeX>{String.raw`\frac{Q_h}{Q_c} = \frac{T_h}{T_c}`}</KaTeX>
        <KaTeX>{String.raw`\eta = \frac{W}{Q_h}`}</KaTeX>
        <KaTeX>{String.raw`Q = \Delta U + W`}</KaTeX>
      </div>
      '
      <section className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
        <article className='p-4 bg-gray-100 border border-gray-200 rounded-lg'>
          <div className='text-2xl font-semibold'>Isobaris</div>
          <div className='pb-1 mb-2 border-b border-gray-300'>
            Tekanan tetap selama proses <TeX>(\Delta P = 0)</TeX>
          </div>
          <KaTeX>{String.raw`\textcolor{orangered}{W} = \int P dV = P\int dV = P\Delta V`}</KaTeX>
          <KaTeX>{String.raw`\textcolor{orangered}{Q} = \Delta U + W = \Delta U + P\Delta V`}</KaTeX>
          <KaTeX>{String.raw`mC_p\Delta T = mC_v\Delta T + W`}</KaTeX>
          <KaTeX>{String.raw`W = mC_p\Delta T - mC_v\Delta T`}</KaTeX>

          <KaTeX>{String.raw`W = m(C_p - C_v)\Delta T`}</KaTeX>
        </article>
        <article className='p-4 bg-gray-100 border border-gray-200 rounded-lg'>
          <div className='text-2xl font-semibold'>Isokhoris</div>
          <div className='pb-1 mb-2 border-b border-gray-300'>
            Volume tetap selama proses <TeX>(\Delta V = 0)</TeX>
          </div>
          <KaTeX>{String.raw`\textcolor{orangered}{W} = \int P dV \ \ , dV = 0 \ \ , W = 0`}</KaTeX>
          <KaTeX>{String.raw`\textcolor{orangered}{Q} = \Delta U + W, \ Q = \Delta U`}</KaTeX>
          <KaTeX>
            {String.raw` \textcolor{orangered}{\Delta U} = mc_v\Delta T = nMc_v\Delta T = nC_v\Delta T  `}
          </KaTeX>
          <KaTeX>{String.raw`m = nM, \enspace Mc_v = C_v`}</KaTeX>

          <Legenda rumus='c_v' name='kalor jenis Isokhoris' />
          <Legenda rumus='C_v' name='kalor jenis molar Isokhoris' />
        </article>
        <article className='p-4 bg-gray-100 border border-gray-200 rounded-lg'>
          <div className='text-2xl font-semibold'>Isotermis</div>
          <div className='pb-1 mb-2 border-b border-gray-300'>
            Suhu tetap selama proses <TeX>(\Delta T = 0)</TeX>
          </div>
          <KaTeX>{String.raw`\textcolor{orangered}{\Delta U} = mC_v\Delta V = 0`}</KaTeX>
          <KaTeX>{String.raw`\textcolor{orangered}{Q} = \Delta U + W = 0 + W `}</KaTeX>
          <KaTeX>{String.raw`\textcolor{#F5F5F5}{Q} = \int P dV = \int \frac{nRT}{V} dV `}</KaTeX>
          <KaTeX>{String.raw`\textcolor{#F5F5F5}{Q} = nRT \int \frac{1}{V} dV `}</KaTeX>
          <KaTeX>{String.raw`\textcolor{#F5F5F5}{Q} = nRT(\ln V_2 - \ln V_1) `}</KaTeX>
          <KaTeX>{String.raw`\textcolor{orangered}{Q} = nRT\ln\frac{V_2}{V_1}`}</KaTeX>
        </article>
        <article className='p-4 bg-gray-100 border border-gray-200 rounded-lg'>
          <div className='text-2xl font-semibold'>Adiabatis</div>
          <div className='pb-1 mb-2 border-b border-gray-300'>
            Tidak ada perpindahan kalor antara sistem dan lingkungan <TeX>(\Delta Q = 0)</TeX>
          </div>
          <KaTeX>{String.raw`\textcolor{orangered}{Q} = \Delta U + W`}</KaTeX>
          <KaTeX>{String.raw`0 = \Delta U + W`}</KaTeX>
          <KaTeX>{String.raw`\Delta U = -W `}</KaTeX>
          <KaTeX>{String.raw`W = -\Delta U  `}</KaTeX>
          <KaTeX>{String.raw`PV^{\gamma} = konstan`}</KaTeX>
        </article>
      </section>
      '{/* penurunan rumus */}
      <AA1 id='PenurunanRumus' title='Penurunan Rumus' />
      <Para>
        Math Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero enim provident tenetur?
        Earum voluptas, rerum aliquid corporis, sit veritatis laborum aut eum sed saepe natus esse
        quas expedita animi! Quasi odio architecto impedit voluptatum eligendi nihil placeat
        molestiae at vitae consequatur, autem, eos hic nemo debitis recusandae deleniti asperiores?
        Officia quam eaque excepturi facere, eligendi perferendis iste. Accusantium nam dolor
        doloremque unde expedita sunt cumque blanditiis, corrupti, in sit ipsum qui laboriosam hic
        quidem, odio ad. In officia, pariatur exercitationem provident deserunt neque excepturi nisi
        voluptates saepe quidem commodi esse, atque odio incidunt voluptatum porro ipsum reiciendis
        iusto nosTRowwwwwum laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laborum quibusdam ipsa nosTRowwwwwum facilis qui nisi ratione molestias, sequi dolores nihil
        sint corporis tenetur nam illum accusantium reprehenderit eos! Eligendi illo iste, at
        obcaecati quaerat corporis qui iusto eveniet soluta unde sunt rem? Corrupti, quidem!
        Aspernatur perspiciatis quibusdam iure laborum perferendis eligendi quas dolor quia, sit
        expedita modi quis nam aliquid deserunt amet soluta cumque at eaque dolores dolore corporis
        libero provident consectetur quidem. Repudiandae sed debitis omnis corrupti possimus in sit
        magni labore, sapiente repellat nam libero explicabo aspernatur rerum facere, incidunt
        eligendi consequatur magnam inventore voluptatem illo. Nihil, asperiores!
      </Para>
      <AA1 id='Pembahasan' title='Pembahasan' />
      <Para>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laborum dignissimos odit
        nesciunt eligendi voluptate placeat praesentium ab dolor. Aspernatur, maiores sit
        accusantium neque nobis quibusdam odit similique debitis pariatur illum voluptatem
        repellendus, adipisci ab accusamus eos quidem rem id autem fugiat ad iusto quia dolor? Omnis
        eveniet iusto aspernatur fugiat, quas ex laborum voluptatum officiis rerum cumque placeat
        tempora voluptates! Cum nulla magnam quia ab. Minima nemo quae, hic exercitationem
        accusantium iure voluptas sequi omnis culpa in non incidunt recusandae optio rerum fugit
        totam eligendi inventore est ab repudiandae? Soluta, obcaecati ducimus corrupti vel quod
        quasi totam ipsum debitis?
      </Para>
      <AA1 id='ContohSoal' title='Contoh Soal' />
      <Para>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero enim provident tenetur? Earum
        voluptas, rerum aliquid corporis, sit
      </Para>
      <br />
      <ExampleMain type='Contoh Soal Mudah'>
        <ExampleChild type='Teori Kinetik Gas'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, nemo.
        </ExampleChild>
      </ExampleMain>
    </LayoutMateri>
  );
};

export default termodinamika;
