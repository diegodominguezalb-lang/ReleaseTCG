"use client";

import {
    useGame,
} from "../../providers/GameProvider";

import {
    useGameRevision,
} from "../../hooks/useGameRevision";

import HandFan from "./HandFan";

import {
    toPlayableCard,
} from "../../utils/toPlayableCard";

export default function PlayerHand() {

    const {
        engine,
    } = useGame();

    const revision =
        useGameRevision();

    console.log(
        "PLAYER HAND REVISION:",
        revision,
    );

    const cards =
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

            });

    console.log(
        "ENGINE HAND:",
        cards.map(card => card.id),
    );

    return (

        <HandFan
            cards={cards}
            position="bottom"
        />

    );
}