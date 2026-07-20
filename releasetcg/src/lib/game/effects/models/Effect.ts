import {
    DrawCardsEffect,
} from "./DrawCardsEffect";

import {
    DamagePlayerEffect,
} from "./DamagePlayerEffect";

import {
    RevealCardsEffect,
} from "./RevealCardsEffect";

export type Effect =

    | DrawCardsEffect

    | DamagePlayerEffect

    | RevealCardsEffect;