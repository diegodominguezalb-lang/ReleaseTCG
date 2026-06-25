export type DeckEntry = {
  cardId: string;
  count: number;
};

export type Deck = {
  id?: string;
  name: string;

  leader: string | null;

  mainDeck: DeckEntry[];
  extraDeck: DeckEntry[];
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

  leaderId: string | null;
  leaderName: string | null;
  leaderImage: string | null;

  updatedAt: string;
};

export type DeckExport = {
    leader: string;

    mainDeck: DeckEntry[];

    extraDeck: DeckEntry[];
}

export type DeckValidationResult = {
  valid: boolean;
  errors: string[];
};

export type GetValidatedDeckResult = {
  deck: DeckExport | null;
  validation: DeckValidationResult;
};

export type GetImportedDeckResult = {
  deck: Deck | null;
  validation: DeckValidationResult;
};