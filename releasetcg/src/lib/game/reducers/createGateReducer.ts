import { EngineContext } from "../EngineContext";

import { CreateGateCommand } from "../commands";

import { findGate } from "../queries";

export function createGateReducer(
    context: EngineContext,
    command: CreateGateCommand,
): void {

    const gate = findGate(
        context,
        command.gate,
    );

    if (!gate) {
        throw new Error(
            "Gate not found.",
        );
    }

    if (gate.stack) {
        throw new Error(
            "Gate already exists.",
        );
    }

    gate.stack = {
        cards: [],
    };

}