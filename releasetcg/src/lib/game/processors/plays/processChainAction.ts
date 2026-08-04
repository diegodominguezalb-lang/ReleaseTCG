import { EngineContext } from "@/lib/game/EngineContext";

import { ChainAction } from "../../actions/ChainAction";

import {
    createMoveCardCommand, createStartPriorityCommand,
} from "../../commands";

import {

    markActionTaken,

} from "@/lib/game/turn";

export function processChainAction(

    context: EngineContext,

    action: ChainAction,

): void {

    markActionTaken(
        context,
    );

    for (

        const reference of [

            ...action.openingUnit,

            ...action.chain,

        ]

    ) {

        context.commandQueue.push(

            createMoveCardCommand(

                reference,

                action.gate,

            ),

        );

    }

    context.commandQueue.push(

        createStartPriorityCommand(

            action.player,

        ),

    );

}