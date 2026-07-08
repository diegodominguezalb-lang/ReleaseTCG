import { BasePlayAction } from "./BasePlayAction";
import { ActionCategory, PlayType } from "../models";
import { CardReference, GateReference } from "../refs";

export interface ConstructAction extends BasePlayAction {
    playType: PlayType.Construct;

    cards: CardReference[];

    gate: GateReference;
}

export function createConstructAction(
    player: BasePlayAction["player"],
    cards: CardReference[],
    gate: GateReference,
): ConstructAction {
    return {
        category: ActionCategory.Play,
        playType: PlayType.Construct,
        player,
        cards,
        gate,
    };
}