import { EngineContext } from "../EngineContext";

import { GameCommand, CommandType } from "../commands";

import {
    moveCardReducer, createGateReducer, startPriorityReducer, moveGateReducer,
} from "../reducers";

export function processCommand(
    context: EngineContext,
    command: GameCommand,
): void {

    switch (command.type) {

        case CommandType.MoveCard:
            moveCardReducer(
                context,
                command,
            );
            return;

        case CommandType.StartPriority:
            startPriorityReducer(
                context,
                command,
            );
            return;

        case CommandType.CreateGate:
            createGateReducer(
                context,
                command,
            );
            return;

        case CommandType.MoveGate:

            moveGateReducer(
                context,
                command,
            );

            return;
            
        default:
            throw new Error(
                `Unhandled command: ${command.type}`,
            );

    }

}