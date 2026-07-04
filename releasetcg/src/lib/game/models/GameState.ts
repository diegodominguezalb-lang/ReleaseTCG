import { BoardState } from "./BoardState";
import { CardInstance } from "./CardInstance";
import { PlayerState } from "./PlayerState";
import { PriorityState } from "./PriorityState";
import { TurnState } from "./TurnState";

export interface GameState {
    id: string;

    players: PlayerState[];

    board: BoardState;

    publicPile: CardInstance[];

    gap: CardInstance[];

    turn: TurnState;

    priority: PriorityState;

    winnerId: string | null;
}