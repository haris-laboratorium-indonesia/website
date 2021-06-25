import Link from 'next/link'
import {Folder, RightArrow} from '@/Icons'
const ChapterBox = ({to, title}) => {
  return (
    <main>
      <Link href={to}>
        <a className="flex items-center justify-between w-full px-0 py-3 sm:px-1.5 sm:py-1.5 sm:hover:bg-gray-100 sm:hover:rounded-md ">
          <div className="flex items-center sm:justify-between">
            <Folder />

            <p className="text-gray-700 truncate">{title}</p>
          </div>
          <RightArrow a="text-gray-700" />
        </a>
      </Link>
    </main>
  )
}

export default ChapterBox
