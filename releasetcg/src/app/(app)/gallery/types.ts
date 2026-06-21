export type PublicCard = {
  id: string;

  name: string;

  image_url: string;

  power: number;
  bulk: number;

  color1: string;
  color2: string;
  color3: string;
  color4: string;

  trait: string;

  effect1: string;
  effect2: string;

  flavor_text: string;
  description: string;

  artist: string;
  expansion: string;
};

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