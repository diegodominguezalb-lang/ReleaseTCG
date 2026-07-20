import { StackReference } from "@/lib/game/refs";

import { EventType } from "../EventType";
import { GameplayEvent } from "./GameplayEvent";

export interface AttackResolvedEvent extends GameplayEvent {
    type: EventType.AttackResolved;

    attacker: StackReference;
}