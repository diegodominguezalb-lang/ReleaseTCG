import { StackReference } from "@/lib/game/refs";

import { BaseCommand } from "./BaseCommand";
import { CommandType } from "./CommandType";

export interface ResolveAttackCommand extends BaseCommand {
    type: CommandType.ResolveAttack;

    attacker: StackReference;
}