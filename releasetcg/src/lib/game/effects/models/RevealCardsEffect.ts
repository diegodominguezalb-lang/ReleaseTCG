import {
    EffectModifier,
} from "../modifiers/EffectModifier";

import {
    EffectType,
} from "./EffectType";

export interface RevealCardsEffect {

    type: EffectType.RevealCards;

    amount: number;

    modifiers: EffectModifier[];

}