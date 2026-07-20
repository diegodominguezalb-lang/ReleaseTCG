import { EngineContext } from "@/lib/game/EngineContext";

import {
    GameOperation,
} from "./GameOperation";

import {
    OperationType,
} from "./OperationType";

import {
    drawCardsExecutor,
} from "../executors/drawCardsExecutor";

import {
    damagePlayerExecutor,
} from "../executors/damagePlayerExecutor";

export function processOperation(
    context: EngineContext,
    operation: GameOperation,
): void {

    switch (

        operation.type

    ) {

        case OperationType.DrawCards:

            drawCardsExecutor(

                context,

                operation,

            );

            return;

        case OperationType.DamagePlayer:

            damagePlayerExecutor(

                context,

                operation,

            );

            return;

    }

}