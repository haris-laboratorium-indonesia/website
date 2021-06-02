import ChapterBox from "../../components/ChapterBox";
import PhyTab from "../../components/PhyTab";

export default function homePhy() {
  return (
    <main className="max-w-5xl mx-auto px-5 sm:px-0">
      <PhyTab in="Belajar" to="/math/homeMath" />
      <section className="grid grid-cols-1 sm:grid-cols-3 divide-y divide-gray-200 sm:divide-y-0 ">
        <ChapterBox title="Fluida Statis" to="fluida" />
        <ChapterBox title="Fluida Dinamis" to="fluidaDinamis" />
        <ChapterBox title="Termodinamika" to="fluida" />
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
    </main>
  );
}
