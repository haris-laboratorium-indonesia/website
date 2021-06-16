import ComingSoon from "../components/ComingSoon";
import TabMath from "../components/TabMath";

export default function scanMath() {
  return (
    <>
      <TabMath page="Scan" textColor="text-blue-500" to="scanPhy" />
      <ComingSoon />
    </>
  );
}
