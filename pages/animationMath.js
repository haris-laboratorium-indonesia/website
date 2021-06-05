import MathTab from "../components/MathTab";
import What from "../components/What";

export default function animationMath() {
  return (
    <main className="max-w-4xl px-5 mx-auto lg:px-0">
      <MathTab in="Animasi" to="animationPhy" />
      <What
        title="Apa itu Animasi Matematika di HarisLab ?"
        description="Animasi Matematika di HarisLab adalah tempat untuk membuat animasi secara otomatis, pertama kamu butuh memilih bab matematika apa yang mau di animasikan, lalu kamu isi parameter dan data yang dibutuhkan untuk mengenerate animasi."
      />
    </main>
  );
}
