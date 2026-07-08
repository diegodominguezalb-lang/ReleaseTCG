import { BasePlayAction } from "./BasePlayAction";
import { ActionCategory, PlayType } from "../models";
import { CardReference, GateReference } from "../refs";

export interface BoundAction extends BasePlayAction {
    playType: PlayType.Bound;

    cards: CardReference[];

    gate: GateReference;
}

export function createBoundAction(
    player: BasePlayAction["player"],
    cards: CardReference[],
    gate: GateReference,
): BoundAction {
    return {
        category: ActionCategory.Play,
        playType: PlayType.Bound,
        player,
        cards,
        gate,
    };
}