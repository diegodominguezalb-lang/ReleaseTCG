import { CardInstance } from "../../../lib/game/models";

let nextId = 1;

export function createTestCardInstance(
    cardId: string,
    ownerId = "P1",
    controllerId = ownerId,
): CardInstance {

    return {

        id: `CARD_${nextId++}`,

        cardId,

        ownerId,

        controllerId,

    };

}