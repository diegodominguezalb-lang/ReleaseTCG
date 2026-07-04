import { StackReference } from "@/lib/game/refs";

import { EventType } from "./EventType";
import { GameEvent } from "./GameEvent";

export interface AttackStartedEvent extends GameEvent {
    type: EventType.AttackStarted;

    attacker: StackReference;
}