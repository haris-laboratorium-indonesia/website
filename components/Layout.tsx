import Head from "next/head";
import Footer from "./Footer";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Layout = ({ children, browserTitle, description }) => {
  const image = "https://harislab.com/public/HarisLab.png";
  const type = "website";
  return (
    <>
      <Head>
        <title>{browserTitle} - HarisLab</title>
        <link rel="icon" href="/hahaha.ico" />
        <meta name="robots" content="follow, index" />
        <meta content={description} name="description" />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content="Haris Lab" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={browserTitle} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@haritssr" />
        <meta name="twitter:title" content={browserTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>

      <div className="bg-gray-800">
        <NavDesktop />
        <NavMobile />
      </div>

      <section className="w-full max-w-4xl min-h-screen px-5 mx-auto xl:px-0 font-inter">
        {children}
      </section>

      <Footer />
    </>
  );
};

export default Layout;
