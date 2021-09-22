import Layout from '@/components/Layout';
import { Title } from '@/components/Materi';
import { motion } from 'framer-motion';
import { CaraSayaMenyampaikanInformasi } from 'data/Beranda';
import { useState } from 'react';

export default function FramerMotion() {
  const [isAnimating, setIsAnimating] = useState(false);

  const sectionBox =
    'grid grid-cols-1 gap-5 mx-auto xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3  mt-10 xs:px-0';
  return (
    <Layout browserTitle='Framer Motion' description='Framer Motion'>
      <Title name='Framer Motion' />
      <section className={sectionBox}>
        {CaraSayaMenyampaikanInformasi.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0.5, translateX: -50, translateY: i % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.5, delay: i * 0.02 }}
            className='flex flex-col items-center justify-start px-4 py-6 space-y-2 bg-white rounded-lg shadow'
          >
            <div className='text-xl font-semibold leading-tight text-gray-800'>{a.title}</div>
            <div className='text-center text-gray-500'>{a.description}</div>
          </motion.div>
        ))}
      </section>

      <motion.div
        className='w-20 h-20 mt-20 rounded-lg shadow-lg bg-gradient-to-b from-rose-400 to-rose-500 hover:shadow'
        animate={{
          translateX: isAnimating ? 0 : 200,
          rotate: isAnimating ? 360 : 0,
        }}
        transition={{ duration: 1, type: 'spring', stiffness: 60, damping: 20 }}
        onClick={() => setIsAnimating(!isAnimating)}
      ></motion.div>

      <motion.div
        className='w-20 h-20 mt-20 rounded-lg shadow-lg bg-gradient-to-b from-amber-400 to-amber-500 hover:shadow'
        drag='x'
      ></motion.div>

      <motion.div
        className='w-20 h-20 mt-20 rounded-lg shadow-lg bg-gradient-to-b from-lime-400 to-lime-500 hover:shadow'
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
      ></motion.div>
    </Layout>
  );
}
