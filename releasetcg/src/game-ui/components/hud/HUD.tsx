"use client";

import { useGame } from "../../providers/GameProvider";

export default function HUD() {

    const {

        engine,

    } = useGame();

    return (

        <header className="border-b p-4 left-[2%] top-1/2 absolute w-[10%] text-center text-lg font-bold">

            Turn {

                engine.context.state.turn.turnNumber

            }

        </header>

    );

}