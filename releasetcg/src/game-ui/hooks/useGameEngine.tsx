import {
    useMemo,
} from "react";

import {
    TestGame,
} from "@/utils/test/builders/TestGame";

import {
    TEST_DECK,
} from "@/utils/test/decks/testDeck";

export function useGameEngine() {

    return useMemo(

        () => new TestGame({

            player1Deck:
                TEST_DECK,

            player2Deck:
                TEST_DECK,

        }),

        [],

    );

}