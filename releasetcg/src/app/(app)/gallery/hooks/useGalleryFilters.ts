"use client";

import { useMemo, useState } from "react";

import {
  PublicCard,
  GalleryFilterState,
  GallerySort,
  SortDirection,
} from "../types";

export function useGalleryFilters(
  cards: PublicCard[]
) {

  const [filters, setFilters] =
    useState<GalleryFilterState>({
      search: "",
      expansion: "",
      color: "",
      sort: "name",
      direction: "asc",
    });

  function setSearch(search: string) {
    setFilters(prev => ({
      ...prev,
      search,
    }));
  }

  function setExpansion(expansion: string) {
    setFilters(prev => ({
      ...prev,
      expansion,
    }));
  }

  function setColor(color: string) {
    setFilters(prev => ({
      ...prev,
      color,
    }));
  }

  function setSort(sort: GallerySort) {
    setFilters(prev => ({
      ...prev,
      sort,
    }));
  }

  function setDirection(
    direction: SortDirection
  ) {
    setFilters(prev => ({
      ...prev,
      direction,
    }));
  }

  const filteredCards = useMemo(() => {

    const filtered = cards.filter(card => {

      if (
        filters.search &&
        !card.name
          .toLowerCase()
          .includes(
            filters.search.toLowerCase()
          )
      ) {
        return false;
      }

      if (
        filters.expansion &&
        card.expansion !== filters.expansion
      ) {
        return false;
      }

      if (
        filters.color &&
        ![
          card.color1,
          card.color2,
          card.color3,
          card.color4,
        ].includes(filters.color)
      ) {
        return false;
      }

      return true;

    });

    filtered.sort((a, b) => {

      let comparison = 0;

      switch (filters.sort) {

        case "power":
          comparison =
            a.power - b.power;
          break;

        case "bulk":
          comparison =
            a.bulk - b.bulk;
          break;

        case "expansion":
          comparison =
            a.expansion.localeCompare(
              b.expansion
            );
          break;

        default:
          comparison =
            a.name.localeCompare(
              b.name
            );

      }

      return filters.direction === "asc"
        ? comparison
        : -comparison;

    });

    return filtered;

  }, [cards, filters]);

  return {

    filters,

    filteredCards,

    setSearch,
    setExpansion,
    setColor,
    setSort,
    setDirection,

  };
}