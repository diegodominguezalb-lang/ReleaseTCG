"use client";

import { useMemo, useState } from "react";

import { CardSummary } from "@/types/cardSummary";

import { CardManagerHeader } from "./components/CardManagerHeader";
import { CardFilters } from "./components/CardFilters";
import { CardTable } from "./components/CardTable";

import { filterCards, CardFilters as FiltersType } from "./utils/filterCards";

type Props = {
  cards: CardSummary[];
};

export function CardManager({ cards }: Props) {
  const [filters, setFilters] = useState<FiltersType>({
    search: "",
    pool: "all",
    power: "all",
    bulk: "all",
    color: "all",
  });

  const filteredCards = useMemo(() => {
    return filterCards(cards, filters);
  }, [cards, filters]);

  const counts = useMemo(() => {
    return {
      all: cards.length,
      draft: cards.filter((c) => c.pool === "draft").length,
      private: cards.filter((c) => c.pool === "private").length,
      beta: cards.filter((c) => c.pool === "beta").length,
      public: cards.filter((c) => c.pool === "public").length,
    };
  }, [cards]);

  return (
    <div className="space-y-6">
      <CardManagerHeader />

      <CardFilters
        filters={filters}
        setFilters={setFilters}
        counts={counts}
      />

      <p className="text-sm text-muted-foreground">
        Showing {filteredCards.length} of {cards.length} cards
      </p>

      <CardTable cards={filteredCards} />
    </div>
  );
}