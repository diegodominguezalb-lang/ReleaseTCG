import {
    CardColor,
    CardDefinition,
} from "../../../lib/game/models";

export function createTestCardDefinition(
    id: string,
    colors: CardColor[],
): CardDefinition {

    return {

        id,

        colors,

        // remaining required properties

    } as CardDefinition;

}