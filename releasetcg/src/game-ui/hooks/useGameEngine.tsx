"use client";

import { useMemo } from "react";

import { TestGame } from "@/utils/test/builders/TestGame";

export function useGameEngine() {

    return useMemo(

        () => new TestGame(),

        [],

    );

}