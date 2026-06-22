"use client";

import { useState } from "react";

import { CardDetails } from "@/types/cards";

import { CardModal } from "@/features/cards/CardModal";

import { useGalleryFilters } from "./hooks/useGalleryFilters";

import { GalleryFilters } from "./components/GalleryFilters";
import { GalleryGrid } from "./components/GalleryGrid";

type Props = {
  initialCards: CardDetails[];
};

export function Gallery({
  initialCards,
}: Props) {
  const {
    filters,
    filteredCards,

    setSearch,
    setExpansion,
    setColor,
    setSort,
    setDirection,
  } = useGalleryFilters(initialCards);

  const [selectedCard, setSelectedCard] =
    useState<CardDetails | null>(null);

  return (
    <div className="flex h-full flex-col">

      <GalleryFilters
        filters={filters}
        onSearch={setSearch}
        onExpansion={setExpansion}
        onColor={setColor}
        onSort={setSort}
        onDirection={setDirection}
      />

      <GalleryGrid
        cards={filteredCards}
        onCardClick={setSelectedCard}
      />

      <CardModal
        card={selectedCard}
        open={selectedCard !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedCard(null);
          }
        }}
      />

    </div>
  );
}