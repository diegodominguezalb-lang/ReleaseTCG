import type { PlayableCard } from "@/types/cards";

import CommunityDeckSection, {
  DisplayCard,
} from "./CommunityDeckSection";

import CardPreviewPopup from "./CardPreviewPopup";

type Props = {
  deckTitle: string;
  author: string;
  leader: PlayableCard | null;

  mainDeck: DisplayCard[];
  extraDeck: DisplayCard[];

  hoveredCard: PlayableCard | null;
  hoverAnchor: DOMRect | null;

  setHoveredCardId: (
    id: string | null
  ) => void;

  setHoverAnchor: (
    anchor: DOMRect | null
  ) => void;
};

export default function CommunityDeckOverview({
  deckTitle,
  author,
  leader,
  mainDeck,
  extraDeck,
  hoveredCard,
  hoverAnchor,
  setHoveredCardId,
  setHoverAnchor,
}: Props) {
  return (
    <div className="relative">

      <div className="space-y-4 rounded-xl border bg-card p-5">

        {/* Leader */}
        <section className="rounded-lg border-2 p-4">
            <div className="flex gap-4">

                <CommunityDeckSection
                    cards={
                    leader
                        ? [{ card: leader, count: 1 }]
                        : []
                    }
                    setHoveredCardId={setHoveredCardId}
                    setHoverAnchor={setHoverAnchor}
                />
            
                <div className="flex flex-col justify-center">

                    <h2 className="text-2xl font-bold">
                        {deckTitle}
                    </h2>

                    <p className="text-muted-foreground">
                        by {author}
                    </p>
                </div>
            </div>
        </section>

        {/* Extra */}
        <section className="rounded-lg border-2 p-4">
          <CommunityDeckSection
            cards={extraDeck}
            setHoveredCardId={setHoveredCardId}
            setHoverAnchor={setHoverAnchor}
          />
        </section>

        {/* Main */}
        <section className="rounded-lg border-2 p-4">
          <CommunityDeckSection
            cards={mainDeck}
            setHoveredCardId={setHoveredCardId}
            setHoverAnchor={setHoverAnchor}
          />
        </section>

      </div>

      <CardPreviewPopup
        card={hoveredCard}
        anchor={hoverAnchor}
      />

    </div>
  );
}