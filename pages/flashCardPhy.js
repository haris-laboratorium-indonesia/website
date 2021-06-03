import PhyTab from "../components/PhyTab";
import FlashCard from "../components/FlashCard";

export default function flashCardPhy() {
  return (
    <main className="max-w-4xl px-5 mx-auto lg:px-0">
      <PhyTab in="Card" to="flashCardMath" />

      <div>Kuantum</div>
      <div className="grid grid-cols-1 gap-5 my-5 sm:grid-cols-4">
        <FlashCard />
      </div>
    </main>
  );
}
