import ChapterBox from "../../components/ChapterBox";
import TabMath from "../../components/TabMath";
import { useState, useEffect } from "react";

const matematika = () => {
  const [name, setName] = useState("");
  const handleChange = (e) => setName(e.target.value);
  const [name2, setName2] = useState("");
  const handleChange2 = (e) => setName2(e.target.value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);
  return (
    <main>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
      <div className="">
        <form action="">
          <label htmlFor="name">Name</label>
          <input onChange={handleChange} type="text" id="name" />
        </form>
        {name ? <strong>Hello {name}</strong> : "Please type your name"}
      </div>

      <div className="">
        <form action="">
          <label htmlFor="name2">Name2</label>
          <input onChange={handleChange2} type="text" id="name2" />
        </form>
        {name2 ? <strong>Hello {name2}</strong> : "Please type your name"}
      </div>

      <TabMath
        page="Materi"
        backTo="/materi/matematika"
        to="/materi/fisika"
        textColor="text-rose-500"
      />
      <section className="grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-4 sm:divide-y-0 ">
        <ChapterBox title="Lingkaran" to="matematika/linear" />
        <ChapterBox title="Integral Tentu" to="linear" />
        <ChapterBox title="Integral Tak Tentu" to="linear" />
        <ChapterBox title="Linear" to="linear" />
        <ChapterBox title="Kuadrat" to="linear" />
        <ChapterBox title="Suku Banyak" to="linear" />
        <ChapterBox title="Matriks" to="linear" />
        <ChapterBox title="Transformasi Geometri" to="linear" />
        <ChapterBox title="Geometri" to="linear" />
        <ChapterBox title="Trigonometri" to="linear" />
        <ChapterBox title="Logaritma" to="linear" />
        <ChapterBox title="Eksponen" to="linear" />
        <ChapterBox title="Turunan" to="linear" />
        <ChapterBox title="Limit" to="linear" />
        <ChapterBox title="Dimensi 3" to="linear" />
        <ChapterBox title="Vektor" to="linear" />
        <ChapterBox title="Barisan" to="linear" />
        <ChapterBox title="Deret" to="linear" />
        <ChapterBox title="Statistika" to="linear" />
        <ChapterBox title="Peluang" to="linear" />
      </section>
    </main>
  );
};
export default matematika;
