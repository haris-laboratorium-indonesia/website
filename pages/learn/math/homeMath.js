import ChapterBox from "../../../components/ChapterBox";
import MathParam from "../../../components/MathParam";
import MathPhyOption from "../../../components/MathPhyOption";

export default function homeMath() {
  return (
    <main>
      {/* <MathPhyOption logo="<HiOutlineLibrary />" currentPage="Matematika" anotherPage="Fisika" page="/learn/phy/homePhy"/> */}
      <header className="text-2xl font-bold">Belajar</header>
      <MathParam to="/learn/phy/homePhy" />
      <section className="grid grid-cols-1 sm:grid-cols-4 divide-y divide-gray-400 sm:divide-y-0">
        <ChapterBox title="Lingkaran" toPage="ChapterMath/linear" />
        <ChapterBox title="Integral Tentu" toPage="ChapterMath/linear" />
        <ChapterBox title="Integral Tak Tentu" toPage="ChapterMath/linear" />
        <ChapterBox title="Linear" toPage="ChapterMath/linear" />
        <ChapterBox title="Kuadrat" toPage="ChapterMath/linear" />
        <ChapterBox title="Suku Banyak" toPage="ChapterMath/linear" />
        <ChapterBox title="Matriks" toPage="ChapterMath/linear" />
        <ChapterBox title="Transformasi Geometri" toPage="ChapterMath/linear" />
        <ChapterBox title="Geometri" toPage="ChapterMath/linear" />
        <ChapterBox title="Trigonometri" toPage="ChapterMath/linear" />
        <ChapterBox title="Logaritma" toPage="ChapterMath/linear" />
        <ChapterBox title="Eksponen" toPage="ChapterMath/linear" />
        <ChapterBox title="Turunan" toPage="ChapterMath/linear" />
        <ChapterBox title="Limit" toPage="ChapterMath/linear" />
        <ChapterBox title="Dimensi 3" toPage="ChapterMath/linear" />
        <ChapterBox title="Vektor" toPage="ChapterMath/linear" />
        <ChapterBox title="Barisan" toPage="ChapterMath/linear" />
        <ChapterBox title="Deret" toPage="ChapterMath/linear" />
        <ChapterBox title="Statistika" toPage="ChapterMath/linear" />
        <ChapterBox title="Peluang" toPage="ChapterMath/linear" />
      </section>
    </main>
  );
}
