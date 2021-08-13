import Layout from '@/components/Layout';
import Link from 'next/link';
import Title from '@/components/Title';
import TextSlider from '@/components/delba/TextSlider';
import GradientBorder from '@/components/delba/GradientBorder';
import InstagramAnimatedBackground from '@/components/delba/InstagramAnimatedBackground';

export default function home() {
  return (
    <Layout browserTitle={`Delba's Experiments`} description="Delba's Experiment">
      <Title name={`Delba's Experiment`} />

      <div className='mb-5 -mt-5 text-center'>
        A list of Vercel's Developer Advocate Delba-de-Olivera front-end challange.
      </div>

      <Judul name='Link Preview' />
      {/* <LinkPreview /> */}

      <Judul name="Vercel's Text Slider" />
      <TextSlider slides={['Referensi.', 'Kalkulasi.', 'Animasi.']} />

      <Judul name='Gradient Border' />
      <GradientBorder />

      <Judul name='Instagram Animated Background' />
      <InstagramAnimatedBackground />

      <Judul name='A Like Button That Like You Back' />
      {/* <AButtonThatLikeYouBack/> */}
    </Layout>
  );
}

const Box = ({ children, to }) => {
  return (
    <Link href={`${to}`}>
      <a className='px-4 py-2 text-center duration-200 hover:-translate-y-0.5 bg-white rounded-md shadow hover:shadow-md '>
        {children}
      </a>
    </Link>
  );
};

const Judul = ({ name }) => {
  return (
    <div className='mt-24 mb-5 text-xl font-semibold text-center text-gray-700 sm:text-2xl'>
      {name}
    </div>
  );
};
