import {

    Effect,
    EffectType,

    createDamagePlayerEffect,
    createDrawCardsEffect,

} from "@/lib/game/effects";

import {

    parseModifier,

} from "./parseModifier";

import {

    assertArray,
    assertNumber,
    assertObject,
    assertString,

} from "./";

export function parseEffect(
    value: unknown,
): Effect {

    assertObject(

        value,

        "Effect must be an object.",

    );

    assertString(

        value.type,

        "Effect type missing.",

    );

    const modifiers =

        Array.isArray(

            value.modifiers,

        )

            ? value.modifiers.map(

                parseModifier,

            )

            : [];

    switch (

        value.type

    ) {

        case EffectType.DrawCards:

        {

            assertNumber(

                value.amount,

                "DrawCards amount missing.",

            );

            return createDrawCardsEffect(

                value.amount,

                modifiers,

            );

        }

        case EffectType.DamagePlayer:

        {

            assertNumber(

                value.amount,

                "DamagePlayer amount missing.",

            );

            assertString(

                value.target,

                "DamagePlayer target missing.",

            );

            return createDamagePlayerEffect(

                value.amount,

                modifiers,

            );

        }

        default:

            throw new Error(

                `Unknown effect "${value.type}".`,

            );

    }

}