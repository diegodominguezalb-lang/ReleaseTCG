"use client";

import { useEffect, useState } from "react";

import type { CommunityDeck } from "@/types/community";

import { getCommunityDeck } from "@/utils/community";

import CommunityDeckHeader from "./CommunityDeckHeader";
import CommunityDeckDescription from "./CommunityDeckDescription";

type Props = {
  deckId: string;
};

export default function CommunityDeckPage({
  deckId,
}: Props) {
  const [deck, setDeck] =
    useState<CommunityDeck | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data =
          await getCommunityDeck(deckId);

        setDeck(data);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [deckId]);

  if (loading) {
    return (
      <div className="p-8">
        Loading deck...
      </div>
    );
  }

  if (!deck) {
    return (
      <div className="p-8">
        Deck not found.
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 p-6">

      <CommunityDeckHeader deck={deck} />

      <CommunityDeckDescription deck={deck} />

      {/* Deck viewer goes here */}

      {/* Comments go here */}

    </div>
  );
}