import {
    EffectModifier,
} from "../modifiers/EffectModifier";

import {
    EffectType,
} from "./EffectType";

export interface DamagePlayerEffect {

    type: EffectType.DamagePlayer;

    amount: number;

    modifiers: EffectModifier[];

}