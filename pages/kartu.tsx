import Layout from '../components/Layout';
import { Title, SubTitle } from '@/components/Materi';
import Image from 'next/image';

export default function Kartu() {
  return (
    <Layout browserTitle='Kartu' description='Kartu Haris Laboratory'>
      <Title name='Kartu' />

      <div className='grid grid-cols-2 gap-5 mb-10 sm:grid-cols-3 lg:grid-cols-4'>
        {data.map(a => (
          <Card key={a.id} src={a.image} title={a.title} subTitle={a.subTitle} />
        ))}
      </div>
      <div className='grid grid-cols-1 gap-5 p-5 bg-white rounded-md shadow sm:grid-cols-3 hover:shadow-md'>
        <div>
          <div>Termodinmaika</div>
          <div>Azas Black</div>
        </div>
        <div className='p-5'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis illo amet inventore
          voluptatum veritatis nam facilis dolorum, a maiores debitis. Tempora, dolor eum.
          Molestias, dolores distinctio amet nulla facere repellendus quasi commodi aperiam deleniti
          officiis delectus numquam dicta error maxime tenetur ipsum odio quia omnis totam magnam.
          Eligendi quo enim est facere quam? Deleniti quos voluptatum labore est, magni accusamus.
          Sed expedita odio quasi, ut consectetur sit id mollitia ex nostrum ad veritatis omnis
          sunt, distinctio nobis laboriosam temporibus ipsa quam aspernatur dolores accusantium
          facilis a! Aliquam quo delectus deserunt assumenda ipsa, omnis animi, iusto vel quaerat
          reiciendis eum natus?
        </div>
      </div>
    </Layout>
  );
}

const Card = ({ title, src, subTitle }) => {
  return (
    <div className='flex flex-col items-center justify-between w-full px-4 pt-4 pb-4 mx-auto text-gray-800 duration-200 bg-gray-100 shadow-lg hover:shadow-none hover:bg-gray-300 sm:pt-8 hover:drop-shadow rounded-xl hover:translate-y-1 '>
      <div className='flex items-center justify-center p-0.5 rounded-full bg-gradient-to-b from-gray-300 to-gray-500'>
        <div className='flex items-center justify-center p-0.5  rounded-full'>
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
        <div className='w-full text-xl font-semibold text-center'>{title}</div>
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
