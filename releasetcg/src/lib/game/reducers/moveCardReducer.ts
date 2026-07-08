import { EngineContext } from "../EngineContext";

import {
    MoveCardCommand,
} from "../commands";

import {
    findCard,
} from "../queries";

import {
    removeCard,
    insertCard,
} from "./helpers";


export function moveCardReducer(
    context: EngineContext,
    command: MoveCardCommand,
): void {

    const location = findCard(
        context,
        command.card,
    );

    if (!location) {
        throw new Error(
            "MoveCardReducer: card not found.",
        );
    }


    removeCard(
        context,
        location,
    );


    insertCard(
        context,
        location.card,
        command.destination,
    );

}