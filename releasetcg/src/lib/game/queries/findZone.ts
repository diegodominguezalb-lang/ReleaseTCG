import { LocationReference } from "../refs";
import { ZoneType } from "../models";

import { QueryContext } from "./QueryContext";

import {
    findGate,
    findPile,
    findSetZone,
} from "./";

export function findZone(
    context: QueryContext,
    location: LocationReference,
) {
    switch (location.type) {

        case ZoneType.Gate:
            return findGate(context, location);

        case ZoneType.Set:
            return findSetZone(context, location);

        default:
            return findPile(context, location);
    }
}