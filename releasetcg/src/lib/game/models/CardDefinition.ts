import { CardColor } from "./CardColor";
import { CardEffectDefinition } from "./CardEffectDefinition";
import { CardTraitDefinition } from "./CardTraitDefinition";

export interface CardDefinition {
    id: string;

    name: string;

    power: number;

    bulk: number;

    colors: CardColor[];

    trait: CardTraitDefinition | null;

    effects: CardEffectDefinition[];
}