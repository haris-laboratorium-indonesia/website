import { useRouter } from "next/router";
import { useEffect } from "react";

const y = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);
  return (
    <div className="flex items-center justify-center text-3xl">
      Kamu nyasar !
    </div>
  );
};

export default y;
