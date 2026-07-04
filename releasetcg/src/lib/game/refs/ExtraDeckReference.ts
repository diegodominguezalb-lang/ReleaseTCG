import { ZoneType } from "../models";
import { GameReference } from "./GameReference";

export interface ExtraDeckReference extends GameReference {
    type: ZoneType.ExtraDeck;

    playerId: string;
}