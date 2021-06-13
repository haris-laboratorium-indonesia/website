import PhyTab from "../components/PhyTab";
import What from "../components/What";

export default function flashCardPhy() {
  return (
    <main>
      <PhyTab in="Card" to="flashCardMath" />

      <div>Kuantum</div>

      <What
        title="Apa itu Kartu Fisika di HarisLab ?"
        description="Kartu Fisika di HarisLab adalah tempat bagi murid untuk mereview sebuah potongan pelajaran, sangat cocok untuk kamu yang ingin mereview pelajaran sebelum uts, uas, ujian masuk, tanpa harus melihat seluruh materi yang panjang."
      />
    </main>
  );
}
