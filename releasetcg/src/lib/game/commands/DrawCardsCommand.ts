import {
    PlayerReference,
    LocationReference,
} from "@/lib/game/refs";

import { BaseCommand } from "./BaseCommand";
import { CommandType } from "./CommandType";

export interface DrawCardsCommand extends BaseCommand {
    type: CommandType.DrawCards;

    player: PlayerReference;

    count: number;

    source: LocationReference;
}