import { CardInstance } from "../models";
import { ZoneReference } from "../refs";

import { QueryContext } from "./QueryContext";
import { getCardsInZone } from "./getCardsInZone";

export function getTopCard(
    context: QueryContext,
    zone: ZoneReference,
): CardInstance | null {

    const cards = getCardsInZone(
        context,
        zone,
    );

    return cards.at(-1) ?? null;

}