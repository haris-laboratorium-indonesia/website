import Layout from '@/components/Layout';
import Link from 'next/link';
import Title from '@/components/Title';

export default function home() {
  return (
    <Layout browserTitle='Delba' description="Delba's Experiment">
      <Title name={`Delba's Experiment`} />
      <div className='grid max-w-xl grid-cols-1 gap-3 mx-auto'>
        <Box to='/linkPreview'>Link Preview</Box>
        <Box to='/vercelTextSlider'>Vercel's Text Slider</Box>
        <Box to='/instagramAnimatedBackground'>Instagram Animated Background</Box>
        <Box to='/aLikeButtonThatLikeYouBack'>A Like Button That Like You Back</Box>
      </div>
    </Layout>
  );
}

const Box = ({ children, to }) => {
  return (
    <Link href={`${to}`}>
      <a className='px-4 py-2 text-center bg-white rounded-md shadow hover:shadow-md '>
        {children}
      </a>
    </Link>
  );
};
