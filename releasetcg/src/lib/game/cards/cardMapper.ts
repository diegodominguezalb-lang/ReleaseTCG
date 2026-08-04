import {
    DatabaseCard,
} from "@/types/cards";

import {
    CardDefinition,
} from "@/lib/game/models";

import {
    CardColor,
} from "@/lib/game/models";

function parseColor(
    color: string | null,
): CardColor | null {

    switch (color) {

        case CardColor.Red:
        case CardColor.Orange:
        case CardColor.Yellow:
        case CardColor.Green:
        case CardColor.Cyan:
        case CardColor.Blue:
        case CardColor.Violet:
        case CardColor.Magenta:
        case CardColor.Pink:

            return color;

        default:

            return null;

    }

}

function parseColors(
    card: DatabaseCard,
): CardColor[] {

    return [

        parseColor(card.color1),

        parseColor(card.color2),

        parseColor(card.color3),

        parseColor(card.color4),

    ].filter(

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

        trait: null,

        abilities: [],

    };

}