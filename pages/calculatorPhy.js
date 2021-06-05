import PhyTab from "../components/PhyTab";
import What from "../components/What";

export default function calculatorPhy() {
  return (
    <main className="max-w-4xl px-5 mx-auto lg:px-0">
      <PhyTab in="Kalkulator" to="calculatorMath" />
      <What
        title="Apa itu Kalkulator Fisika di HarisLab ?"
        description="Kalkulator Fisika di HarisLab adalah tempat untuk menghitung nilai dari sebuah rumus, jadi kamu sebagai siswa atau siapapun yang butuh untuk menghitung perhitungan yang melibatkan rumus fisika tingkat SMA tidak perlu menulis panjang-panjang di kertas, semua cara sudah kami masukkan dalam mesin kalkulator kami, kamu tinggal memasukkan nilai yang ingin kalian hitung. Ini mempercepat work flow kalian, luangkan waktu lebih banyak untuk menyelesaikan masalah dan memahaminya daripada menghitung yang bisa dilakukan oleh mesin."
      />
    </main>
  );
}
