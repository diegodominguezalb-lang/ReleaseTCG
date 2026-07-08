import {
    GamePhase,
    TurnState,
} from "../models";

export function createTurnState(
    firstPlayerId: string
): TurnState {
    return {
        turn: 1,
        activePlayerId: firstPlayerId,
        phase: GamePhase.Action,
    };
}