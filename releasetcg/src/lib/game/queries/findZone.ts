import { ZoneReference } from "../refs";
import { ZoneType } from "../models";

import { QueryContext } from "./QueryContext";

import { findGate, findSetZone, findPlayer } from "./";

export function findZone(
    context: QueryContext,
    zone: ZoneReference,
) {

    switch (zone.type) {

        case ZoneType.Gate:
            return findGate(context, zone);

        case ZoneType.Set:
            return findSetZone(context, zone);

        case ZoneType.Hand:
            return findPlayer(context, {
                id: zone.playerId,
            })?.hand ?? null;

        case ZoneType.MainDeck:
            return findPlayer(context, {
                id: zone.playerId,
            })?.mainDeck ?? null;

        case ZoneType.ExtraDeck:
            return findPlayer(context, {
                id: zone.playerId,
            })?.extraDeck ?? null;

        case ZoneType.PublicPile:
            return context.state.publicPile;

        case ZoneType.Gap:
            return context.state.gap;

    }

}