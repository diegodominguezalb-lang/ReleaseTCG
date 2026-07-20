import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    buildPileTargets,
} from "../generators";

import {
    TargetRequest,
} from "../models";

export function requestPileTargets(
    context: EngineContext,
): TargetRequest {

    return {

        targets: buildPileTargets(

            context,

        ),

        minimum: 1,

        maximum: 1,

    };

}