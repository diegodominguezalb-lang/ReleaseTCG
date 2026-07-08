import { createEngineContext } from "../../createEngineContext";
import { CardDefinition, GameState } from "../../models";

export function createTestContext(
    state: GameState,
    cardDatabase: Record<string, CardDefinition> = {},
) {
    return createEngineContext(
        state,
        cardDatabase,
    );
}