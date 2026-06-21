import { AdminCardSummary } from "@/types/cards";

export type CardFilters = {
  search: string;
  pool: string;
  power: string;
  bulk: string;
  color: string;
};

function matchesSearch(card: AdminCardSummary, query: string) {
  if (!query.trim()) return true;

  const q = query.toLowerCase();

  const searchable = [
    card.name,
    card.trait,
    card.effect1,
    card.effect2,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return searchable.includes(q);
}

function matchesPool(card: AdminCardSummary, pool: string) {
  return pool === "all" || card.pool === pool;
}

function matchesPower(card: AdminCardSummary, power: string) {
  return power === "all" || card.power === Number(power);
}

function matchesBulk(card: AdminCardSummary, bulk: string) {
  return bulk === "all" || card.bulk === Number(bulk);
}

function matchesColor(card: AdminCardSummary, color: string) {
  return color === "all" || card.palette.includes(color);
}

export function filterCards(
  cards: AdminCardSummary[],
  filters: CardFilters
) {
  return cards.filter((card) => {
    return (
      matchesSearch(card, filters.search) &&
      matchesPool(card, filters.pool) &&
      matchesPower(card, filters.power) &&
      matchesBulk(card, filters.bulk) &&
      matchesColor(card, filters.color)
    );
  });
}