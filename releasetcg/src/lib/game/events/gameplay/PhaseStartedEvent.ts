import { TurnPhase } from "@/lib/game/models";

import { EventType } from "../EventType";
import { GameplayEvent } from "./GameplayEvent";

export interface PhaseStartedEvent extends GameplayEvent {
    type: EventType.PhaseStarted;

    phase: TurnPhase;
}