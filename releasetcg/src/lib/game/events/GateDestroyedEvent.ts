import { GateReference } from "@/lib/game/refs";

import { EventType } from "./EventType";
import { GameEvent } from "./GameEvent";

export interface GateDestroyedEvent extends GameEvent {
    type: EventType.GateDestroyed;

    gate: GateReference;
}