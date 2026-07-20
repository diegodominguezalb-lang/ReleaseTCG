import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    buildCardTargets,
} from "../generators";

import {
    TargetRequest,
} from "../models";

export function requestCardTargets(
    context: EngineContext,
): TargetRequest {

    return {

        targets: buildCardTargets(

            context,

        ),

        minimum: 1,

        maximum: 1,

    };

}