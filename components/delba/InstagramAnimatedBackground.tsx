import { AiOutlineInstagram } from 'react-icons/ai';

export default function InstagramAnimatedBackground() {
  return (
    <div className='relative overflow-hidden bg-white rounded-md shadow-md hover:shadow-lg'>
      <div className='relative max-w-3xl mx-auto h-96'>
        <div className='w-full h-full origin-center animate-background-spin'>
          <div className='w-full h-full transform scale-x-150 scale-y-300 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-500'></div>
        </div>
        <div className='absolute flex top-2/4 right-2/4'>
          <AiOutlineInstagram className='w-20 h-20 -mt-10 -mr-10 text-white' />
        </div>
      </div>
    </div>
  );
}
