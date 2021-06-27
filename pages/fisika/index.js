import ChapterBox from "@/components/ChapterBox";
import Layout from "@/components/Layout";
import Title from "@/components/Title";

const fisika = () => {
  return (
    <Layout browserTitle="Fisika" description="Materi Matematika SMP SMA">
      <Title name="Fisika" />

      <section className="grid grid-cols-1 bg-gray-100 border border-gray-300 divide-y divide-gray-300 rounded-md sm:p-2 sm:grid-cols-2 md:grid-cols-3 sm:divide-y-0">
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
  );
};

export default fisika;
