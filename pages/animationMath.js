import MathTab from "../components/MathTab";
import What from "../components/What";

export default function animationMath() {
  return (
    <main className="max-w-4xl px-5 mx-auto mt-14 lg:px-0">
      <MathTab in="Animasi" to="animationPhy" />
      <What
        title="Apa itu Animasi Matematika di HarisLab ?"
        description="Animasi Matematika di HarisLab adalah tempat untuk membuat animasi secara otomatis, pertama kamu butuh memilih bab matematika apa yang mau di animasikan, lalu kamu isi parameter dan data yang dibutuhkan untuk mengenerate animasi."
      />

      <ul className="flex flex-col list-disc">
        <li>
          <a
            className="text-blue-500 underline hover:no-underline"
            href="#Pengenalan"
          >
            Pengenalan
          </a>
        </li>
        <li>
          <a
            className="text-blue-500 underline hover:no-underline"
            href="#Variabel"
          >
            Variabel Konstanta{" "}
          </a>
        </li>
        <li>
          <a
            className="text-blue-500 underline hover:no-underline"
            href="#Rumus"
          >
            Rumus
          </a>
        </li>
        <li>
          <a
            className="text-blue-500 underline hover:no-underline"
            href="#PenurunanRumus"
          >
            Penurunan Rumus
          </a>
        </li>
        <li>
          <a
            className="text-blue-500 underline hover:no-underline"
            href="#ContohSoal"
          >
            Penurunan Rumus
          </a>
        </li>
      </ul>

      <div className="my-20 space-y-10">
        <section id="Pengenalan">
          <div className="text-2xl font-bold">Pengenalan</div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae iure
          facilis ut vitae, laboriosam quaerat. Expedita, error impedit. Atque
          illum dolores laudantium animi, delectus sed id voluptates neque quasi
          quisquam, totam natus laborum tempora corrupti veniam nisi
          accusantium, incidunt labore praesentium sint. Atque at reiciendis
          nihil est commodi incidunt dolor!
        </section>
        <section id="Variabel">
          <div className="text-2xl font-bold">Variabel</div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
          temporibus quasi numquam ea adipisci, vero magnam voluptatibus
          reiciendis in ratione iste aspernatur delectus necessitatibus eius
          cupiditate earum veritatis sed, ipsam rerum dicta molestiae fugiat.
          Deleniti aspernatur explicabo dolore nam, dolor fuga? Fugit nulla
          possimus, a nihil, consequuntur laborum architecto aut distinctio
          porro ipsam cupiditate enim iure eum provident vel quo, aperiam
          tempora veniam ratione in aliquam laudantium libero minus quidem?
          Ducimus magni explicabo voluptatem blanditiis. Repellendus officiis
          minima incidunt omnis atque accusantium voluptatibus deleniti optio
          eos repudiandae velit eaque dolorem iusto aspernatur, recusandae cum
          sapiente consequatur adipisci, assumenda placeat molestias?
        </section>
        <section id="Rumus">
          <div className="text-2xl font-bold">Rumus</div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
          temporibus quasi numquam ea adipisci, vero magnam voluptatibus
          reiciendis in ratione iste aspernatur delectus necessitatibus eius
          cupiditate earum veritatis sed, ipsam rerum dicta molestiae fugiat.
          Deleniti aspernatur explicabo dolore nam, dolor fuga? Fugit nulla
          possimus, a nihil, consequuntur laborum architecto aut distinctio
          porro ipsam cupiditate enim iure eum provident vel quo, aperiam
          tempora veniam ratione in aliquam laudantium libero minus quidem?
          Ducimus magni explicabo voluptatem blanditiis. Repellendus officiis
          minima incidunt omnis atque accusantium voluptatibus deleniti optio
          eos repudiandae velit eaque dolorem iusto aspernatur, recusandae cum
          sapiente consequatur adipisci, assumenda placeat molestias?
        </section>
        <section id="PenurunanRumus">
          <div className="text-2xl font-bold">Penurunan Rumus</div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
          temporibus quasi numquam ea adipisci, vero magnam voluptatibus
          reiciendis in ratione iste aspernatur delectus necessitatibus eius
          cupiditate earum veritatis sed, ipsam rerum dicta molestiae fugiat.
          Deleniti aspernatur explicabo dolore nam, dolor fuga? Fugit nulla
          possimus, a nihil, consequuntur laborum architecto aut distinctio
          porro ipsam cupiditate enim iure eum provident vel quo, aperiam
          tempora veniam ratione in aliquam laudantium libero minus quidem?
          Ducimus magni explicabo voluptatem blanditiis. Repellendus officiis
          minima incidunt omnis atque accusantium voluptatibus deleniti optio
          eos repudiandae velit eaque dolorem iusto aspernatur, recusandae cum
          sapiente consequatur adipisci, assumenda placeat molestias?
        </section>
        <section id="ContohSoal">
          <div className="text-2xl font-bold">Contoh Soal</div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
          temporibus quasi numquam ea adipisci, vero magnam voluptatibus
          reiciendis in ratione iste aspernatur delectus necessitatibus eius
          cupiditate earum veritatis sed, ipsam rerum dicta molestiae fugiat.
          Deleniti aspernatur explicabo dolore nam, dolor fuga? Fugit nulla
          possimus, a nihil, consequuntur laborum architecto aut distinctio
          porro ipsam cupiditate enim iure eum provident vel quo, aperiam
          tempora veniam ratione in aliquam laudantium libero minus quidem?
          Ducimus magni explicabo voluptatem blanditiis. Repellendus officiis
          minima incidunt omnis atque accusantium voluptatibus deleniti optio
          eos repudiandae velit eaque dolorem iusto aspernatur, recusandae cum
          sapiente consequatur adipisci, assumenda placeat molestias?
        </section>
      </div>
    </main>
  );
}
