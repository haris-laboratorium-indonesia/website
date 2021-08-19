import Link from 'next/link';
import { Title, SubTitle } from '@/components/Materi';
import Layout from '@/components/Layout';

export default function MiniProjects({ title, children }) {
  return (
    <Layout browserTitle={title} description={`${title} - Mini Projects`}>
      <div className='bg-[#F5F5F7] min-h-screen'>
        <div className='w-full max-w-4xl px-5 mx-auto my-10 sm:px-0 '>
          <Link href='/haris/#miniProject'>
            <a className='text-gray-500 hover:underline '>Back</a>
          </Link>

          <Title name={title} />
          {children}
        </div>
      </div>
    </Layout>
  );
}
