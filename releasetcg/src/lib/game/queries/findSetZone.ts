import { SetZone } from "../models";
import { SetZoneReference } from "../refs";

import { QueryContext } from "./QueryContext";

export function findSetZone(
    context: QueryContext,
    reference: SetZoneReference,
): SetZone | null {
    return (
        context.state.board.setZones.find(
            zone =>
                zone.side === reference.side &&
                zone.position === reference.position,
        ) ?? null
    );
}