"use client";

import { GameProvider } from "./providers/GameProvider";

import { useGameEngine } from "./hooks/useGameEngine";

import GameBoard from "./components/board/GameBoard";

import HUD from "./components/hud/HUD";
import OpponentHand from "./components/hand/OpponentHand";
import PlayerHand from "./components/hand/PlayerHand";

export default function GameController() {

    const engine = useGameEngine();

    return (

        <GameProvider engine={engine}>

            <div className="relative h-full w-full overflow-hidden bg-background">

                <GameBoard />

                <OpponentHand />

                <PlayerHand />

                <HUD />

            </div>

        </GameProvider>

    );

}