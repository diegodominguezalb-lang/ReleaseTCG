import {
    PileReference,
} from "../refs";

import { QueryContext } from "./QueryContext";

import { findPile } from "./infrastructure/findPile";

export function getTopPileCard(
    context: QueryContext,
    pile: PileReference,
) {

    return (
        findPile(
            context,
            pile,
        )?.cards[0] ?? null
    );

}