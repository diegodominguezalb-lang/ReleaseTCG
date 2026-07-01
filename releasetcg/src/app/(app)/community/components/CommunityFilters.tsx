"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import type {
  CommunityFilter,
} from "./CommunityBrowser";

type Props = {
  search: string;

  setSearch: (
    value: string
  ) => void;

  filter: CommunityFilter;

  setFilter: (
    filter: CommunityFilter
  ) => void;
};

export default function CommunityFilters({
  search,
  setSearch,
  filter,
  setFilter,
}: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3">

      <Input
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        placeholder="Search decks..."
        className="max-w-sm"
      />

      <Button
        variant={
          filter === "newest"
            ? "secondary"
            : "ghost"
        }
        onClick={() =>
          setFilter("newest")
        }
      >
        Newest
      </Button>

      <Button
        variant={
          filter === "popular"
            ? "secondary"
            : "ghost"
        }
        onClick={() =>
          setFilter("popular")
        }
      >
        Popular
      </Button>

      <Button
        variant={
          filter === "mine"
            ? "secondary"
            : "ghost"
        }
        onClick={() =>
          setFilter("mine")
        }
      >
        My Posts
      </Button>

    </div>
  );
}