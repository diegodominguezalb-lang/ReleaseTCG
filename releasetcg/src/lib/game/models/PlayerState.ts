import { CardInstance } from "./CardInstance";

export interface PlayerState {
    id: string;

    health: number;

    leader: CardInstance;

    leaderDrawn: boolean;

    hand: CardInstance[];

    mainDeck: CardInstance[];

    extraDeck: CardInstance[];
}