import { EngineContext } from "../EngineContext";

import {
    EngineEvent,
    EventType,
} from ".";

import { processCardMovedEvent } from "../processors/events";

export function processEvent(
    context: EngineContext,
    event: EngineEvent,
): void {

    switch (event.type) {

        //
        // State events.
        //

        case EventType.CardMoved:

            processCardMovedEvent(
                context,
                event,
            );
            return;

        case EventType.CardsDrawn:
            return;

        case EventType.CardsRevealed:
            return;

        case EventType.GateCreated:
            return;

        case EventType.GateDestroyed:
            return;

        case EventType.GateMoved:
            return;

        case EventType.PlayerDamaged:
            return;

        case EventType.PlayerHealed:
            return;

        //
        // Gameplay events.
        //

        case EventType.AttackStarted:
            return;

        case EventType.AttackResolved:
            return;

        case EventType.PriorityStarted:
            return;

        case EventType.PriorityEnded:
            return;

        case EventType.PhaseStarted:
            return;

        case EventType.TurnEnded:
            return;

        default:

            throw new Error(
                `Unhandled event type: ${event}`,
            );

    }

}