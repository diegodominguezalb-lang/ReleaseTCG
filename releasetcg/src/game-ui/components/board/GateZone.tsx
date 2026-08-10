"use client";

import { BOARD } from "@/game-ui/constants/boardMetrics";

interface Props {

    row: number;

    column: number;

}

export default function GateZone({

    row,

    column,

}: Props) {

    return (

        <div

            style={{
                height: BOARD.gateHeight,
            }}

            className="aspect-[5/7] rounded-xl border bg-muted flex items-center justify-center"

        >

            Gate {row},{column}

        </div>

    );

}