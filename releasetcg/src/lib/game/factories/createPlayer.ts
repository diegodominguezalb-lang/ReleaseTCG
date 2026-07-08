import { PlayerState } from "../models";
import { drawCards, shuffle } from "../utils";
import { CreateGameOptions } from "../models/GameOptions";

export function createPlayer(
    player: CreateGameOptions["players"][number]
): {
    player: PlayerState;
    remainingMainDeck: typeof player.mainDeck;
} {
    const shuffledDeck = shuffle(player.mainDeck);

    const {
        hand,
        remainingDeck,
    } = drawCards(shuffledDeck, 5);

    return {
        player: {
            id: player.id,
            health: 10,
            leader: player.leader,
            leaderDrawn: false,
            hand,
            mainDeck: [],
            extraDeck: [...player.extraDeck],
        },
        remainingMainDeck: remainingDeck,
    };
}