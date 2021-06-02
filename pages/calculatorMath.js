import MathTab from "../components/MathTab";

export default function calculatorMath() {
  function tambah() {
    let angka1 = parseFloat(document.calculator.angka1.value);
    let angka2 = parseFloat(document.calculator.angka2.value);
    let hasil = angka1 + angka2;
    return (document.calculator.hasil.value = hasil);
  }
  return (
    <main className="max-w-5xl mx-auto px-5 sm:px-0">
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
    </main>
  );
}
