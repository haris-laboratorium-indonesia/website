import PhyTab from "../components/PhyTab";
import FlashCard from "../components/FlashCard";

export default function flashCardPhy() {
  return (
    <main className="max-w-5xl mx-auto px-5 sm:px-0">
      <PhyTab in="Card" to="flashCardMath" />

      <div>Kuantum</div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 my-5">
        <FlashCard />
      </div>
    </main>
  );
}
