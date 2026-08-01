import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    advanceTurnState,
} from "..";

export function processEndPhase(

    context: EngineContext,

): void {

    advanceTurnState(

        context,

    );

}