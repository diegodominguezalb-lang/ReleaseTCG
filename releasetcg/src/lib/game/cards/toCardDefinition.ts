import {
    DatabaseCard,
} from "@/types/cards";

import {
    CardColor,
    CardDefinition,
} from "@/lib/game/models";

function parseColors(
    card: DatabaseCard,
): CardColor[] {

    const values = [

        card.color1,
        card.color2,
        card.color3,
        card.color4,

    ];

    return values.filter(

        (
            color,
        ): color is CardColor =>

            color !== null,

    );

}

export function toCardDefinition(
    card: DatabaseCard,
): CardDefinition {

    return {

        id: card.id,

        name: card.name,

        power: card.power,

        bulk: card.bulk,

        colors: parseColors(card),

        //
        // TODO:
        // Parse trait from database.
        //

        trait: null,

        //
        // TODO:
        // Parse abilities JSON.
        //

        abilities: [],

    };

}