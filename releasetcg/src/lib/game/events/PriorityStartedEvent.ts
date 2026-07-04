import { PlayerReference } from "@/lib/game/refs";

import { EventType } from "./EventType";
import { GameEvent } from "./GameEvent";

export interface PriorityStartedEvent extends GameEvent {
    type: EventType.PriorityStarted;

    player: PlayerReference;
}