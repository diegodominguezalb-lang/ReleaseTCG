import { EngineContext } from "@/lib/game/EngineContext";

import { BurnAction } from "../../actions/BurnAction";

import {
    findCard,
} from "../../queries";

import {
    createMoveCardCommand,
} from "../../commands/MoveCardCommand";

import {
    createStartPriorityCommand,
} from "../../commands/StartPriorityCommand";

import {

    markActionTaken,

} from "@/lib/game/turn";

export function processBurnAction(
    context: EngineContext,
    action: BurnAction,
): void {

    markActionTaken(
        context,
    );
    
    //
    // Queue a move for every played card.
    //

    for (const reference of action.cards) {

        const location = findCard(
            context,
            reference,
        );

        if (!location) {

            throw new Error(
                "BurnAction references a card that no longer exists.",
            );

        }

        context.commandQueue.push(

            createMoveCardCommand(

                reference,

                action.gate,

            ),

        );

    }

    //
    // Begin priority.
    //

    context.commandQueue.push(

        createStartPriorityCommand(

            action.player,

        ),

    );

}