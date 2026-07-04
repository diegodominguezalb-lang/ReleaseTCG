import { ZoneType } from "../models";
import { GameReference } from "./GameReference";

export interface HandReference extends GameReference {
    type: ZoneType.Hand;

    playerId: string;
}