import { EventType } from "./EventType";
import { GameEvent } from "./GameEvent";

export interface TurnEndedEvent extends GameEvent {
    type: EventType.TurnEnded;
}