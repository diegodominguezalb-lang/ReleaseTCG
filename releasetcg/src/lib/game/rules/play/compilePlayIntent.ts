import { PlayType } from "../../models";

import { PlayIntent } from "@/lib/game/intents";

import { EngineContext } from "@/lib/game/";

import { RuleResult } from "../RuleResult";

import {
    compileBound,
    compileBurn,
    compileChain,
    compileConstruct,
    compileLiminal,
    compileSplit,
} from "./";

export function compilePlayIntent(
    context: EngineContext,
    intent: PlayIntent,
): RuleResult {

    switch (intent.playType) {

        case PlayType.Burn:
            return compileBurn(context, intent);

        case PlayType.Chain:
            return compileChain(context, intent);

        case PlayType.Construct:
            return compileConstruct(context, intent);

        case PlayType.Split:
            return compileSplit(context, intent);

        case PlayType.Bound:
            return compileBound(context, intent);

        case PlayType.Liminal:
            return compileLiminal(context, intent);

    }

}