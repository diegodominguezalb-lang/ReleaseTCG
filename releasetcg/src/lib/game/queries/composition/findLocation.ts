import {
    LocationReference,
} from "../../refs";

import {
    ZoneType,
} from "../../models";

import { QueryContext } from "../QueryContext";

import {
    findGate,
    findPile,
    findSetZone,
} from "..";

export function findLocation(
    context: QueryContext,
    reference: LocationReference,
) {

    switch (reference.type) {

        case ZoneType.Gate:
            return findGate(context, reference);

        case ZoneType.Set:
            return findSetZone(context, reference);

        default:
            return findPile(context, reference);

    }

}