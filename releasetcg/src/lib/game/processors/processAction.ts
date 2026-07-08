import { EngineContext } from "../EngineContext";

import {
    GameAction,
    ActionType,
} from "../actions";

import {
    processBurnAction,
} from "./plays/processBurnAction";


export function processAction(
    context: EngineContext,
    action: GameAction,
): void {

    switch (action.type) {

        case ActionType.Burn:

            processBurnAction(
                context,
                action,
            );

            return;


        default:

            throw new Error(
                `Unhandled action type: ${action.type}`,
            );

    }

}