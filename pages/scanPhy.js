import PhyTab from "../components/PhyTab";
import What from "../components/What";

export default function scanPhy() {
  return (
    <main  >
      <PhyTab in="Scan" to="scanMath" />

      <What
        title="Apa itu Scan Fisika di HarisLab ?"
        description="Scan fisika di HarisLab adalah cara untuk mengerjakan soal tercepat yaitu scan saja soal fisika kalian, lalu mesin akan menganalisa foto kalian dan menampilkan jawaban beserta langkah-langkan mengerjakan soal fisika kalian."
      />
    </main>
  );
}
