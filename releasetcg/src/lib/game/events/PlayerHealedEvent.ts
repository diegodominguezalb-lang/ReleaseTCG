import { PlayerReference } from "@/lib/game/refs";

import { EventType } from "./EventType";
import { GameEvent } from "./GameEvent";

export interface PlayerHealedEvent extends GameEvent {
    type: EventType.PlayerHealed;

    player: PlayerReference;

    amount: number;
}