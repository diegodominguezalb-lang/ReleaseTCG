import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    CardInstance,
} from "@/lib/game/models";

export interface TargetContext {

    game: EngineContext;

    source: CardInstance;

}