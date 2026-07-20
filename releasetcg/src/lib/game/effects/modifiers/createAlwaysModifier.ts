import {
    AlwaysModifier,
} from "./AlwaysModifier";

import {
    EffectModifierType,
} from "./EffectModifierType";

export function createAlwaysModifier(): AlwaysModifier {

    return {

        type: EffectModifierType.Always,

    };

}