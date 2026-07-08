import { createTestContext } from "../factories/createTestContext";

import {
    BoardPosition,
    CardColor,
    CardDefinition,
    GameState,
    LocationType,
    PileType,
    PlayerSide,
    PlayType,
} from "../../models";

import { PlayIntent } from "../../intents";

import {
    CardReference,
    PlayerReference,
} from "../../refs";

export function createBurnScenario(): {
    context: ReturnType<typeof createTestContext>;
    intent: PlayIntent;

    player: PlayerReference;

    handCard: CardReference;

    gateCard: CardReference;
} {

    const player: PlayerReference = {
        id: "P1",
    };

    const handCard = {
        id: "CARD_A",
        cardId: "test-red",
        ownerId: "P1",
        controllerId: "P1",
    };

    const gateCard = {
        id: "CARD_B",
        cardId: "test-red",
        ownerId: "P1",
        controllerId: "P1",
    };

    const state: GameState = {

        id: "GAME",

        players: [],

        board: {

            gateZones: [

                {
                    side: PlayerSide.Bottom,
                    position: BoardPosition.Center,

                    stack: {
                        cards: [
                            gateCard,
                        ],
                    },

                },

            ],

            setZones: [],

        },

        piles: [

            {
                id: "HAND_P1",
                pileType: PileType.Hand,
                ownerId: "P1",
                cards: [
                    handCard,
                ],
            },

        ],

        turn: {} as GameState["turn"],

        priority: {} as GameState["priority"],

        winnerId: null,

    };

    const cardDatabase: Record<string, CardDefinition> = {

        "test-red": {

            id: "test-red",

            colors: [
                CardColor.Red,
            ],

        } as CardDefinition,

    };

    const context = createTestContext(
        state,
        cardDatabase,
    );

    const intent: PlayIntent = {

        type: "play",

        player,

        playType: PlayType.Burn,

        cards: [

            {
                id: handCard.id,
            },

        ],

        destinations: [

            {
                locationType: LocationType.Gate,

                side: PlayerSide.Bottom,

                position: BoardPosition.Center,

            },

        ],

    };

    return {

        context,

        intent,

        player,

        handCard: {
            id: handCard.id,
        },

        gateCard: {
            id: gateCard.id,
        },

    };

}