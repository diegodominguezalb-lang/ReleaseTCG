import { CardForm, UpdateCard } from "../types";
import { CardSection } from "../CardSection";
import { SelectInput } from "../../../../../../components/fields/SelectInput";
import { COLOR_OPTIONS } from "../constants";

type Props = {
  form: CardForm;
  update: UpdateCard;
};

export function PaletteSection({
  form,
  update,
}: Props) {
  return (
    <CardSection title="Palette">
      <div className="grid grid-cols-4 gap-3">
        <SelectInput
          label="Color 1"
          value={form.color1}
          options={COLOR_OPTIONS}
          onChange={(value) =>
            update("color1", value)
          }
        />

        <SelectInput
          label="Color 2"
          value={form.color2}
          options={COLOR_OPTIONS}
          onChange={(value) =>
            update("color2", value)
          }
        />

        <SelectInput
          label="Color 3"
          value={form.color3}
          options={COLOR_OPTIONS}
          onChange={(value) =>
            update("color3", value)
          }
        />

        <SelectInput
          label="Color 4"
          value={form.color4}
          options={COLOR_OPTIONS}
          onChange={(value) =>
            update("color4", value)
          }
        />
      </div>
    </CardSection>
  );
}