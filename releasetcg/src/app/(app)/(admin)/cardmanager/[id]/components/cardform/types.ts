export type DatabaseCard = {
  id: string;

  name: string;
  power: number;
  bulk: number;

  color1: string | null;
  color2: string | null;
  color3: string | null;
  color4: string | null;

  trait: string | null;

  effect1: string | null;
  effect2: string | null;

  flavor_text: string | null;
  description: string | null;

  artist: string | null;
  expansion: string | null;

  pool: string | null;

  image_url: string | null;
};

export type CardForm = {
  name: string;
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

  pool: string;

  image_url: string;
};

export type UpdateCardDTO = {
  id: string;
  data: CardForm;
};

export type UpdateCard = <K extends keyof CardForm>(
  key: K,
  value: CardForm[K]
) => void;