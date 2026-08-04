import { EngineContext } from "@/lib/game/EngineContext";

import {
    SplitAction,
} from "@/lib/game/actions";

import {

    createMoveCardCommand,

    createStartPriorityCommand,

} from "@/lib/game/commands";

import {

    markActionTaken,

} from "@/lib/game/turn";

export function processSplitAction(

    context: EngineContext,

    action: SplitAction,

): void {

    markActionTaken(
        context,
    );
    
    for (

        let i = 0;

        i < action.cards.length;

        i++

    ) {


        context.commandQueue.push(

            createMoveCardCommand(

                action.cards[i],

                action.gates[i],

            ),

        );

    }


    context.commandQueue.push(

        createStartPriorityCommand(

            action.player,

        ),

    );

}