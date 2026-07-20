import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    Target,
    TargetType,
} from "../models";

export function generateDamageTargets(
    context: EngineContext,
    sourcePlayerId: string,
): Target[] {

    const targets: Target[] = [];

    //
    // Opponent.
    //

    for (const player of context.state.players) {

        if (player.id === sourcePlayerId) {
            continue;
        }

        targets.push({

            type: TargetType.Player,

            reference: {
                id: player.id,
            },

        });

    }

    //
    // Totems later.
    //

    return targets;

}