import TabPhy from "../components/TabPhy";
import What from "../components/What";

export default function flashCardPhy() {
  return (
    <main>
      <TabPhy page="Card" to="flashCardMath" textColor="text-yellow-500 " />

      <div>Kuantum</div>

      <What
        title="Apa itu Kartu Fisika di HarisLab ?"
        description="Kartu Fisika di HarisLab adalah tempat bagi murid untuk mereview sebuah potongan pelajaran, sangat cocok untuk kamu yang ingin mereview pelajaran sebelum uts, uas, ujian masuk, tanpa harus melihat seluruh materi yang panjang."
      />
    </main>
  );
}
