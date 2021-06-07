import PhyTab from "../components/PhyTab";
import What from "../components/What";

export default function gamesMath() {
  return (
    <main className="max-w-4xl px-5 mx-auto lg:px-0">
      <PhyTab in="Permainan" to="gamesMath" />

      <What
        title="Apa itu Games Fisika di HarisLab ?"
        description="Games fisika di HarisLab adalah sebuah cara untuk belajar tanpa merasa belajar, kamu akan bermain, berkolaborasi dan berkompetisi di sebuah game yang tampaknya tidak seperti belajar, tapi tanpa sadar kalian sedang belajar fisika."
      />
    </main>
  );
}
