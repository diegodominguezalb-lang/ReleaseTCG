import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    buildGateTargets,
} from "../generators";

import {
    TargetRequest,
} from "../models";

export function requestGateTargets(
    context: EngineContext,
): TargetRequest {

    return {

        targets: buildGateTargets(

            context,

        ),

        minimum: 1,

        maximum: 1,

    };

}