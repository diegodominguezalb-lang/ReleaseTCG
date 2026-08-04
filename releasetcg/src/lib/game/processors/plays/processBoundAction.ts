import { EngineContext } from "@/lib/game/EngineContext";

import { BoundAction } from "@/lib/game/actions";

import {

    createMoveCardCommand,

    createStartPriorityCommand,

} from "@/lib/game/commands";

import {

    markActionTaken,

} from "@/lib/game/turn";

export function processBoundAction(

    context: EngineContext,

    action: BoundAction,

): void {

    markActionTaken(
        context,
    );
    
    //
    // Move first half.
    //

    context.commandQueue.push(

        createMoveCardCommand(

            action.firstHalf,

            action.gate,

        ),

    );

    //
    // Move middle.
    //

    for (const card of action.middle) {

        context.commandQueue.push(

            createMoveCardCommand(

                card,

                action.gate,

            ),

        );

    }

    //
    // Move second half.
    //

    context.commandQueue.push(

        createMoveCardCommand(

            action.secondHalf,

            action.gate,

        ),

    );

    //
    // Begin priority.
    //

    context.commandQueue.push(

        createStartPriorityCommand(

            action.player,

        ),

    );

}