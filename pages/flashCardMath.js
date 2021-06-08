import Image from "next/image";
import MathTab from "../components/MathTab";
import What from "../components/What";
import { Matriks } from "../lib/FlashCardMath";

export default function flashCardMath() {
  return (
    <main className="max-w-4xl mx-auto ">
      <div className="px-5 lg:px-0">
        <MathTab in="Card" to="flashCardPhy" />
      </div>

      <div className="px-5 mb-5 text-2xl font-semibold lg:px-0">Matriks</div>
      <div className="flex p-5 space-x-5 overflow-x-auto sm:p-5 ">
        {Matriks.map((Matrik) => (
          <div
            key={Matrik.id}
            className="flex-shrink-0 w-4/5 overflow-hidden rounded-lg shadow-2xl sm:w-1/5"
          >
            <div>
              <Image src={Matrik.pic} width="2000px" height="2000px" priority />
            </div>
            <div className="p-2 ">
              <div className="font-bold">{Matrik.title}</div>
              <p className="leading-tight text-gray-600">
                {Matrik.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="px-5 lg:px-0">
        <What
          title="Apa itu Kartu Fisika di HarisLab ?"
          description="Kartu Fisika di HarisLab adalah tempat bagi murid untuk mereview sebuah potongan pelajaran, sangat cocok untuk kamu yang ingin mereview pelajaran sebelum uts, uas, ujian masuk, tanpa harus melihat seluruh materi yang panjang."
        />
      </div>
    </main>
  );
}
