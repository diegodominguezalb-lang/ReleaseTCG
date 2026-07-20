import { EventType } from "../EventType";
import { GameplayEvent } from "./GameplayEvent";

export interface TurnEndedEvent extends GameplayEvent {
    type: EventType.TurnEnded;
}