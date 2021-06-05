import MathTab from "../components/MathTab";
import What from "../components/What";

export default function scanMath() {
  return (
    <main className="max-w-4xl px-5 mx-auto lg:px-0">
      <MathTab in="Scan" to="scanPhy" />

      <What
        title="Apa itu Scan Matematika di HarisLab ?"
        description="Scan Matematika di HarisLab adalah cara untuk mengerjakan soal tercepat yaitu scan saja soal matematika kalian, lalu mesin akan menganalisa foto kalian dan menampilkan jawaban beserta langkah-langkan mengerjakan soal matematika kalian."
      />
    </main>
  );
}
