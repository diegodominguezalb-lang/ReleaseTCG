"use client";

import {
    useMemo,
} from "react";

import {
    useGame,
} from "../../providers/GameProvider";

import HandFan from "./HandFan";

import {
    toPlayableCard,
} from "../../utils/toPlayableCard";

export default function PlayerHand() {

    const {
        engine,
    } = useGame();

    const cards = useMemo(

        () =>

            engine
                .hand("P1")
                .map(card => {

                    const definition =
                        engine.cardDefinition(
                            card,
                        );

                    return toPlayableCard(
                        card,
                        definition,
                    );

                }),

        [engine],

    );

    return (

        <HandFan
            cards={cards}
            position="bottom"
        />

    );

}