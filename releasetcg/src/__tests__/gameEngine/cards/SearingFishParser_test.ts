import {

    parseAbilities,

} from "@/lib/game/abilities/parser";

describe(

    "Searing Fish parser",

    () => {

        it(

            "parses abilities from json",

            () => {

                const json = [

                    {

                        trigger: {

                            type: "play",

                        },

                        effects: [

                            {

                                type: "drawCards",

                                amount: 1,

                            },

                            {

                                type: "damagePlayer",

                                target: "opponent",

                                amount: 1,

                                modifiers: [

                                    {

                                        type: "always",

                                    },

                                ],

                            },

                        ],

                    },

                ];

                const abilities =

                    parseAbilities(
                        json,
                    );

                expect(
                    abilities,
                ).toHaveLength(1);

                expect(

                    abilities[0].effects,

                ).toHaveLength(2);

            },

        );

    },

);