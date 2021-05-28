import { Client } from "@notionhq/client";

export default function linear({ formulas }) {
  console.log(formulas);
  return (
    <main className="px-5 ">
      <header>linear</header>

      <div className="grid grid-cols-3 gap-2 bg-blue-500 p-5">
        {formulas.map((formula) => (
          <a
            key={formula.id}
            href="aka-tradingindo.com"
            className="p-2 rounded-md"
          >
            <div>{formula.properties.Judul.title[0].plain_text}</div>
            <div>{formula.properties.Rumus.rich_text[0].plain_text}</div>
            <div>
              {formula.properties.Satuan.rich_text[0].plain_text}
              {formula.properties.Satuan.rich_text[1].plain_text}
              {formula.properties.Satuan.rich_text[2].plain_text}
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });
  return {
    props: {
      formulas: response.results,
    },
  };
}
