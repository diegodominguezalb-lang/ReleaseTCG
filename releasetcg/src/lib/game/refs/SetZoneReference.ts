import { ZoneType } from "../models";
import { BoardReference } from "./BoardReference";

export interface SetZoneReference extends BoardReference {
    type: ZoneType.Set;
}