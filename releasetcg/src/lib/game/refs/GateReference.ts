import { ZoneType } from "../models";
import { BoardReference } from "./BoardReference";

export interface GateReference extends BoardReference {
    type: ZoneType.Gate;
}