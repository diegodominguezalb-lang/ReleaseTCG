import {
    CardReference,
    PlayerReference,
} from "@/lib/game/refs";

import { EventType } from "./EventType";
import { GameEvent } from "./GameEvent";

export interface CardsDrawnEvent extends GameEvent {
    type: EventType.CardsDrawn;

    player: PlayerReference;

    cards: CardReference[];
}