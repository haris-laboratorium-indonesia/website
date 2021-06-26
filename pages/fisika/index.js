import ChapterBox from '../../components/ChapterBox'
import TabPhy from '../../components/TabPhy'
import Layout from '../../components/Layout'

const fisika = () => {
  return (
    <Layout title="Materi Matematika" description="Materi Matematika SMP SMA">
      <TabPhy
        page="Fisika"
        backTo="/fisika"
        to="/matematika"
        textColor="text-rose-500"
      />
      <section className="grid grid-cols-1 border border-gray-300 divide-y divide-gray-300 rounded-md bg-gray-50 sm:p-2 sm:grid-cols-2 md:grid-cols-3 sm:divide-y-0 ">
        <ChapterBox title="Fluida Statis" to="fisika/fluida" />
        <ChapterBox title="Fluida Dinamis" to="fluidaDinamis" />
        <ChapterBox title="Termodinamika" to="fisika/termodinamika" />
        <ChapterBox title="Gelombang Mekanik" to="fluida" />
        <ChapterBox title="Gelombang Elektromagnetik" to="fluida" />
        <ChapterBox title="Kinematika" to="fluida" />
        <ChapterBox title="Dinamika" to="fluida" />
        <ChapterBox title="Kesetimbangan" to="fluida" />
        <ChapterBox title="Besaran & Pengukuran" to="fluida" />
        <ChapterBox title="Radiasi Benda Hitam" to="fluida" />
        <ChapterBox title="Relativitas Khusus" to="fluida" />
        <ChapterBox title="Kuantum" to="fluida" />
        <ChapterBox title="Inti" to="fluida" />
        <ChapterBox title="Magnet" to="fluida" />
        <ChapterBox title="Listrik Statis" to="fluida" />
        <ChapterBox title="Listrik Dinamis" to="fluida" />
        <ChapterBox title="Gelombang Bunyi" to="fluida" />
        <ChapterBox title="Optik" to="fluida" />
      </section>
    </Layout>
  )
}

export default fisika
