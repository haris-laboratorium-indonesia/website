import NavMobile from '@/components/NavMobile';
import { Disclosure } from '@headlessui/react';
import { useState } from 'react';

//Domain - Fisikaa
//Chapter - Gelombang
//SubChapter - Gelombang Dasar
//Content - Properti

export default function MobileNavigationPrototype() {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <section className='z-50 bg-zinc-800'>
        <NavMobile />
      </section>
      <Disclosure as='div' className=' sticky top-0'>
        {({ open }) => (
          <>
            <div className='py-1 px-3 bg-white/50 backdrop-blur border-b border-zinc-200 flex justify-between items-center'>
              <div className='flex flex-col text-left -space-y-0.5'>
                <div className='text-[12px] text-zinc-800 font-semibold'>Gelombang</div>
                <div className='text-[12px] text-zinc-500'>Gelombang Bunyi</div>
              </div>
              <Disclosure.Button className='text-blue-500 text-sm'>
                {open ? 'Tutup' : 'Daftar Isi'}
              </Disclosure.Button>
            </div>
            <Disclosure.Panel className='bg-white overflow-y-auto'>
              <div className='text-3xl font-bold text-zinc-700 px-5 pt-5 pb-1 '>Fisika</div>
              <div className='px-3  bg-white'>
                {ChaptersData.map(a => (
                  <Chapter chapter={a} selected={selected} />
                ))}
              </div>
              <div className='px-3 w-full pt-10 space-y-2 bg-white'>
                {SubChaptersData.map(a => (
                  <SubChapter chapter={a} />
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className='px-5 text-zinc-700'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore perferendis tempore odio
        cum libero explicabo sit eaque incidunt possimus ullam corrupti maxime, sint veniam
        molestias rerum. Placeat repudiandae molestiae dolorum suscipit doloribus, fugiat omnis,
        tenetur, consequatur nisi dolore laudantium accusamus pariatur nam harum in excepturi quia
        sit velit id eius assumenda maxime. Neque impedit praesentium, cupiditate maxime dolore
        error. Culpa quia dolorem eligendi dicta, assumenda repellendus aut corrupti blanditiis
        pariatur laborum obcaecati laboriosam. Dolorum harum voluptates, minus adipisci tempore
        animi cumque. Eum temporibus ea officia omnis debitis error fuga iure veritatis, voluptas
        laboriosam repellendus sequi ratione inventore quos quis, provident, in nemo saepe amet ex
        obcaecati dolores reiciendis quasi ut? Possimus voluptatibus eius, dignissimos iure itaque
        ipsum quos eaque dolores accusamus quibusdam ut, odit esse molestias nesciunt soluta
        assumenda, distinctio magnam saepe et totam neque aliquid ducimus voluptate. Autem eveniet
        sequi laboriosam, nesciunt perferendis nam veniam non perspiciatis architecto dolorum
        veritatis aliquid omnis officia magni aperiam quasi modi provident! Nulla ipsa reprehenderit
        ex est ducimus temporibus eius alias! Nostrum aspernatur laboriosam commodi aut
        necessitatibus quas dolor fugit labore quam tenetur sit quibusdam odit dolorem
        reprehenderit, sint impedit ut dolorum ullam? Alias adipisci sapiente architecto excepturi
        nulla harum vel, ex eum tenetur voluptatibus a! Eos veniam perspiciatis in, nostrum adipisci
        facere ipsa quia est. Eos dolor enim obcaecati eligendi perferendis iste quam cupiditate
        inventore modi reprehenderit, neque earum dolorum id doloremque voluptates in fugit
        exercitationem molestiae blanditiis maxime, explicabo natus? Voluptatem distinctio earum
        laboriosam accusantium soluta error repudiandae sint eveniet, doloribus neque, culpa totam
        architecto perspiciatis inventore veritatis recusandae veniam et ea quasi molestiae! Ea
        optio rem perferendis ullam tempore illo omnis, amet reprehenderit pariatur, soluta, maxime
        ducimus necessitatibus sit? Assumenda nostrum eos ratione a aut aperiam asperiores
        consectetur explicabo harum culpa, veritatis illum sequi autem corrupti id atque magni
        aspernatur corporis, perspiciatis deserunt nemo, eaque fugit eum. Ratione impedit laboriosam
        asperiores corrupti et doloremque minima nihil eos, provident molestiae repellat vel
        blanditiis assumenda, deserunt laborum illum, sequi alias maxime! Minus, blanditiis? Neque
        culpa mollitia fuga eveniet eius commodi delectus dignissimos deleniti molestias laborum.
        Nulla aliquam sunt eos ut, deleniti maiores impedit neque earum dignissimos! Et expedita
        temporibus consequuntur natus aut reprehenderit unde est doloribus, quod explicabo facilis
        ratione, omnis architecto debitis, magnam nostrum non dignissimos aliquid! Suscipit sunt
        sapiente, explicabo odio aliquam harum quod veniam quidem quisquam, enim exercitationem?
        Reiciendis officiis enim incidunt hic ut obcaecati eligendi, maxime deleniti voluptates unde
        exercitationem sed doloribus asperiores et labore deserunt quo aperiam reprehenderit ex esse
        sit numquam ratione molestiae blanditiis. Voluptates aspernatur at excepturi dignissimos
        suscipit, neque soluta enim nobis ullam, illum saepe. Odit debitis obcaecati voluptatum vel
        corporis itaque, officiis minus quaerat alias dolor eligendi molestiae deleniti animi
        mollitia voluptatibus quidem neque vero nam voluptate. Exercitationem, non deleniti
        recusandae ipsum eos adipisci unde ipsam sint quis nulla libero explicabo accusantium quo
        voluptas nihil sit esse laboriosam debitis quibusdam? Cumque ratione quos quia, non expedita
        sunt quod saepe sed sequi numquam assumenda ex perferendis earum minus eaque magni voluptas
        officiis! Itaque, optio?
      </div>
    </>
  );
}

const ChaptersData = ['Pengukuran', 'Gerak', 'Gelombang', 'Fluida', 'Listrik'];
const SubChaptersData = [
  'Gelombang Dasar',
  'Gelombang Bunyi',
  'Gelombang Elektromagnetik',
  'Gelombang Elektromagnetik',
  'Gelombang Elektromagnetik',
];

const Chapter = ({
  chapter,
  selected,
}: {
  chapter: string;
  selected: boolean;
  // handleSelect: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) => {
  return (
    <div
      className={`flex items-center space-x-0.5 hover:bg-blue-500 rounded-md px-2 py-1 group ${
        selected ? 'bg-zinc-200' : ''
      }`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 group-hover:stroke-white stroke-blue-500 group-hover:fill-blue-500 fill-white'
        viewBox='0 0 24 24'
        // stroke='currentColor'
        strokeWidth={1.5}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
        />
      </svg>
      <div className='text-zinc-700 group-hover:text-white'>{chapter}</div>
    </div>
  );
};

const SubChapter = ({ chapter }: { chapter: string }) => {
  return (
    <div className='flex items-center space-x-0.5 hover:bg-zinc-100 rounded-md px-2 py-1'>
      <Disclosure as='div' className='flex flex-col w-full space-y-1'>
        {({ open }) => (
          <>
            <Disclosure.Button className=' w-full flex items-center justify-between'>
              <div className='text-zinc-700 font-medium'>{chapter}</div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className={`h-5 w-5 text-blue-500 ${open ? 'rotate-90' : ''} `}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel className='pl-2 space-y-1'>
              <Content type='Pengantar' />
              <Content type='Content' />
              <Content type='Content Management' />
              <Content type='The Best Content' />
              <Content type='Why this Content exist' />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

const Content = ({ type }: { type: string }) => {
  return (
    <div className='flex items-center space-x-1'>
      <svg
        viewBox='0 0 24 24'
        width='24'
        height='24'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
        className='h-5 w-5 text-zinc-700'
        shapeRendering='geometricPrecision'
      >
        <path d='M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z' />
        <path d='M14 2v6h6' />
        <path d='M16 13H8' />
        <path d='M16 17H8' />
        <path d='M10 9H8' />
      </svg>
      <div className='text-zinc-800'>{type}</div>
    </div>
  );
};
