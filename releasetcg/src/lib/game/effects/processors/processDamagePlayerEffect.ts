import {
    AbilityContext,
} from "@/lib/game/abilities";

import {
    DamagePlayerEffect,
} from "../models/DamagePlayerEffect";

export function processDamagePlayerEffect(
    context: AbilityContext,
    effect: DamagePlayerEffect,
): void {

    throw new Error(

        "DamagePlayerEffect requires a target resolver.",

    );

}