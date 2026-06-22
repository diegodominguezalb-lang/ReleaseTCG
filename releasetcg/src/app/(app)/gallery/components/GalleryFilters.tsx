"use client";

import {
  GalleryFilterState,
  GallerySort,
  SortDirection,
} from "../types";

import { TextInput } from "@/app/(app)/components/fields/TextInput";
import { SelectInput } from "@/app/(app)/components/fields/SelectInput";

import {
  COLOR_OPTIONS,
} from "../../(admin)/cardmanager/[id]/components/cardform/constants";

const SORT_OPTIONS: {
  label: string;
  value: GallerySort;
}[] = [
  {
    label: "Name",
    value: "name",
  },
  {
    label: "Power",
    value: "power",
  },
  {
    label: "Bulk",
    value: "bulk",
  },
  {
    label: "Expansion",
    value: "expansion",
  },
];

type Props = {

  filters: GalleryFilterState;

  onSearch(value: string): void;

  onExpansion(value: string): void;

  onColor(value: string): void;

  onSort(value: GallerySort): void;

  onDirection(
    value: SortDirection
  ): void;
};

export function GalleryFilters({

  filters,

  onSearch,
  onExpansion,
  onColor,
  onSort,
  onDirection,

}: Props) {

  return (

    <div className="sticky top-0 z-20 border-b bg-background p-4">

      <div className="grid grid-cols-5 gap-4">

        <TextInput
          label="Search"
          value={filters.search}
          onChange={onSearch}
        />

        <TextInput
          label="Expansion"
          value={filters.expansion}
          onChange={onExpansion}
        />

        <SelectInput
          label="Color"
          value={filters.color}
          options={COLOR_OPTIONS}
          onChange={onColor}
        />

        <SelectInput
          label="Sort"
          value={filters.sort}
          options={SORT_OPTIONS.map(
            option => option.value
          )}
          onChange={value =>
            onSort(value as GallerySort)
          }
        />

        <div>

          <label className="mb-1 block font-medium">
            Direction
          </label>

          <button
            onClick={() =>
              onDirection(
                filters.direction === "asc"
                  ? "desc"
                  : "asc"
              )
            }
            className="w-full rounded border p-2 hover:bg-muted"
          >
            {filters.direction === "asc"
              ? "↑ Ascending"
              : "↓ Descending"}
          </button>

        </div>

      </div>

    </div>

  );
}