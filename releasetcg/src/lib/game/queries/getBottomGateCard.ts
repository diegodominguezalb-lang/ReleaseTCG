import { CardInstance } from "../models";

import {
    GateReference,
} from "../refs";

import { QueryContext } from "./QueryContext";

import { findGate } from "./infrastructure/findGate";

export function getBottomGateCard(
    context: QueryContext,
    gate: GateReference,
): CardInstance | null {

    const stack = findGate(
        context,
        gate,
    )?.stack;

    if (!stack) {
        return null;
    }

    return stack.cards[0] ?? null;

}