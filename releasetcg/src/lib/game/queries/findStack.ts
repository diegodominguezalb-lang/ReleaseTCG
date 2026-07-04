import { GateStack } from "../models";
import { StackReference } from "../refs";

import { findGate } from "./findGate";
import { QueryContext } from "./QueryContext";

export function findStack(
    context: QueryContext,
    reference: StackReference,
): GateStack | null {
    return findGate(
        context,
        reference.gate,
    )?.stack ?? null;
}