import {
    BoardPosition,
    GateZone,
    PlayerSide,
} from "../../models";

import { CardInstance } from "../../models";

export function createTestGate(
    cards: CardInstance[] = [],
    side: PlayerSide = PlayerSide.Bottom,
    position: BoardPosition = BoardPosition.Center,
): GateZone {

    return {

        side,

        position,

        stack: {

            cards,

        },

    };

}