import { CardInstance } from "../models";
import { PlayerReference } from "../refs";

import { QueryContext } from "./QueryContext";
import { findPlayer } from "./findPlayer";

export function getCardsInHand(
    context: QueryContext,
    player: PlayerReference,
): CardInstance[] {

    return (
        findPlayer(
            context,
            player,
        )?.hand ?? []
    );

}