import { StackReference } from "@/lib/game/refs";

import { EventType } from "../EventType";
import { GameplayEvent } from "./GameplayEvent";

export interface AttackStartedEvent extends GameplayEvent {
    type: EventType.AttackStarted;

    attacker: StackReference;
}