import { EventType } from "./EventType";
import { GameEvent } from "./GameEvent";

export interface PriorityEndedEvent extends GameEvent {
    type: EventType.PriorityEnded;
}