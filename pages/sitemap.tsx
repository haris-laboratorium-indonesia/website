import Layout from '@/components/Layout';
import { ExternalLink, InternalLink, Title } from '@/components/DesignSystem';
import { fisikaChapterData, matematikaChapterData } from 'data/Beranda';

export default function SiteMap() {
  const chunck = 'space-y-2 flex-col flex';
  return (
    <Layout browserTitle='Site Map' description='Site Map'>
      <Title name='Site Map' />

      <div className='flex flex-col space-y-10 divide-y divide-gray-600 divide-dashed'>
        <div>
          <h3 className='pb-4 text-2xl font-bold text-gray-700 '>General Information</h3>
          <div className='grid grid-cols-2 gap-10 sm:gap-5 sm:grid-cols-3 lg:grid-cols-4'>
            <div className={chunck}>
              <Topic name='Features' />
              <InternalLink name='Store' to='store' />
              <InternalLink name='Math' to='math' />
              <InternalLink name='Physics' to='physics' />
              <InternalLink name='Calculator' to='Calculator' />
              <InternalLink name='Tutoring' to='tutoring' />
            </div>
            <div className={chunck}>
              <Topic name='Others' />
              <InternalLink name='Pricing' to='pricing' />
              <InternalLink name='About' to='about' />
              <InternalLink name='Design' to='design' />
              <InternalLink name='Site Map' to='sitemap' />
              <InternalLink name='Showcase' to='showcase' />
            </div>
            <div className={chunck}>
              <Topic name='Contact' />
              <ExternalLink to='mailto:harislaboratory@gmail.com' name='Email' />
              <ExternalLink to='https://www.twitter.com/haritssr' name='Twitter' />
              <ExternalLink to='https://www.github.com/haritssr' name='Github' />
              <ExternalLink to='tel:0895331103401' name='WhatsApp' />
            </div>
            <div className={chunck}>
              <Topic name='Information' />
              <InternalLink name='Make sugestion' to='/' />
              <InternalLink name='Report problem' to='/' />
              <InternalLink name='Privacy Policy' to='/' />
              <InternalLink name='Terms of Use' to='/' />
            </div>
          </div>
        </div>

        <div>
          <BiggerThanTopic name='Math' />
          <div className='grid grid-cols-1 sm:gap-5 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
            <div className={chunck}>
              <Topic name='Chapters' />
              {matematikaChapterData.map(a => (
                <InternalLink key={a.title} name={a.title} to={a.to} />
              ))}
            </div>
            <div className={chunck}>
              <Topic name='Informasi Umum' />
              <InternalLink name='Konstanta Matematika' to='/fisika/glosarium/fisika_konstanta' />
              <InternalLink name='Variabel Matematika' to='/fisika/glosarium/fisika_variabel' />
              <InternalLink name='Animasi Matematika' to='/fisika/glosarium/animasi' />
              <InternalLink name='Tokoh Matematika' to='/fisika/glosarium/tokoh_matematika' />
              <InternalLink name='Flash Card Matematika' to='/fisika/glosarium/flash_card' />
              <InternalLink name='Sejarah Matematika' to='/fisika/glosarium/sejarah_matematika' />
              <InternalLink
                name='Mind Map Matematika'
                to='/matematika/glosarium/mindmap_matematika'
              />
            </div>
          </div>
        </div>

        <div>
          <BiggerThanTopic name='Physics' />
          <div className='grid grid-cols-1 sm:gap-5 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
            <div className={chunck}>
              <Topic name='Chapters' />
              {fisikaChapterData.map(a => (
                <InternalLink key={a.title} name={a.title} to={a.to} />
              ))}
            </div>
            <div className={chunck}>
              <Topic name='Informasi Umum' />
              <InternalLink name='Konstanta Fisika' to='/fisika/glosarium/fisika_konstanta' />
              <InternalLink name='Variabel Fisika' to='/fisika/glosarium/fisika_variabel' />
              <InternalLink name='Satuan SI' to='/fisika/glosarium/fisika_satuanSI' />
              <InternalLink name='Animasi Fisika' to='/fisika/glosarium/animasi' />
              <InternalLink name='Tokoh Fisika' to='/fisika/glosarium/tokoh_fisika' />
              <InternalLink name='Flash Card Fisika' to='/fisika/glosarium/flash_card' />
              <InternalLink name='Sejarah Fisika' to='/fisika/glosarium/sejarah_fisika' />
              <InternalLink name='Mind Map Fisika' to='/fisika/glosarium/mindmap_fisika' />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Topic = ({ name }) => {
  return <h3 className='text-lg font-semibold text-gray-700 '>{name}</h3>;
};

const BiggerThanTopic = ({ name }) => {
  return <h3 className='pt-8 pb-4 text-2xl font-bold text-gray-700 '>{name}</h3>;
};
