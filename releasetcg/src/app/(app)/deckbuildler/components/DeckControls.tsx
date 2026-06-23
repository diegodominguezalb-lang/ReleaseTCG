"use client";

import type { Deck } from "../types";
import type { PlayableCard } from "@/types/cards";

type Zone = "leader" | "main" | "extra";

interface Props {
  deck: Deck;
  activeZone: Zone;
  setActiveZone: (zone: Zone) => void;

  leaderCard: PlayableCard | null;
}

export default function DeckControls({
  deck,
  activeZone,
  setActiveZone,
  leaderCard,
}: Props) {
  const hasLeader = !!deck.leader;

  return (
    <div className="flex items-center justify-between rounded-lg border p-3">

      {/* LEFT: MODE + CONTEXT */}
      <div className="flex flex-col">
        <div className="text-sm">
          <span className="text-muted-foreground">Mode: </span>

          <span className="font-medium capitalize">
            {activeZone}
          </span>
        </div>

        <div className="text-xs text-muted-foreground">
          {activeZone === "leader" && "Click a card to set your leader"}
          {activeZone === "main" && "Click cards to add to main deck"}
          {activeZone === "extra" && "Click cards to add to extra deck"}
        </div>
      </div>

      {/* RIGHT: ZONE SELECTOR */}
      <div className="flex gap-2">

        <button
          onClick={() => setActiveZone("leader")}
          className={`
            rounded border px-3 py-1 transition
            ${
              activeZone === "leader"
                ? "bg-blue-100 border-blue-400"
                : "hover:bg-muted"
            }
          `}
        >
          Leader
        </button>

        <button
          onClick={() => setActiveZone("main")}
          disabled={!hasLeader}
          className={`
            rounded border px-3 py-1 transition
            ${
              activeZone === "main"
                ? "bg-green-100 border-green-400"
                : "hover:bg-muted"
            }
            disabled:opacity-50
          `}
        >
          Main
        </button>

        <button
          onClick={() => setActiveZone("extra")}
          disabled={!hasLeader}
          className={`
            rounded border px-3 py-1 transition
            ${
              activeZone === "extra"
                ? "bg-purple-100 border-purple-400"
                : "hover:bg-muted"
            }
            disabled:opacity-50
          `}
        >
          Extra
        </button>
      </div>
    </div>
  );
}