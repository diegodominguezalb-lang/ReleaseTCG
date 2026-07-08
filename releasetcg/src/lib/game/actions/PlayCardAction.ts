import { ActionType } from "./ActionType";
import { CardReference } from "../refs/CardReference";
import { PlayerReference } from "../refs/PlayerReference";
import { LocationReference } from "../refs/LocationReference";

export interface PlayCardAction {
    type: ActionType.PlayCard;

    player: PlayerReference;

    card: CardReference;

    destination: LocationReference;
}

export function createPlayCardAction(
    player: PlayerReference,
    card: CardReference,
    destination: LocationReference,
): PlayCardAction {
    return {
        type: ActionType.PlayCard,
        player,
        card,
        destination,
    };
}