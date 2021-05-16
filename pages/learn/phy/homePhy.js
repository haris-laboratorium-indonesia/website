import ChapterBox from "../../../components/ChapterBox";
import MathPhyOption from "../../../components/MathPhyOption";

export default function homePhy() {
  return (
    <main>
      <MathPhyOption currentPage="Fisika" anotherPage="Matematika" page="/learn/math/homeMath"/>

      <section className="grid grid-cols-1 sm:grid-cols-4 divide-y divide-gray-400 sm:divide-y-0">
        <ChapterBox title="Fluida Statis" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Fluida Dinamis" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Termodinamika" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Gelombang Mekanik" toPage="ChapterPhy/fluida" />
        <ChapterBox
          title="Gelombang Elektromagnetik"
          toPage="ChapterPhy/fluida"
        />
        <ChapterBox title="Kinematika" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Dinamika" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Kesetimbangan" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Besaran & Pengukuran" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Radiasi Benda Hitam" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Relativitas Khusus" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Kuantum" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Inti" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Magnet" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Listrik Statis" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Listrik Dinamis" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Gelombang Bunyi" toPage="ChapterPhy/fluida" />
        <ChapterBox title="Optik" toPage="ChapterPhy/fluida" />
      </section>
    </main>
  );
}
