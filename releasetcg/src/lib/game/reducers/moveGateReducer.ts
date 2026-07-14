import { EngineContext } from "@/lib/game/EngineContext";

import { MoveGateCommand } from "@/lib/game/commands";

import {
    findGate,
} from "@/lib/game/queries";

export function moveGateReducer(
    context: EngineContext,
    command: MoveGateCommand,
): void {

    const source =
        findGate(
            context,
            command.source,
        );

    if (!source) {

        throw new Error(
            "MoveGateCommand: source gate not found.",
        );

    }

    const destination =
        findGate(
            context,
            command.destination,
        );

    if (!destination) {

        throw new Error(
            "MoveGateCommand: destination gate not found.",
        );

    }

    if (!source.stack) {

        throw new Error(
            "MoveGateCommand: source gate is empty.",
        );

    }

    //
    // Ensure the destination has a stack.
    //

    destination.stack ??= {

        cards: [],

    };

    //
    // Place the entire source gate on top of
    // the destination gate.
    //
    // Source:
    //   BR
    //   GB
    //
    // Destination:
    //   GBY
    //
    // Result:
    //   BR
    //   GB
    //   GBY
    //

    destination.stack.cards.unshift(
        ...source.stack.cards,
    );

    //
    // The source gate no longer exists.
    //

    source.stack = null;

}