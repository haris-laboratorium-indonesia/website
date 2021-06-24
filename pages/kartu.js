import Judul from "../components/Judul";
import Layout from "../components/Layout";

const kartu = () => {
  return (
    <Layout
      title="Flash Card | Haris Lab"
      description="Flash Card untuk belajar"
    >
      <div>
        <Judul page="Flash Card" />
      </div>
    </Layout>
  );
};

export default kartu;
