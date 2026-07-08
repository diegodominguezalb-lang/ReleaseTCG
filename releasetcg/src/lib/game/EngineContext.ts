import { CardDefinition } from "./models";
import { GameCommand } from "./commands";
import { GameEvent } from "./events";
import { GameState } from "./models";

export interface EngineContext {
    state: GameState;

    cardDatabase: Record<string, CardDefinition>;

    commandQueue: GameCommand[];

    events: GameEvent[];
}