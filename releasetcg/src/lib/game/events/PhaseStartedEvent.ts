import { GamePhase } from "@/lib/game/models";

import { EventType } from "./EventType";
import { GameEvent } from "./GameEvent";

export interface PhaseStartedEvent extends GameEvent {
    type: EventType.PhaseStarted;

    phase: GamePhase;
}