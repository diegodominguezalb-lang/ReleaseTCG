import {
    CardInstance,
    ZoneType,
} from "../models";

import {
    CardReference,
    ZoneReference,
} from "../refs";

import { CardLocation } from "./CardLocation";
import { QueryContext } from "./QueryContext";

import { searchCards } from "./helpers/searchCards";


export function findCard(
    context: QueryContext,
    reference: CardReference,
): CardLocation | null {

    //
    // Player-owned zones
    //

    for (const player of context.state.players) {

        let result = searchCards(
            player.hand,
            {
                type: ZoneType.Hand,
                playerId: player.id,
            },
            reference,
        );

        if (result) {
            return result;
        }

        result = searchCards(
            player.mainDeck,
            {
                type: ZoneType.MainDeck,
                playerId: player.id,
            },
            reference,
        );

        if (result) {
            return result;
        }

        result = searchCards(
            player.extraDeck,
            {
                type: ZoneType.ExtraDeck,
                playerId: player.id,
            },
            reference,
        );

        if (result) {
            return result;
        }
    }

    //
    // Gate stacks
    //

    for (const gate of context.state.board.gateZones) {

        if (!gate.stack) {
            continue;
        }

        const result = searchCards(
            gate.stack.cards,
            {
                type: ZoneType.Gate,
                side: gate.side,
                position: gate.position,
            },
            reference,
        );

        if (result) {
            return result;
        }
    }

    //
    // Set zones
    //

    for (const zone of context.state.board.setZones) {

        if (!zone.card) {
            continue;
        }

        if (zone.card.id === reference.id) {
            return {
                card: zone.card,
                reference,
                zone: {
                    type: ZoneType.Set,
                    side: zone.side,
                    position: zone.position,
                },
                position: 0,
            };
        }
    }

    //
    // Public pile
    //

    {
        const result = searchCards(
            context.state.publicPile,
            {
                type: ZoneType.PublicPile,
            },
            reference,
        );

        if (result) {
            return result;
        }
    }

    //
    // Gap
    //

    {
        const result = searchCards(
            context.state.gap,
            {
                type: ZoneType.Gap,
            },
            reference,
        );

        if (result) {
            return result;
        }
    }

    return null;
}