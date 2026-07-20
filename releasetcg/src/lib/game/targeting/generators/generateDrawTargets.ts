import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    PileType,
} from "@/lib/game/models";

import {
    PileTarget,
} from "../models";

import {
    generatePileTargets,
} from "./generatePileTargets";

export function buildDrawTargets(
    context: EngineContext,
): PileTarget[] {

    return generatePileTargets(

        context,

    ).filter(

        target =>

            target.reference.pileType === PileType.MainDeck ||

            target.reference.pileType === PileType.ExtraDeck ||

            target.reference.pileType === PileType.PublicPile ||

            target.reference.pileType === PileType.Gap,

    );

}