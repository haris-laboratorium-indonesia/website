import MathTab from "../components/MathTab";
import What from "../components/What";
export default function calculatorMath() {
  function tambah() {
    let angka1 = parseFloat(document.calculator.angka1.value);
    let angka2 = parseFloat(document.calculator.angka2.value);
    let hasil = angka1 + angka2;
    return (document.calculator.hasil.value = hasil);
  }
  return (
    <main className="max-w-4xl px-5 mx-auto lg:px-0">
      <MathTab in="Kalkulator" to="calculatorPhy" />
      <div>calculatorMath</div>
      <div className="flex flex-col w-1/3" name="calculator">
        <input className="bg-red-500" type="number" name="angka1" />
        <input className="bg-yellow-500" type="number" name="angka2" />
        <input className="bg-green-500" type="number" name="hasil" />
        <input
          className="bg-blue-500"
          type="button"
          onClick={tambah}
          value="x"
        />
      </div>
      <What
        title="Apa itu Kalkulator Matematika di HarisLab ?"
        description="Kalkulator Matematika di HarisLab adalah tempat untuk menghitung nilai dari sebuah rumus, jadi kamu sebagai siswa atau siapapun yang butuh untuk menghitung perhitungan yang melibatkan rumus matematika tingkat SMA tidak perlu menulis panjang-panjang di kertas, semua cara sudah kami masukkan dalam mesin kalkulator kami, kamu tinggal memasukkan nilai yang ingin kalian hitung. Ini mempercepat work flow kalian, luangkan waktu lebih banyak untuk menyelesaikan masalah dan memahaminya daripada menghitung yang bisa dilakukan oleh mesin."
      />
    </main>
  );
}
