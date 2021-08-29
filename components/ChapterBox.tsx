import Link from 'next/link';
import { Folder, RightArrow } from '@/Icons';

export default function ChapterBox({ to, title }) {
  return (
    <Link href={to}>
      <a className='flex items-center justify-between w-full pl-2.5 pr-2 py-2.5 sm:py-2  xs:rounded-md bg-white hover:bg-gray-100 xs:shadow'>
        <div className='flex items-center space-x-1.5 overflow-hidden sm:justify-between '>
          <Folder />
          <p className='font-medium text-gray-600 truncate '>{title}</p>
        </div>
        <div>
          <RightArrow color=' ' />
        </div>
      </a>
    </Link>
  );
}
