import type { PlayableCard } from "@/types/cards";

import CommunityDeckSection, {
  DisplayCard,
} from "./CommunityDeckSection";

import CardPreviewPopup from "./CardPreviewPopup";

type Props = {
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
        <section className="rounded-lg border-2 border-amber-500/70 bg-amber-500/5 p-4">

          <CommunityDeckSection
            cards={
              leader
                ? [{ card: leader, count: 1 }]
                : []
            }
            setHoveredCardId={setHoveredCardId}
            setHoverAnchor={setHoverAnchor}
          />
        </section>

        {/* Extra */}
        <section className="rounded-lg border-2 border-sky-500/70 bg-sky-500/5 p-4">
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