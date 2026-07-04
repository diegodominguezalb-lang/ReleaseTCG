import { ZoneType } from "../models";
import { GameReference } from "./GameReference";

export interface PublicPileReference extends GameReference {
    type: ZoneType.PublicPile;
}