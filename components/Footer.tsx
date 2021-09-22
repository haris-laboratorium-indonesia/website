import Link from 'next/link';
import Breadcrumbs from 'nextjs-breadcrumbs';
import { ChevronRight } from '@/components/Materi';

export default function Footer() {
  const a = 'block text-gray-600  hover:underline font-inter';
  return (
    <footer
      className='bottom-0 w-full pt-5 mt-40 text-center bg-gray-200 border-t border-gray-300'
      id='footer'
    >
      <div className='px-5 xl:px-0'>
        <Breadcrumbs
          rootLabel='Home'
          containerClassName='max-w-5xl mx-auto'
          listClassName='flex lg:px-0 max-w-5xl '
          transformLabel={title => title + '/'}
          replaceCharacterList={[{ from: '_', to: ' ' }]}
          activeItemClassName='text-yellow-600 font-semibold'
          inactiveItemClassName='text-gray-500 hover:underline'
        />
      </div>
      {/* Footer */}
      <section className='grid max-w-5xl grid-cols-2 px-5 pt-5 pb-10 mx-auto text-left gap-y-5 sm:grid-cols-4 xl:px-0'>
        <FooterBox title='Features'>
          <Link href='/store'>
            <a className={a}>Store</a>
          </Link>
          <Link href='/math'>
            <a className={a}>Math</a>
          </Link>
          <Link href='/physics'>
            <a className={a}>Physics</a>
          </Link>
          <Link href='/calculator'>
            <a className={a}>Calculator</a>
          </Link>
          <Link href='/tutoring'>
            <a className={a}>Tutoring</a>
          </Link>
        </FooterBox>

        <FooterBox title='Others'>
          <Link href='/pricing'>
            <a className={a}>Pricing</a>
          </Link>
          <Link href='/design'>
            <a className={a}>Design</a>
          </Link>
          <Link href='/about'>
            <a className={a}>About</a>
          </Link>
          <Link href='/showcase'>
            <a className={a}>Showcase</a>
          </Link>
          <Link href='/sitemap'>
            <a className={a}>Site Map</a>
          </Link>
        </FooterBox>

        <FooterBox title='Contacts'>
          <a
            href='mailto:harislaboratory@gmail.com'
            target='_blank'
            className='block hover:underline'
          >
            Email
          </a>
          <a
            href='https://twitter.com/HarisLaboratory'
            target='_blank'
            className='block hover:underline'
          >
            Twitter
          </a>

          <a
            href='https://www.github.com/haritssr'
            target='_blank'
            className='block hover:underline'
          >
            GitHub
          </a>
          <a href='tel:0895331103401' target='_blank' className='block hover:underline'>
            WhatsApp
          </a>
        </FooterBox>

        <FooterBox title='Legal'>
          <div>Report problem !</div>
          <div>Make sugestion !</div>
          <div>Privacy Policy</div>
          <div>Terms of Use</div>
          <div>Copyright &copy;2021 Haris Lab</div>
        </FooterBox>
      </section>
    </footer>
  );
}

const FooterBox = ({ title, children }) => {
  return (
    <div className='space-y-1 sm:space-y-0.5 text-gray-600 sm:pt-0 '>
      <div className='font-semibold text-gray-700'>{title}</div>
      {children}
    </div>
  );
};
