import { EngineContext } from "@/lib/game/EngineContext";

import {
    LiminalAction,
} from "@/lib/game/actions";

import {
    createMoveCardCommand,
    createMoveGateCommand,
    createStartPriorityCommand,
} from "@/lib/game/commands";

import {

    markActionTaken,

} from "@/lib/game/turn";

export function processLiminalAction(
    context: EngineContext,
    action: LiminalAction,
): void {

    markActionTaken(
        context,
    );
    
    //
    // A valid Liminal always has at least one gate.
    //

    if (action.gates.length === 0) {

        throw new Error(
            "LiminalAction requires at least one gate.",
        );

    }

    //
    // Play the bridge card onto the first gate.
    //

    context.commandQueue.push(

        createMoveCardCommand(

            action.card,

            action.gates[0],

        ),

    );

    //
    // Move the growing stack through each
    // gate in the traversal path.
    //

    for (

        let i = 0;

        i < action.gates.length - 1;

        i++

    ) {

        context.commandQueue.push(

            createMoveGateCommand(

                action.gates[i],

                action.gates[i + 1],

            ),

        );

    }

    //
    // Priority returns after the entire
    // traversal has completed.
    //

    context.commandQueue.push(

        createStartPriorityCommand(

            action.player,

        ),

    );

}