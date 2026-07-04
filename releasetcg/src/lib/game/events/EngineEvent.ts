import { AttackResolvedEvent } from "./AttackResolvedEvent";
import { AttackStartedEvent } from "./AttackStartedEvent";
import { CardsDrawnEvent } from "./CardsDrawnEvent";
import { CardsRevealedEvent } from "./CardsRevealedEvent";
import { CardMovedEvent } from "./CardMovedEvent";
import { GateCreatedEvent } from "./GateCreatedEvent";
import { GateDestroyedEvent } from "./GateDestroyedEvent";
import { PhaseStartedEvent } from "./PhaseStartedEvent";
import { PlayerDamagedEvent } from "./PlayerDamagedEvent";
import { PlayerHealedEvent } from "./PlayerHealedEvent";
import { PriorityEndedEvent } from "./PriorityEndedEvent";
import { PriorityStartedEvent } from "./PriorityStartedEvent";
import { TurnEndedEvent } from "./TurnEndedEvent";

export type EngineEvent =
    | AttackResolvedEvent
    | AttackStartedEvent
    | CardMovedEvent
    | CardsDrawnEvent
    | CardsRevealedEvent
    | GateCreatedEvent
    | GateDestroyedEvent
    | PhaseStartedEvent
    | PlayerDamagedEvent
    | PlayerHealedEvent
    | PriorityEndedEvent
    | PriorityStartedEvent
    | TurnEndedEvent;