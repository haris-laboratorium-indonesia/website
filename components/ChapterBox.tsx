import Link from 'next/link';
import { FolderIcon, RightArrowChapterIcon } from './Icons';

export function ChapterBox({ to, title }: { to: string; title: string }) {
  return (
    <Link href={to}>
      <a className='flex items-center justify-between w-full pl-2 pr-1.5 py-1.5 rounded-md bg-white hover:bg-zinc-50 group shadow shadow-blue-200'>
        <div className='flex items-center space-x-1.5 overflow-hidden sm:justify-between '>
          <FolderIcon />
          <p className='text-zinc-600 truncate'>{title}</p>
        </div>
        <RightArrowChapterIcon />
      </a>
    </Link>
  );
}
