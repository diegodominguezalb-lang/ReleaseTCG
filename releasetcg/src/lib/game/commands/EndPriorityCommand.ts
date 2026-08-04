import { BaseCommand } from "./BaseCommand";
import { CommandType } from "./CommandType";

export interface EndPriorityCommand extends BaseCommand {
    type: CommandType.EndPriority;
}