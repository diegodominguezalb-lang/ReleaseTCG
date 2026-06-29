import type { CommunityDeck } from "@/types/community";

type Props = {
  deck: CommunityDeck;
};

export default function CommunityDeckDescription({
  deck,
}: Props) {
  return (
    <section className="rounded-xl border bg-card p-6">

      <h2 className="mb-4 text-xl font-semibold">
        Deck Guide
      </h2>

      <div
        className="
          whitespace-pre-wrap
          leading-7
          text-muted-foreground
        "
      >
        {deck.description}
      </div>

    </section>
  );
}