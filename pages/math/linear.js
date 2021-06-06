import { Client } from "@notionhq/client";

export default function linear({ formulas }) {
  console.log(formulas);
  return (
    <main className="max-w-4xl px-5 mx-auto lg:px-0">
      <header>linear</header>

      <div className="grid max-w-4xl grid-cols-3 gap-5 prose bg-blue-500">
        {formulas.map((formula) => (
          <table key={formula.id} className="table-auto">
            <thead>
              <tr>
                <th>$${formula.properties.Judul.title[0].plain_text}$$</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{formula.properties.Rumus.rich_text[0].plain_text}</td>
              </tr>
              <tr>
                <td>{formula.properties.Satuan.rich_text[0].plain_text}</td>
              </tr>
            </tbody>
          </table>
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
