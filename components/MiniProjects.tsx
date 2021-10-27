import Link from 'next/link';
import { Title, SubTitle } from '@/components/DesignSystem';
import Layout from '@/components/Layout';
import { HiChevronLeft } from 'react-icons/hi';

export default function MiniProjects({ title, children }) {
  return (
    <Layout browserTitle={title} description={`${title} - Mini Projects`}>
      <div className='bg-[#F5F5F7] min-h-screen'>
        <div className='w-full max-w-5xl px-5 mx-auto my-10 sm:px-0 '>
          <Link href='/tentang/#miniProject'>
            <a className='flex items-center -ml-5 text-gray-500 hover:underline'>
              <HiChevronLeft className='w-6 h-6' />
              <div>Back</div>
            </a>
          </Link>

          <Title name={title} />
          {children}
        </div>
      </div>
    </Layout>
  );
}
