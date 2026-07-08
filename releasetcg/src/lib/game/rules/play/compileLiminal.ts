import { EngineContext } from "../../EngineContext";
import { PlayIntent } from "../../intents";
import { RuleResult } from "../RuleResult";
import { failure } from "../utils";

export function compileLiminal(
    context: EngineContext,
    intent: PlayIntent,
): RuleResult {
    return failure("Liminal not implemented.");
}