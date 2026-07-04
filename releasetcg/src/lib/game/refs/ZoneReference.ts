import { ExtraDeckReference } from "./ExtraDeckReference";
import { GapReference } from "./GapReference";
import { GateReference } from "./GateReference";
import { HandReference } from "./HandReference";
import { MainDeckReference } from "./MainDeckReference";
import { PublicPileReference } from "./PublicPileReference";
import { SetZoneReference } from "./SetZoneReference";

export type ZoneReference =
    | GateReference
    | SetZoneReference
    | HandReference
    | MainDeckReference
    | ExtraDeckReference
    | PublicPileReference
    | GapReference;