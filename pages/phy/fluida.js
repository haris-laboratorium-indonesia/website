import useSWR from "swr";

async function fetcher(url) {
  const res = await fetch(url);
  return res.json();
}

export default function fluida() {
  const url = "http://localhost:3000/api/hello";
  const { data, error } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);
  const { iniData } = data;
  return (
    <main className="px-5">
      <header>fluida</header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ducimus
        repellendus perferendis enim rem expedita quos in animi cum nostrum,
        quam quis deserunt, natus nemo tempora odit dolores corporis.
        Repudiandae aliquid quae, similique, autem sed, illo exercitationem
        harum nam amet necessitatibus esse! Expedita, consequatur eius. Ex
        nostrum molestiae, saepe, velit sequi quidem aliquam laboriosam error
        suscipit, ipsam ea asperiores accusamus commodi voluptatem voluptatum
        sapiente modi nulla totam soluta iste facere. Ducimus at fugit hic
        dolorum nihil aut illo quod eius quos explicabo tempora culpa dolore cum
        reiciendis, animi ab quis laudantium consequatur! Voluptatum hic itaque
        iure fuga ducimus alias error.
      </p>
      {/* {data.map((a) => {
        <div key={a.id} className="grid grid-cols-5 gap-5">
          <div>{a.pic}</div>
          <div>{a.title}</div>
          <div>{a.subTitle}</div>
          <div>{a.description}</div>
        </div>;
      })} */}
      <div>{iniData}</div>
    </main>
  );
}
