import { GateZone } from "../models";
import { GateReference } from "../refs";

import { QueryContext } from "./QueryContext";

export function findGate(
    context: QueryContext,
    reference: GateReference,
): GateZone | null {
    return (
        context.state.board.gateZones.find(
            gate =>
                gate.side === reference.side &&
                gate.position === reference.position,
        ) ?? null
    );
}