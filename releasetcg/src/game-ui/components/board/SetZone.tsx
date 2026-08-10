"use client";

import { BOARD } from "@/game-ui/constants/boardMetrics";

interface Props {

    index: number;

    opponent?: boolean;

}

export default function SetZone({

    index,

}: Props) {

    return (

        <div

            style={{
                height: BOARD.setHeight,
            }}

            className="aspect-[5/5] rounded-lg border bg-muted flex items-center justify-center"

        >

            Set {index}

        </div>

    );

}