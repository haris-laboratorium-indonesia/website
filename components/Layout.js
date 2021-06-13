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
      {/* container-full*/}
      <nav className="fixed top-0  z-50 w-full h-auto mx-auto border-b blur text-[#1D1D1F]">
        {/* container-max-5xl */}
        <nav className="w-full max-w-5xl py-0 mx-auto md:py-2.5">
          {/* desktop navigation*/}
          <DesktopNav />
          {/* Mobile Navigation */}
          <MobileNav />
        </nav>
      </nav>
      <section className="mt-11 w-full max-w-5xl min-h-screen px-5 mx-auto lg:px-0 text-[#1D1D1F]">
        {children}
      </section>
      <Footer />
    </main>
  );
}