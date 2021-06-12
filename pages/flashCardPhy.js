import PhyTab from "../components/PhyTab";
import FlashCard from "../components/FlashCard";
import What from "../components/What";

export default function flashCardPhy() {
  return (
    <main  >
      <PhyTab in="Card" to="flashCardMath" />

      <div>Kuantum</div>
      <div className="grid grid-cols-1 gap-5 my-5 sm:grid-cols-4">
        <FlashCard />
      </div>
      <What
        title="Apa itu Kartu Fisika di HarisLab ?"
        description="Kartu Fisika di HarisLab adalah tempat bagi murid untuk mereview sebuah potongan pelajaran, sangat cocok untuk kamu yang ingin mereview pelajaran sebelum uts, uas, ujian masuk, tanpa harus melihat seluruh materi yang panjang."
      />
    </main>
  );
}
