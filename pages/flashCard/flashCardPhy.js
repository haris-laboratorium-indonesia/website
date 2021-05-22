import PhyTab from "../../components/PhyTab";
import FlashCard from "../../components/FlashCard";

export default function flashCardPhy() {
  return (
    <>
      <PhyTab in="Flash Card" to="flashCardMath" />

      <div>Kuantum</div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 my-5">
        <FlashCard />
      </div>
    </>
  );
}
