import { CardForm, UpdateCard } from "../types";
import { CardSection } from "../CardSection";
import { TextInput } from "../fields/TextInput";
import { NumberInput } from "../fields/NumberInput";

type Props = {
  form: CardForm;
  update: UpdateCard;
};

export function BasicInfoSection({
  form,
  update,
}: Props) {
  return (
    <CardSection title="Basic Information">
      <TextInput
        label="Name"
        value={form.name}
        onChange={(value) =>
          update("name", value)
        }
      />

      <div className="grid grid-cols-2 gap-4">
        <NumberInput
          label="Power"
          value={form.power}
          onChange={(value) =>
            update("power", value)
          }
        />

        <NumberInput
          label="Bulk"
          value={form.bulk}
          onChange={(value) =>
            update("bulk", value)
          }
        />
      </div>
    </CardSection>
  );
}