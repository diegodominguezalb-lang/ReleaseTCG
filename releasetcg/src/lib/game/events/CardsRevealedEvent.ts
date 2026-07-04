import {
    CardReference,
    PlayerReference,
} from "@/lib/game/refs";

import { EventType } from "./EventType";
import { GameEvent } from "./GameEvent";

export interface CardsRevealedEvent extends GameEvent {
    type: EventType.CardsRevealed;

    cards: CardReference[];

    viewers: PlayerReference[];
}