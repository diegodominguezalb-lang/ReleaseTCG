"use client";

import { useState } from "react";

import type { CommunityDeckSummary } from "@/types/community";

import PublishDeckDialog from "./PublishDeckDialog";
import CommunityDeckGrid from "./CommunityDeckGrid";
import CommunityFilters from "./CommunityFilters";

import { useCommunityDecks } from "../hooks/useCommunityDecks";

export type CommunityFilter =
  | "newest"
  | "popular"
  | "mine";

export default function CommunityBrowser() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<CommunityFilter>("newest");

  const { decks, loading } = useCommunityDecks({
    search,
    filter,
  });

  return (
    <div className="flex flex-col gap-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Community Decks
          </h1>

          <p className="text-muted-foreground">
            Browse guides, discover new strategies, and share your own decks.
          </p>
        </div>

        <PublishDeckDialog />
      </div>

      {/* Filters */}
      <CommunityFilters
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      {/* Grid */}
      <CommunityDeckGrid
        decks={decks}
        loading={loading}
      />
    </div>
  );
}