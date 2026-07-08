import { EngineContext } from "../EngineContext";

import { GameCommand, CommandType } from "../commands";

import {
    moveCardReducer,
} from "../reducers";
import { startPriorityReducer } from "../reducers/startPriorityReducer";

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
            
        default:
            throw new Error(
                `Unhandled command: ${command.type}`,
            );

    }

}