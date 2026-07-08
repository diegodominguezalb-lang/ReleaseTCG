import { BasePlayAction } from "./BasePlayAction";
import { ActionCategory, PlayType } from "../models";
import { CardReference, GateReference } from "../refs";

export interface LiminalAction extends BasePlayAction {
    playType: PlayType.Liminal;

    gates: GateReference[];

    targetGate: GateReference;

    card: CardReference;
}

export function createLiminalAction(
    player: BasePlayAction["player"],
    card: CardReference,
    gates: GateReference[],
    targetGate: GateReference,
): LiminalAction {
    return {
        category: ActionCategory.Play,
        playType: PlayType.Liminal,
        player,
        card,
        gates,
        targetGate,
    };
}