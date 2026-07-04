import { ZoneType } from "../models";
import { GameReference } from "./GameReference";

export interface MainDeckReference extends GameReference {
    type: ZoneType.MainDeck;

    playerId: string;
}