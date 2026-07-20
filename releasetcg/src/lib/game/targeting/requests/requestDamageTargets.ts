import {
    TargetRequest,
} from "../models";

import {
    buildDamageTargets,
} from "../generators";

import {
    EngineContext,
} from "@/lib/game/EngineContext";

export function requestDamageTargets(
    context: EngineContext,
    playerId: string,
): TargetRequest {

    return {

        targets: buildDamageTargets(

            context,

            playerId,

        ),

        minimum: 1,

        maximum: 1,

    };

}