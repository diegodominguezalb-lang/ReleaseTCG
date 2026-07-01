import { CommunityDeckSummary }  from "@/types/community"

import CommunityDeckTile from "./CommunityDeckTile"

type Props = {
  decks: CommunityDeckSummary[];
  loading: boolean;
};

export default function CommunityDeckGrid({
  decks,
  loading,
}: Props) {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!decks.length) {
    return (
      <div className="text-muted-foreground">
        No decks found.
      </div>
    );
  }

  return (
    <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {decks.map((deck) => (
        <CommunityDeckTile
          key={deck.id}
          deck={deck}
        />
      ))}
    </div>
  );
}