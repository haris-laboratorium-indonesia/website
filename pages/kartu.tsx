import Layout from '../components/Layout';
import Title from '@/components/Title';
import Image from 'next/image';

const kartu = () => {
  return (
    <Layout browserTitle='Kartu' description='Flash Card untuk belajar'>
      <Title name='Kartu' />
      <div className='grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4'>
        {data.map(a => (
          <Card
            key={a.id}
            src={a.image}
            title={a.title}
            subTitle={a.subTitle}
            description={a.description}
          />
        ))}
      </div>
    </Layout>
  );
};

export default kartu;

const Card = ({ title, src, subTitle, description }) => {
  return (
    <div className='flex flex-col items-center justify-between px-4 pt-4 pb-4 mx-auto text-gray-700 duration-100 ease-in-out border-2 border-gray-400 bg-gradient-to-b from-gray-200 to-gray-300 sm:pt-8 sm:w-full hover:drop-shadow-lg rounded-2xl hover:scale-105 hover:-translate-y-1 hover:border-harislab hover:bg-gray-200'>
      <div className='flex items-center justify-center p-1 rounded-full shadow-lg bg-gradient-to-b from-gray-300 to-gray-500'>
        <div className='flex items-center justify-center p-0.5 bg-white rounded-full'>
          <Image
            src={src}
            alt={title}
            height={125}
            width={125}
            priority
            className='rounded-full shadow-inner '
          />
        </div>
      </div>

      <div className='mt-10 text-center'>
        <div className='text-xl font-semibold text-center '>{title}</div>
        <div className=''>{subTitle}</div>
      </div>
      {/* <div className="text-center text-gray-100">{description}</div> */}
    </div>
  );
};

const data = [
  {
    id: '1',
    image: '/nature.jpg',
    title: 'Hukum Newton 1',
    subTitle: 'Dinamika',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores id recusandae accusamus doloribus!',
  },
  {
    id: '2',
    image: '/nature.jpg',
    title: 'Azas Black',
    subTitle: 'Termodinamika',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores id recusandae accusamus doloribus!',
  },
  {
    id: '3',
    image: '/nature.jpg',
    title: 'Hukum Archimedes',
    subTitle: 'Fluida Statis',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores id recusandae accusamus doloribus!',
  },
  {
    id: '4',
    image: '/nature.jpg',
    title: 'Hukum Pascal',
    subTitle: 'Fluida Statis',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores id recusandae accusamus doloribus!',
  },
  {
    id: '5',
    image: '/nature.jpg',
    title: 'Dualitas Partikel Gelombang ',
    subTitle: 'Mekanika Kuantum',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores id recusandae accusamus doloribus!',
  },
];
