"use client";

import { PublicCard } from "./types";

import { useGalleryFilters } from "./hooks/useGalleryFilters";

import { GalleryFilters } from "./components/GalleryFilters";
import { GalleryGrid } from "./components/GalleryGrid";

type Props = {
  initialCards: PublicCard[];
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

      <GalleryGrid cards={filteredCards} />

    </div>
  );
}