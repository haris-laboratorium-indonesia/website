import Head from "next/head";
import Footer from "./Footer";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Layout = ({ children }) => {
  return (
    <main className="font-inter">
      <Head>
        <title>HarisLab</title>
        <link rel="icon" href="/hahaha.ico" />
        <meta
          name="description"
          content="Tempat untuk belajar matematika dan fisika sebagaimana mereka seharusnya dipelajari."
        />
        <meta
          property="og:title"
          content="Belajar matematika dan fisika tidak pernah semudah ini."
        />
        <meta
          property="og:description"
          content="Tempat untuk belajar matematika dan fisika sebagaimana mereka seharusnya dipelajari."
        />
        <meta property="og:url" content="https://harislab.com/" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="z-50 w-full h-auto mx-auto bg-white">
        <main className="w-full max-w-5xl mx-auto">
          <NavDesktop />
          <NavMobile />
        </main>
      </main>

      <section className="w-full max-w-5xl min-h-screen px-5 pt-5 pb-10 mx-auto xl:px-0">
        {children}
      </section>

      <Footer />
    </main>
  );
};

export default Layout;
