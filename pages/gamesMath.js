import MathTab from "../components/MathTab";
import What from "../components/What";

export default function gamesMath() {
  return (
    <main className="max-w-4xl px-5 mx-auto lg:px-0">
      <MathTab in="Permainan" to="gamesPhy" />

      <What
        title="Apa itu Games Matematika di HarisLab ?"
        description="Games Matematika di HarisLab adalah sebuah cara untuk belajar tanpa merasa belajar, kamu akan bermain, berkolaborasi dan berkompetisi di sebuah game yang tampaknya tidak seperti belajar, tapi tanpa sadar kalian sedang belajar matematika."
      />
    </main>
  );
}
