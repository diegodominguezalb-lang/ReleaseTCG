import {
    AbilityContext,
} from "@/lib/game/abilities";

import {
    Effect,
    EffectType,
} from "..";

import {
    processDrawCardsEffect,
} from "./processDrawCardsEffect";

import {
    processDamagePlayerEffect,
} from "./processDamagePlayerEffect";

import {
    processRevealCardsEffect,
} from "./processRevealCardsEffect";

export function processEffect(
    context: AbilityContext,
    effect: Effect,
): void {

    switch (

        effect.type

    ) {

        case EffectType.DrawCards:

            processDrawCardsEffect(
                context,
                effect,
            );

            return;

        case EffectType.DamagePlayer:

            processDamagePlayerEffect(
                context,
                effect,
            );

            return;

        case EffectType.RevealCards:

            processRevealCardsEffect(
                context,
                effect,
            );

            return;

    }

}