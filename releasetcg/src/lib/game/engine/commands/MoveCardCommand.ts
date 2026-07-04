import { CardReference, ZoneReference } from "@/lib/game/refs";

import { BaseCommand } from "./BaseCommand";
import { CommandType } from "./CommandType";

export interface MoveCardCommand extends BaseCommand {
    type: CommandType.MoveCard;

    card: CardReference;

    destination: ZoneReference;
}