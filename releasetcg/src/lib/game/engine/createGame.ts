import { GameState } from "../models";
import { createBoard } from "./createBoard";
import { createPlayer } from "./createPlayer";
import { createPriorityState } from "./createPriorityState";
import { createTurnState } from "./createTurnState";
import { createPublicPile } from "../utils";
import { CreateGameOptions } from "./CreateGameOptions";

export function createGame(
    options: CreateGameOptions
): GameState {
    const first = createPlayer(options.players[0]);
    const second = createPlayer(options.players[1]);

    return {
        id: options.gameId,

        players: [
            first.player,
            second.player,
        ],

        board: createBoard(),

        publicPile: createPublicPile(
            first.remainingMainDeck,
            second.remainingMainDeck
        ),

        gap: [],

        turn: createTurnState(
            options.firstPlayerId
        ),

        priority: createPriorityState(
            options.firstPlayerId
        ),

        winnerId: null,
    };
}