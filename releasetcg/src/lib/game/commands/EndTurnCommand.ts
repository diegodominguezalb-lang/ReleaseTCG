import { BaseCommand } from "./BaseCommand";
import { CommandType } from "./CommandType";

export interface EndTurnCommand extends BaseCommand {
    type: CommandType.EndTurn;
}