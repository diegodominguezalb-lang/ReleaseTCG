import { CardInstance, ZoneType } from "../models";
import { ZoneReference } from "../refs";

import { QueryContext } from "./QueryContext";

import { findGate } from "./findGate";
import { findPlayer } from "./findPlayer";
import { findSetZone } from "./findSetZone";

export function getCardsInZone(
    context: QueryContext,
    zone: ZoneReference,
): CardInstance[] {

    switch (zone.type) {

        case ZoneType.Hand:
            return findPlayer(context, {
                id: zone.playerId,
            })?.hand ?? [];

        case ZoneType.MainDeck:
            return findPlayer(context, {
                id: zone.playerId,
            })?.mainDeck ?? [];

        case ZoneType.ExtraDeck:
            return findPlayer(context, {
                id: zone.playerId,
            })?.extraDeck ?? [];

        case ZoneType.PublicPile:
            return context.state.publicPile;

        case ZoneType.Gap:
            return context.state.gap;

        case ZoneType.Gate:
            return (
                findGate(context, zone)
                    ?.stack
                    ?.cards ?? []
            );

        case ZoneType.Set: {
            const card = findSetZone(
                context,
                zone,
            )?.card;

            return card ? [card] : [];
        }

    }

}