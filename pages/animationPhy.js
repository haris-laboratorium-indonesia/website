import PhyTab from "../components/PhyTab";
import What from "../components/What";

export default function animationPhy() {
  return (
    <main className="max-w-4xl px-5 mx-auto lg:px-0">
      <PhyTab in="Animasi" to="animationMath" />

      <What
        title="Apa itu Animasi Fisika di HarisLab ?"
        description="Animasi Fisika di HarisLab adalah tempat untuk membuat animasi berdasarkan bab fisika yang kamu pilih, setelah itu kamu harus memasukkan parameter dari sebuah fungsi atau rumus, karena setiap rumus fisika pada dasarnya adalah sebuah fungsi gerak, jadi semua rumus fisika bisa di animasikan, setelah itu masukkan nilai parameternya dan data yang dibutuhkan untuk membuat animasi. Animasi memberikan kita kejernihan berfikir, dan sebenarnya seperti inilah seharusnya sebuah pelajaran fisika dipelajari."
      />
    </main>
  );
}
