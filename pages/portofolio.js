import Judul from '../components/Judul'
import Layout from '../components/Layout'

const portofolio = () => {
  return (
    <Layout title="Potofolio" description="Harits Syah Portofolio">
      <Judul page="Portofolio" textColor="text-black" />
      <section className="space-y-5">
        <article className="w-full sm:w-1/3 font-medium px-4 py-2  text-center border-2 rounded-md border-[#5E725B] bg-[#5E725B] hover:bg-white text-white hover:text-[#5E725B]">
          <a href="https://www.aka-tradingindo.com/" target="_blank">
            AKA Trading Indonesia
          </a>
        </article>
        <article className="w-full px-4 py-2 font-medium text-center text-white bg-gray-800 border-2 border-gray-800 rounded-md sm:w-1/3 hover:text-gray-800 hover:bg-white">
          <a href="https://harislab.com/" target="_blank">
            HarisLab
          </a>
        </article>
      </section>
    </Layout>
  )
}

export default portofolio
