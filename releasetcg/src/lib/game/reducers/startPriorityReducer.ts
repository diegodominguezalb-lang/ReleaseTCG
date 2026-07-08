import { EngineContext } from "../EngineContext";
import { StartPriorityCommand } from "../commands";

export function startPriorityReducer(
    context: EngineContext,
    command: StartPriorityCommand,
): void {

    context.state.priority.currentPlayerId =
        command.player.id;

}