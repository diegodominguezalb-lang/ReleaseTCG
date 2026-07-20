import { EventType } from "../EventType";
import { GameplayEvent } from "./GameplayEvent";

export interface PriorityEndedEvent extends GameplayEvent {
    type: EventType.PriorityEnded;
}