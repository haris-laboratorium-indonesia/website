import { Client } from "@notionhq/client";

// export default function fisika({ babFisika }) {
//   console.log(babFisika);
//   return (
//     <main className="max-w-4xl px-5 mx-auto lg:px-0">
//       <header>linear</header>

//       <div className="grid grid-cols-3 gap-2 p-5 prose bg-blue-500">
//         {babFisika.map((formula) => (
          
//         ))}
//       </div>
//     </main>
//   );
// }

export async function getStaticProps() {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const response = await notion.databases.query({
      database_id: process.env.FISIKA_NOTION,
    });
    return {
      props: {
        babFisika: response.results,
      },
    };
  }