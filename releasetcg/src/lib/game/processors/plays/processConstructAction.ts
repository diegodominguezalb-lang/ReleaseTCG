import { EngineContext } from "@/lib/game/EngineContext";

import { ConstructAction } from "@/lib/game/actions";

import {

    createCreateGateCommand,

    createMoveCardCommand,

    createStartPriorityCommand,

} from "@/lib/game/commands";

import {

    findCard,

} from "@/lib/game/queries";

export function processConstructAction(

    context: EngineContext,

    action: ConstructAction,

): void {

    //
    // Create the gate.
    //

    context.commandQueue.push(

        createCreateGateCommand(

            action.gate,

        ),

    );

    //
    // Move every card.
    //

    for (const reference of action.cards) {

        const location = findCard(

            context,

            reference,

        );

        if (!location) {

            throw new Error(
                "ConstructAction: card not found.",
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