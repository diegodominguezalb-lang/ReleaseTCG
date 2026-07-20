import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    findAllCards,
} from "@/lib/game/queries";

import {
    CardTarget,
} from "../models";

import {
    TargetType,
} from "../models/TargetType";

export function generateCardTargets(
    context: EngineContext,
): CardTarget[] {

    return findAllCards(

        context,

    ).map(

        location => ({

            type: TargetType.Card,

            reference: {

                id: location.card.id,

            },

        }),

    );

}