import MathPhyOption from "../../components/MathPhyOption";
import FlashCard from "../../components/FlashCard";

export default function flashCardPhy() {
  return (
    <>
      <MathPhyOption
        currentPage="Flash Card Fisika"
        anotherPage="Flash Card Matematika"
        page="/flashCard/flashCardMath"
      />
      <div>Kuantum</div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 my-5">
        <FlashCard />
      </div>
    </>
  );
}
