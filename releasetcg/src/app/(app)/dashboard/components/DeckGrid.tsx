import type { DeckSummary } from "@/types/decks";

import DeckTile from "./DeckTile";

type Props = {
  decks: DeckSummary[];
};

export default function DeckGrid({ decks }: Props) {
  if (decks.length === 0) {
    return (
      <div
        className="rounded-xl border border-dashed p-12 text-center"
      >
        <h2 className="text-lg font-semibold">
          No saved decks
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Build a deck and press Save to see it here.
        </p>
      </div>
    );
  }

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">
        Your Decks
      </h2>

      <div
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
      >
        {decks.map((deck) => (
          <DeckTile
            key={deck.id}
            deck={deck}
          />
        ))}
      </div>
    </section>
  );
}