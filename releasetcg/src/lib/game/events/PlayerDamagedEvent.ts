import { PlayerReference } from "@/lib/game/refs";

import { EventType } from "./EventType";
import { GameEvent } from "./GameEvent";

export interface PlayerDamagedEvent extends GameEvent {
    type: EventType.PlayerDamaged;

    player: PlayerReference;

    amount: number;
}