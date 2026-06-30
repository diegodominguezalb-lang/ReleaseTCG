"use client";

import { useEffect, useState } from "react";

import type { CommunityDeck } from "@/types/community";
import { getCommunityDeck } from "@/utils/community";

import { useCards } from "@/app/(app)/deckbuildler/hooks/useCards";
import { useCommunityDeck } from "../hooks/useCommunityDeck";

import CommunityGuide from "./CommunityGuide/CommunityGuide";
import CommunityDeckOverview from "./CommunityDeckOverview";

type Props = {
  deckId: string;
};

function handleEdit() {
  console.log("Edit");
}

function handleDelete() {
  console.log("Delete");
}

function handleExportCode() {
  console.log("Export Code");
}

function handleExportImage() {
  console.log("Export Image");
}

export default function CommunityDeckPage({
  deckId,
}: Props) {
  const [deck, setDeck] =
    useState<CommunityDeck | null>(null);

  const [hoveredCardId, setHoveredCardId] =
    useState<string | null>(null);

  const [hoverAnchor, setHoverAnchor] =
    useState<DOMRect | null>(null);

  const {
    cards,
    loading: cardsLoading,
  } = useCards();

  useEffect(() => {
    async function loadDeck() {
      try {
        const communityDeck =
          await getCommunityDeck(deckId);

        setDeck(communityDeck);
      } catch (error) {
        console.error(error);
      }
    }

    loadDeck();
  }, [deckId]);

  const {
    cardMap,
    leaderCard,
    mainDeckCards,
    extraDeckCards,
  } = useCommunityDeck(deck, cards);

  const hoveredCard =
    hoveredCardId
      ? cardMap.get(hoveredCardId) ?? null
      : null;

  if (cardsLoading || !deck) {
    return (
      <div className="p-6">
        Loading...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="grid grid-cols-2 gap-8">
        <div className="border-4 border-green-500">
          <CommunityGuide
            title={deck.title}
            author={deck.author}
            description={deck.description}
          />
        </div>

        <div className="border-4 border-yellow-500">
          <CommunityDeckOverview
            deckTitle={deck.title}
            author={deck.author}
            leader={leaderCard}
            mainDeck={mainDeckCards}
            extraDeck={extraDeckCards}
            hoveredCard={hoveredCard}
            hoverAnchor={hoverAnchor}
            setHoveredCardId={setHoveredCardId}
            setHoverAnchor={setHoverAnchor}
          />
        </div>
        

      </div>
    </div>
  );
}