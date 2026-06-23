export type DeckEntry = {
  cardId: string;
  count: number;
};

export type SavedDeck = {
  id: string;
  ownerId: string;

  name: string;

  leader: string;

  mainDeck: DeckEntry[];
  extraDeck: DeckEntry[];


  createdAt: string;
  updatedAt: string;
};

export type DeckSummary = {
    id: string;

    name: string;

    leader: string;

    updatedAt: string;
}

export type DeckExport = {
    leader: string;

    mainDeck: DeckEntry[];

    extraDeck: DeckEntry[];
}

export type DeckValidationResult = {
  valid: boolean;
  errors: string[];
};