import Layout from "@/components/Layout";
import Title from "@/components/Title";

const portofolio = () => {
  return (
    <Layout browserTitle="Portofolio" description="Harits Syah Portofolio">
      <Title name="Portofolio" />

      <section className="space-y-5">
        <a
          href="https://www.aka-tradingindo.com/"
          target="_blank"
          className=" block w-full sm:w-1/3 font-medium px-4 py-2  text-center 
        border-2 rounded-md border-[#5E725B] bg-[#5E725B] hover:bg-white text-white hover:text-[#5E725B]"
        >
          AKA Trading Indonesia
        </a>

        <a
          href="https://harislab.com/"
          target="_blank"
          className="block w-full px-4 py-2 font-medium text-center text-white bg-gray-800 border-2 border-gray-800 rounded-md sm:w-1/3 hover:text-gray-800 hover:bg-white"
        >
          HarisLab
        </a>
      </section>
    </Layout>
  );
};

export default portofolio;
