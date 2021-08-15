import TextSlider from '@/components/delba/TextSlider';
import GradientBorder from '@/components/delba/GradientBorder';
import InstagramAnimatedBackground from '@/components/delba/InstagramAnimatedBackground';
import MiniProjects from '@/components/MiniProjects';

export default function home() {
  return (
    <MiniProjects title={`Delba's Experiment`}>
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
      {/* <AButtonThatLikeYouBack/> */}{' '}
    </MiniProjects>
  );
}

const Judul = ({ name }) => {
  return (
    <div className='mt-24 mb-5 text-xl font-semibold text-center text-gray-700 sm:text-2xl'>
      {name}
    </div>
  );
};
