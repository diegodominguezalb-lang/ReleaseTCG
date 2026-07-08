import { EngineContext } from "@/lib/game/EngineContext";

import { BurnAction } from "../../actions/BurnAction";

import { findCard } from "../../queries";

import {
    createMoveCardCommand,
} from "../../commands/MoveCardCommand";

import {
    createStartPriorityCommand,
} from "../../commands/StartPriorityCommand";

export function processBurnAction(
    context: EngineContext,
    action: BurnAction,
): void {

    const card = findCard(
        context,
        action.card,
    );

    if (!card) {
        throw new Error(
            "BurnAction references a card that no longer exists.",
        );
    }

    context.commandQueue.push(
        createMoveCardCommand(
            action.card,
            action.gate,
        ),
    );

    context.commandQueue.push(
        createStartPriorityCommand(
            action.player,
        ),
    );
}