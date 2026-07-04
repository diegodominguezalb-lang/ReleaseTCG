import { GamePhase } from "./GamePhase";

export interface TurnState {
    turn: number;

    activePlayerId: string;

    phase: GamePhase;
}