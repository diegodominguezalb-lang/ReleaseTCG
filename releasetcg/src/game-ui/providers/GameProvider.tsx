"use client";

import {
    createContext,
    useContext,
    useSyncExternalStore,
} from "react";

import { TestGame } from "@/utils/test/builders/TestGame";

interface GameContextValue {

    engine: TestGame;

}

const GameContext =
    createContext<GameContextValue | null>(
        null,
    );

interface Props {

    engine: TestGame;

    children: React.ReactNode;

}

export function GameProvider({
    engine,
    children,
}: Props) {

    useSyncExternalStore(
        engine.subscribe.bind(engine),
        () => engine.getRevision(),
        () => engine.getRevision(),
    );

    return (

        <GameContext.Provider
            value={{
                engine,
            }}
        >

            {children}

        </GameContext.Provider>

    );

}

export function useGame() {

    const context =
        useContext(
            GameContext,
        );

    if (!context) {

        throw new Error(
            "useGame must be used inside GameProvider.",
        );

    }

    return context;

}