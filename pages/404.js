import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/Layout";

const y = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);
  return (
    <Layout title="404" description="Kamu nyasar !">
      <div className="flex items-center justify-center text-3xl">
        Kamu nyasar !
      </div>
    </Layout>
  );
};

export default y;
