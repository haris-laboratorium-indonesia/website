import Head from "next/head";
import Footer from "./Footer";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Layout({ children }) {
  return (
    <main className="font-inter">
      <Head>
        <title>HarisLab</title>
        <link rel="icon" href="/h.ico" />
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

      <nav className="z-50 w-full h-auto mx-auto bg-white border-b border-gray-300">
        <nav className="w-full max-w-5xl mx-auto">
          <DesktopNav />
          <MobileNav />
        </nav>
      </nav>
      <section className="w-full max-w-5xl min-h-screen px-5 mx-auto mt-5 xl:px-0">
        {children}
      </section>
      <Footer />
    </main>
  );
}
