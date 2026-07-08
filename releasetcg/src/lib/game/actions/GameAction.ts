import { BurnAction } from "./BurnAction";
import { DealDamageAction } from "./DealDamageAction";
import { DrawCardsAction } from "./DrawCardsAction";
import { DrawLeaderAction } from "./DrawLeaderAction";
import { EndPriorityAction } from "./EndPriorityAction";
import { HealPlayerAction } from "./HealPlayerAction";
import { PassAction } from "./PassAction";
import { ResolveEffectsAction } from "./ResolveEffectsAction";
import { ResolveAttackAction } from "./ResolveAttackAction";
import { RevealCardsAction } from "./RevealCardsAction";
import { SetCardAction } from "./SetCardAction";
import { ShufflePileAction } from "./ShufflePileAction";


export type GameAction =
    | BurnAction
    | SetCardAction
    | DrawLeaderAction
    | PassAction
    | EndPriorityAction
    | ResolveEffectsAction
    | ResolveAttackAction
    | DealDamageAction
    | HealPlayerAction
    | DrawCardsAction
    | RevealCardsAction
    | ShufflePileAction