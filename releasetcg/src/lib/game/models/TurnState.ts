import {
    TurnPhase,
} from "@/lib/game/models";

export interface TurnState {

    /**
     * Whose turn is it?
     */
    currentPlayerId: string;

    /**
     * Starts at 1.
     */
    turnNumber: number;

    /**
     * Current phase of the turn.
     */
    phase: TurnPhase;

    /**
     * Indicates when to switch from Action to Fill Phase
     */
    actionTaken: boolean;

}