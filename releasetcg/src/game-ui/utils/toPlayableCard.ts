import type {
    CardDefinition,
    CardInstance,
} from "@/lib/game/models";

import type {
    PlayableCard,
} from "@/types/cards";

export function toPlayableCard(
    instance: CardInstance,
    definition: CardDefinition,
): PlayableCard {

    return {

        id: instance.id,

        name: definition.name,

        power: definition.power,

        bulk: definition.bulk,

        colors: definition.colors,

        trait: definition.trait?.name ?? null,

        effect1: null,

        effect2: null,

        flavor_text: null,

        description: null,

        artist: null,

        expansion: null,

        image_url: null,

    };

}