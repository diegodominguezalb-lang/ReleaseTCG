import { createEmptyCard } from "@/lib/cards/createEmptyCard";
import { CardDetailsForm } from "../[id]/components/cardform/CardDetailsForm";

export default function NewCardPage() {
  const emptyCard = createEmptyCard();

  return (
    <main className="h-screen">
      <CardDetailsForm initial={emptyCard} />
    </main>
  );
}