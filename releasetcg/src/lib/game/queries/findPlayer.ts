import { QueryContext } from "./QueryContext";

import {
    PlayerReference,
} from "../refs";

import {
    PlayerState,
} from "../models";

export function findPlayer(
    context: QueryContext,
    reference: PlayerReference,
): PlayerState | null {

    return (
        context.state.players.find(
            player => player.id === reference.id,
        ) ?? null
    );

}