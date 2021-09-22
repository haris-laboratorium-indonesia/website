import Layout from '@/components/Layout';
import { Title } from '@/components/Materi';
import { motion } from 'framer-motion';

export default function Gradient() {
  return (
    <Layout browserTitle='Gradient' description='Gradient'>
      <Title name='Gradient' />
      <section className='grid grid-cols-2 grid-rows-2 gap-5 mt-10 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9'>
        {gradientData.map(a => (
          <motion.div
            className={`w-24 h-24 rounded-lg bg-gradient-to-b shadow-lg ${a.gradient}`}
            whileTap={{ rotate: 90 }}
            whileHover={{ scale: 0.9 }}
            dragConstraints={{
              right: 50,
              left: 50,
              top: 50,
              bottom: 50,
            }}
            drag
          ></motion.div>
        ))}
      </section>
    </Layout>
  );
}

const gradientData = [
  { gradient: 'from-red-400 to-red-500' },
  { gradient: 'from-orange-400 to-orange-500' },
  { gradient: 'from-amber-400 to-amber-500' },
  { gradient: 'from-yellow-400 to-yellow-500' },
  { gradient: 'from-lime-400 to-lime-500' },
  { gradient: 'from-green-400 to-green-500' },
  { gradient: 'from-emerald-400 to-emerald-500' },
  { gradient: 'from-teal-400 to-teal-500' },
  { gradient: 'from-cyan-400 to-cyan-500' },
  { gradient: 'from-sky-400 to-sky-500' },
  { gradient: 'from-blue-400 to-blue-500' },
  { gradient: 'from-indigo-400 to-indigo-500' },
  { gradient: 'from-violet-400 to-violet-500' },
  { gradient: 'from-purple-400 to-purple-500' },
  { gradient: 'from-fuschsia-400 to-fuschsia-500' },
  { gradient: 'from-pink-400 to-pink-500' },
  { gradient: 'from-rose-400 to-rose-500' },
];
