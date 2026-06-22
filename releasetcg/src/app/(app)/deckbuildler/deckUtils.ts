export type DeckEntry = {
  cardId: string;
  count: number;
};

export type Deck = {
  leader: string | null;
  mainDeck: DeckEntry[];
  extraDeck: DeckEntry[];
};

export function getTotalCopies(deck: Deck, cardId: string): number {
  let total = 0;

  if (deck.leader === cardId) {
    total += 1;
  }

  for (const c of deck.mainDeck) {
    if (c.cardId === cardId) total += c.count;
  }

  for (const c of deck.extraDeck) {
    if (c.cardId === cardId) total += c.count;
  }

  return total;
}

export function getMaxCopies(cardColors: number): number {
  return cardColors === 1 || cardColors === 4 ? 1 : 2;
}

export function addCard(
  deck: Deck,
  cardId: string,
  zone: "main" | "extra"
): Deck {
  const key = zone === "main" ? "mainDeck" : "extraDeck";

  const existing = deck[key].find((c) => c.cardId === cardId);

  if (existing) {
    return {
      ...deck,
      [key]: deck[key].map((c) =>
        c.cardId === cardId ? { ...c, count: c.count + 1 } : c
      ),
    };
  }

  return {
    ...deck,
    [key]: [...deck[key], { cardId, count: 1 }],
  };
}

export function removeCard(
  deck: Deck,
  cardId: string,
  zone: "main" | "extra"
): Deck {
  const key = zone === "main" ? "mainDeck" : "extraDeck";

  return {
    ...deck,
    [key]: deck[key]
      .map((c) =>
        c.cardId === cardId ? { ...c, count: c.count - 1 } : c
      )
      .filter((c) => c.count > 0),
  };
}

export function setLeader(deck: Deck, cardId: string): Deck {
  return {
    ...deck,
    leader: cardId,
  };
}

export function getDeckCounts(deck: Deck) {
  const main = deck.mainDeck.reduce((a, b) => a + b.count, 0);
  const extra = deck.extraDeck.reduce((a, b) => a + b.count, 0);

  return { main, extra };
}