import { TurnPhase } from "@/lib/game/models";

import { BaseCommand } from "./BaseCommand";
import { CommandType } from "./CommandType";

export interface BeginPhaseCommand extends BaseCommand {
    type: CommandType.BeginPhase;

    phase: TurnPhase;
}