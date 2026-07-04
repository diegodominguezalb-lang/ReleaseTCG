import { StackReference } from "@/lib/game/refs";

import { EventType } from "./EventType";
import { GameEvent } from "./GameEvent";

export interface AttackResolvedEvent extends GameEvent {
    type: EventType.AttackResolved;

    attacker: StackReference;
}