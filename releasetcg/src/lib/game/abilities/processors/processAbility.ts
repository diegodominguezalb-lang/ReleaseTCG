import {
    AbilityContext,
} from "../AbilityContext";

import {
    Ability,
} from "../Ability";

import {
    processEffect,
} from "@/lib/game/effects";

export function processAbility(
    context: AbilityContext,
    ability: Ability,
): void {

    for (

        const effect of ability.effects

    ) {

        processEffect(

            context,

            effect,

        );

    }

}