import Layout from '@/components/LayoutMateri';
import { ExternalLink, InternalLink, Title, Topic } from '@/components/Materi';
import { useState } from 'react';

export default function showcase() {
  const stateharis = useState('haris');
  console.log(stateharis);
  console.log(stateharis[0] + ' ' + stateharis[1]);
  const [haris, setHaris] = useState('haris laboratory');
  console.log(haris);
  console.log(() => setHaris('wadaw'));
  return (
    <Layout browserTitle='Showcase' description='Showcase'>
      <Title name='Showcase' />
      <div>
        <Topic name='All Project' />
        <div className='grid grid-flow-col grid-cols-1 gap-2 sm:w-1/2 xs:grid-cols-2 sm:grid-rows-6'>
          <InternalLink name='useState' to='/showcase/usestate' />
          <InternalLink name='Dynamic Pages' to='/showcase/students' />
          <InternalLink name='Gradient' to='/showcase/gradient' />
          <InternalLink name='Internationalization' to='/showcase/internationalization' />
          <InternalLink name='Number Game' to='/showcase/number-game' />
          <InternalLink name='Browser Title' to='/showcase/browser-title' />
          <InternalLink name='Framer Motion' to='/showcase/framer-motion' />
          <InternalLink name='HeadlessUI' to='/showcase/headlessui' />
          <InternalLink name='Date' to='/showcase/date' />
          <ExternalLink name='Firebase' to='https://www.firebase-harislab.vercel.app' />
          <ExternalLink name='Supabase' to='https://www.supabase-harislab.vercel.app' />
          <ExternalLink name='NextAuth' to='https://www.nextauth-harislab.vercel.app' />
          <ExternalLink name='Notion' to='https://www.notion-harislab.vercel.app' />
        </div>
      </div>
    </Layout>
  );
}
