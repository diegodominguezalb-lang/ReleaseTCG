import { EngineContext } from "@/lib/game/EngineContext";

import { ChainAction } from "../../actions/ChainAction";

import {
    createMoveCardCommand, createStartPriorityCommand,
} from "../../commands";

export function processChainAction(

    context: EngineContext,

    action: ChainAction,

): void {

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