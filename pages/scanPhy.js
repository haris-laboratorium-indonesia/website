import ComingSoon from "../components/ComingSoon";
import TabPhy from "../components/TabPhy";

const scanPhy = () => {
  return (
    <>
      <TabPhy page="Scan" textColor="text-blue-500" to="scanMath" />
      <ComingSoon />
    </>
  );
};

export default scanPhy;
