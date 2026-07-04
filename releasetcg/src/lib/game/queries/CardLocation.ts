import {
    CardInstance,
} from "../models";

import {
    CardReference,
    ZoneReference,
} from "../refs";

export interface CardLocation {
    card: CardInstance;

    reference: CardReference;

    zone: ZoneReference;

    position: number;
}