import ChapterBox from "../../components/ChapterBox";
import PhyTab from "../../components/PhyTab";
import What from "../../components/What";

export default function homePhy() {
  return (
    <main className="max-w-4xl px-5 mx-auto lg:px-0">
      <PhyTab in="Materi" to="/math/homeMath" />
      <section className="grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 ">
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
      <What
        title="Apa itu Belajar Fisika di Harislab ?"
        description="Belajar di HarisLab berarti melihat materi pelajaran, kamu bisa baca materi, melihat contoh soal, variabel, rumus yang digunakan, bahkan bisa melihat semua penurunan rumus dari rumus yang sering dipakai dalam mengerjakan sebuah soal."
      />
    </main>
  );
}
