import ChapterBox from "../../components/ChapterBox";
import TabMath from "../../components/TabMath";
import Layout from "../../components/Layout";

const matematika = () => {
  return (
    <Layout title="Materi Matematika" description="Materi Matematika SMP SMA">
      <TabMath
        page="Matematika"
        backTo="/matematika"
        to="/fisika"
        textColor="text-rose-500"
      />
      <section className="grid grid-cols-1 border border-gray-300 divide-y divide-gray-300 rounded-md bg-gray-50 sm:p-2 sm:grid-cols-2 md:grid-cols-3 sm:divide-y-0 ">
        <ChapterBox title="Lingkaran" to="matematika/linear" />
        <ChapterBox title="Integral Tentu" to="linear" />
        <ChapterBox title="Integral Tak Tentu" to="linear" />
        <ChapterBox title="Linear" to="linear" />
        <ChapterBox title="Kuadrat" to="linear" />
        <ChapterBox title="Suku Banyak" to="linear" />
        <ChapterBox title="Matriks" to="linear" />
        <ChapterBox title="Transformasi Geometri" to="linear" />
        <ChapterBox title="Geometri" to="linear" />
        <ChapterBox title="Trigonometri" to="linear" />
        <ChapterBox title="Logaritma" to="linear" />
        <ChapterBox title="Eksponen" to="linear" />
        <ChapterBox title="Turunan" to="linear" />
        <ChapterBox title="Limit" to="linear" />
        <ChapterBox title="Dimensi 3" to="linear" />
        <ChapterBox title="Vektor" to="linear" />
        <ChapterBox title="Barisan" to="linear" />
        <ChapterBox title="Deret" to="linear" />
        <ChapterBox title="Statistika" to="linear" />
        <ChapterBox title="Peluang" to="linear" />
      </section>
    </Layout>
  );
};
export default matematika;
