import { EngineContext } from "../EngineContext";

import { processCommand } from "./processCommand";


export function processCommandQueue(
    context: EngineContext,
): number {

    let processed = 0;


    while (
        context.commandQueue.length > 0
    ) {

        const command =
            context.commandQueue.shift();


        if (!command) {
            continue;
        }


        processCommand(
            context,
            command,
        );


        processed++;

    }


    return processed;

}