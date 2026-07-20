import {
    DamagePlayerEffect,
} from "../models/DamagePlayerEffect";

import {
    EffectType,
} from "../models/EffectType";

import {
    EffectModifier,
} from "../modifiers";

export function createDamagePlayerEffect(
    amount: number,
    modifiers: EffectModifier[] = [],
): DamagePlayerEffect {

    return {

        type: EffectType.DamagePlayer,

        amount,

        modifiers,

    };

}