import { BasePlayAction } from "./BasePlayAction";
import { PlayType } from "../models";
import { CardReference, GateReference } from "../refs";
import { ActionCategory } from "../models";

export interface ChainAction extends BasePlayAction {
    playType: PlayType.Chain;

    cards: CardReference[];

    gate: GateReference;
}

export function createChainAction(
    player: BasePlayAction["player"],
    cards: CardReference[],
    gate: GateReference,
): ChainAction {
    return {
        category: ActionCategory.Play,
        playType: PlayType.Chain,
        player,
        cards,
        gate,
    };
}