import Head from "next/head";
import Footer from "./Footer";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Layout({ children }) {
  return (
    <main className="font-inter">
      <Head>
        <title>HarisLab</title>
        <link rel="icon" href="/z.ico" />
      </Head>

      <nav className=" z-50 w-full  mx-auto border-b border-gray-400 blur text-[#1D1D1F] h-11">
        <nav className="w-full max-w-5xl mx-auto">
          <DesktopNav />
          <MobileNav />
        </nav>
      </nav>
      <section className="w-full max-w-5xl mt-5  px-4 mx-auto xl:px-0 text-[#1D1D1F] min-h-screen">
        {children}
      </section>
      <Footer />
    </main>
  );
}
