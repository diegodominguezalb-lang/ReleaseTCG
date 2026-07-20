import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    GateTarget,
} from "../models";

import {
    TargetType,
} from "../models/TargetType";

import { LocationType } from "@/lib/game/models";

export function generateGateTargets(
    context: EngineContext,
): GateTarget[] {

    return context.state.board.gateZones.map(

        gate => ({

            type: TargetType.Gate,

            reference: {

                locationType: LocationType.Gate,

                side: gate.side,

                position: gate.position,

            },

        }),

    );

}