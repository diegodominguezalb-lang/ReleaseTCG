import { createBurnScenario } from "../../lib/game/tests/scenarios/createBurnScenario";

import { compilePlayIntent } from "../../lib/game/rules/play";

import { processAction } from "../../lib/game/processors/processAction";
import { processCommandQueue } from "../../lib/game/processors/processCommandQueue";

import { findCard } from "../../lib/game/queries";

import { LocationType } from "../../lib/game/models";

describe("Burn Pipeline", () => {

    it("moves the played card onto the target gate", () => {

        const {
            context,
            intent,
        } = createBurnScenario();

        const result = compilePlayIntent(
            context,
            intent,
        );

        expect(result.success).toBe(true);
        expect(result.actions).toHaveLength(1);

        const [action] = result.actions;

        processAction(
            context,
            action,
        );

        expect(
            context.commandQueue,
        ).toHaveLength(2);

        processCommandQueue(
            context,
        );

        expect(
            context.commandQueue,
        ).toHaveLength(0);

        const location = findCard(
            context,
            intent.cards[0],
        );

        expect(location).not.toBeNull();

        expect(
            location!.location.locationType,
        ).toBe(
            LocationType.Gate,
        );

        const gate =
            context.state.board.gateZones[0];

        expect(
            gate.stack?.cards[0].id,
        ).toBe(
            intent.cards[0].id,
        );

    });

});