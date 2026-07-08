import { BasePlayAction } from "./BasePlayAction";
import { ActionCategory, PlayType } from "../models";
import { CardReference, GateReference } from "../refs";

export interface SplitAction extends BasePlayAction {
    playType: PlayType.Split;

    cards: CardReference[];

    gates: GateReference[];

    assignments: {
        card: CardReference;
        gate: GateReference;
    }[];
}

export function createSplitAction(
    player: BasePlayAction["player"],
    cards: CardReference[],
    gates: GateReference[],
    assignments: { card: CardReference; gate: GateReference }[],
): SplitAction {
    return {
        category: ActionCategory.Play,
        playType: PlayType.Split,
        player,
        cards,
        gates,
        assignments,
    };
}