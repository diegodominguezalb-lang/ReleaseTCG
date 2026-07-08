import {
    CardReference,
    LocationReference,
} from "@/lib/game/refs";

import { EventType } from "./EventType";
import { GameEvent } from "./GameEvent";

export interface CardMovedEvent extends GameEvent {
    type: EventType.CardMoved;

    card: CardReference;

    from: LocationReference;

    to: LocationReference;
}