import { GateReference } from "@/lib/game/refs";

import { EventType } from "./EventType";
import { GameEvent } from "./GameEvent";

export interface GateCreatedEvent extends GameEvent {
    type: EventType.GateCreated;

    gate: GateReference;
}