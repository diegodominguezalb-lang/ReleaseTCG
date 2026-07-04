import { ZoneType } from "../models";
import { GameReference } from "./GameReference";

export interface GapReference extends GameReference {
    type: ZoneType.Gap;
}