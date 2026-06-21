export type GallerySort =
  | "name"
  | "power"
  | "bulk"
  | "expansion";

export type SortDirection =
  | "asc"
  | "desc";

export type GalleryFilterState = {
  search: string;
  expansion: string;
  color: string;

  sort: GallerySort;
  direction: SortDirection;
};