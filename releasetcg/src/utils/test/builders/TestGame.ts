import { EngineContext } from "@/lib/game/EngineContext";

import {
    BoardPosition,
    CardColor,
    CardDefinition,
    CardInstance,
    GamePhase,
    GameState,
    LocationType,
    PileState,
    PileType,
    PlayerSide,
    PlayerState,
    PlayType,
    PriorityState,
    TurnState,
} from "@/lib/game/models";

import {
    createTestCardDefinition,
} from "../factories/createTestCardDefinition";

import {
    createTestCardInstance,
} from "../factories/createTestCardInstance";

import { GateReference, LocationReference } from "@/lib/game/refs";
import { PlayIntent } from "@/lib/game/intents/PlayIntent";
import { compilePlayIntent } from "@/lib/game/rules/play/compilePlayIntent";

export class TestGame {

    public readonly context: EngineContext;

    public readonly state: GameState;

    public readonly player1: PlayerState;

    public readonly player2: PlayerState;

    private nextDefinition = 1;

    constructor() {

        const leader1 = createTestCardInstance(
            "leader-p1",
            "P1",
        );

        const leader2 = createTestCardInstance(
            "leader-p2",
            "P2",
        );

        this.player1 = {
            id: "P1",
            health: 20,
            leader: leader1,
            leaderDrawn: true,
        };

        this.player2 = {
            id: "P2",
            health: 20,
            leader: leader2,
            leaderDrawn: true,
        };

        this.state = {

            id: "TEST_GAME",

            players: [
                this.player1,
                this.player2,
            ],

            board: {

                gateZones: [],

                setZones: [],

            },

            piles: [

                this.createPile(
                    PileType.Hand,
                    "P1",
                ),

                this.createPile(
                    PileType.Hand,
                    "P2",
                ),

                this.createPile(
                    PileType.MainDeck,
                    "P1",
                ),

                this.createPile(
                    PileType.MainDeck,
                    "P2",
                ),

                this.createPile(
                    PileType.ExtraDeck,
                    "P1",
                ),

                this.createPile(
                    PileType.ExtraDeck,
                    "P2",
                ),

                this.createPile(
                    PileType.PublicPile,
                ),

                this.createPile(
                    PileType.Gap,
                ),

            ],

            turn: {

                turn: 1,

                activePlayerId: "P1",

                phase: GamePhase.Action,

            } satisfies TurnState,

            priority: {

                currentPlayerId: "P1",

                passes: 0,

            } satisfies PriorityState,

            winnerId: null,

        };

        this.context = {

            state: this.state,

            cardDatabase: {},

            commandQueue: [],

            events: [],

        };

    }

    public addHandCard(options: {

        playerId?: string;

        colors: CardColor[];

    }): CardInstance {

        const playerId =
            options.playerId ?? "P1";

        const card =
            this.createCard(
                options.colors,
                playerId,
            );

        this.getPile(
            PileType.Hand,
            playerId,
        ).cards.push(card);

        return card;

    }

    public addDeckCard(options: {

        playerId?: string;

        colors: CardColor[];

    }): CardInstance {

        const playerId =
            options.playerId ?? "P1";

        const card =
            this.createCard(
                options.colors,
                playerId,
            );

        this.getPile(
            PileType.MainDeck,
            playerId,
        ).cards.push(card);

        return card;

    }

    public addGateCard(options: {

        side: PlayerSide;

        position: BoardPosition;

        colors: CardColor[];

        ownerId?: string;

    }): CardInstance {

        const ownerId =
            options.ownerId ?? "P1";

        const card =
            this.createCard(
                options.colors,
                ownerId,
            );

        let gate =
            this.state.board.gateZones.find(
                g =>
                    g.side === options.side &&
                    g.position === options.position,
            );

        if (!gate) {

            gate = {

                side: options.side,

                position: options.position,

                stack: {

                    cards: [],

                },

            };

            this.state.board.gateZones.push(
                gate,
            );

        }

        gate.stack ??= {

            cards: [],

        };

        gate.stack.cards.unshift(card);

        return card;

    }

    public addEmptyGate(
        side: PlayerSide,
        position: BoardPosition,
    ): void {

        const existing =
            this.state.board.gateZones.find(
                gate =>
                    gate.side === side &&
                    gate.position === position,
            );

        if (existing) {
            return;
        }

        this.state.board.gateZones.push({

            side,

            position,

            stack: null,

        });

    }

    public reference(
        card: CardInstance,
    ) {

        return {
            id: card.id,
        };

    }

    public gateReference(
        side: PlayerSide,
        position: BoardPosition,
    ): GateReference {

        return {
            locationType: LocationType.Gate,
            side,
            position,
        };

    }

    public playIntent(
        playType: PlayType,
        cards: CardInstance[],
        destination: LocationReference | LocationReference[],
    ): PlayIntent {

        return {

            type: "play",

            player: {

                id: this.player1.id,

            },

            playType,

            cards: cards.map(
                card => this.reference(card),
            ),

            destinations: Array.isArray(destination)
                ? destination
                : [
                    destination,
                ],

        };

    }

    public compilePlay(
        intent: PlayIntent,
    ) {

        return compilePlayIntent(
            this.context,
            intent,
        );

    }

    private createCard(
        colors: CardColor[],
        ownerId: string,
    ): CardInstance {

        const definitionId =
            `TEST_DEF_${this.nextDefinition++}`;

        const definition: CardDefinition =
            createTestCardDefinition(
                definitionId,
                colors,
            );

        this.context.cardDatabase[
            definition.id
        ] = definition;

        return createTestCardInstance(
            definition.id,
            ownerId,
        );

    }

    private createPile(
        pileType: PileType,
        ownerId?: string,
    ): PileState {

        return {

            id:
                ownerId
                    ? `${pileType}_${ownerId}`
                    : pileType,

            pileType,

            cards: [],

            ownerId,

        };

    }

    private getPile(
        pileType: PileType,
        ownerId?: string,
    ): PileState {

        const pile =
            this.state.piles.find(
                p =>
                    p.pileType === pileType &&
                    p.ownerId === ownerId,
            );

        if (!pile) {

            throw new Error(
                `Missing pile ${pileType}`,
            );

        }

        return pile;

    }


}