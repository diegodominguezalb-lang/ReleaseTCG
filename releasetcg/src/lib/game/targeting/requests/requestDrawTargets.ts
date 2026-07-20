import {
    TargetRequest,
} from "../models";

import {
    buildDrawTargets,
} from "../generators";

import {
    EngineContext,
} from "@/lib/game/EngineContext";

export function requestDrawTargets(
    context: EngineContext,
): TargetRequest {

    return {

        targets: buildDrawTargets(

            context,

        ),

        minimum: 1,

        maximum: 1,

    };

}