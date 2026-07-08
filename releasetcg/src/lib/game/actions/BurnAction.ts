import { BasePlayAction } from "./BasePlayAction";
import { ActionCategory } from "../models";
import { CardReference, GateReference } from "../refs";
import { ActionType } from "./ActionType";

export interface BurnAction extends BasePlayAction {
    type: ActionType.Burn;

    card: CardReference;

    gate: GateReference;
}

export function createBurnAction(
    player: BasePlayAction["player"],
    card: CardReference,
    gate: GateReference,
): BurnAction {
    return {
        category: ActionCategory.Play,
        type: ActionType.Burn,
        player,
        card,
        gate,
    };
}