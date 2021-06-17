import Head from "next/head";

// Head ChapterLayout bentrok sama Head di /components/Layout.js ?

const ChapterLayout = ({ title, description, children }) => {
  return (
    <main>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/hahaha.ico" />
        <meta />
        <meta name="robots" content="follow, index" />
        <meta content={description} name="description" />
        {/* <meta property="og:url" content={`https://leerob.io${router.asPath}`} /> */}
        {/* <link rel="canonical" href={`https://leerob.io${router.asPath}`} /> */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Haris Lab" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content="/HarisLab.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@haritssr" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/HarisLab.png" />
        {/* {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )} */}
        
      </Head>
      <main className="grid gap-5 grid-col-1 sm:grid-cols-4">{children}</main>
    </main>
  );
};

export default ChapterLayout;


//masalah ketika ingin merender katex dan menggunakan document.{something}, maka document tidak diketahui