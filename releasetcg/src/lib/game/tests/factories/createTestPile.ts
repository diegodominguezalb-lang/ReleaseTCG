import {
    CardInstance,
    PileState,
    PileType,
} from "../../models";

export function createTestPile(
    pileType: PileType,
    cards: CardInstance[] = [],
    ownerId?: string,
): PileState {

    return {

        id: `${pileType}-${ownerId ?? "shared"}`,

        pileType,

        cards,

        ownerId,

    };

}