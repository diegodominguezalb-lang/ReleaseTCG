import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    PlayerTarget,
} from "../models";

import {
    TargetType,
} from "../models/TargetType";

export function generatePlayerTargets(
    context: EngineContext,
): PlayerTarget[] {

    return context.state.players.map(

        player => ({

            type: TargetType.Player,

            reference: {

                id: player.id,

            },

        }),

    );

}