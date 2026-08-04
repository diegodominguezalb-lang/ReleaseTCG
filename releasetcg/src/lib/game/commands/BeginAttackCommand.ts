import { StackReference } from "@/lib/game/refs";

import { BaseCommand } from "./BaseCommand";
import { CommandType } from "./CommandType";

export interface BeginAttackCommand extends BaseCommand {
    type: CommandType.BeginAttack;

    attacker: StackReference;
}