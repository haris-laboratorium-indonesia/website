import Link from 'next/link';
import { Folder, RightArrow } from '@/Icons';

export default function ChapterBox({ to, title }) {
  return (
    <>
      <Link href={to}>
        <a className='flex items-center justify-between w-full px-2.5 py-2.5 sm:py-2  rounded-md hover:bg-gray-200 border border-gray-400'>
          <div className='flex items-center space-x-2 sm:justify-between sm:space-x-1'>
            <Folder />
            <p className='text-gray-700'>{title}</p>
          </div>
          <div>
            <RightArrow color=' ' />
          </div>
        </a>
      </Link>
    </>
  );
}
