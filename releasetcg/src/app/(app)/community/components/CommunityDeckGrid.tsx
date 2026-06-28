"use client";

import { useEffect, useState } from "react";

import type { CommunityDeckSummary } from "@/types/community";

import { listCommunityDecks } from "@/utils/community";

import CommunityDeckTile from "./CommunityDeckTile";

export default function CommunityDeckGrid() {
  const [decks, setDecks] = useState<
    CommunityDeckSummary[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data =
          await listCommunityDecks();

        setDecks(data);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return (
      <div className="text-muted-foreground">
        Loading...
      </div>
    );
  }

  if (decks.length === 0) {
    return (
      <div className="text-muted-foreground">
        No published decks yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
    >
      {decks.map((deck) => (
        <CommunityDeckTile
          key={deck.id}
          deck={deck}
        />
      ))}
    </div>
  );
}