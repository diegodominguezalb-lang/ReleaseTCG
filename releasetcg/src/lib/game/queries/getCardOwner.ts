import { PlayerState } from "../models";
import { CardReference } from "../refs";

import { QueryContext } from "./QueryContext";

import { findCard } from "./infrastructure/findCard";
import { findPlayer } from "./infrastructure/findPlayer";

export function getCardOwner(
    context: QueryContext,
    card: CardReference,
): PlayerState | null {

    const location = findCard(
        context,
        card,
    );

    if (!location) {
        return null;
    }

    return findPlayer(
        context,
        {
            id: location.card.ownerId,
        },
    );

}