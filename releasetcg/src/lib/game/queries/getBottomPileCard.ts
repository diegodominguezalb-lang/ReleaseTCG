import {
    PileReference,
} from "../refs";

import { QueryContext } from "./QueryContext";

import { findPile } from "./infrastructure/findPile";

export function getBottomPileCard(
    context: QueryContext,
    pile: PileReference,
) {

    const cards = findPile(
        context,
        pile,
    )?.cards;

    return cards?.at(-1) ?? null;

}