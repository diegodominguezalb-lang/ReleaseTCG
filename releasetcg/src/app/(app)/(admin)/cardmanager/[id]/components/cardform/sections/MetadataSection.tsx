import { CardForm, UpdateCard } from "../types";
import { CardSection } from "../CardSection";
import { TextInput } from "../fields/TextInput";
import { SelectInput } from "../fields/SelectInput";
import { POOL_OPTIONS } from "../constants";

type Props = {
  form: CardForm;
  update: UpdateCard;
};

export function MetadataSection({
  form,
  update,
}: Props) {
  return (
    <CardSection title="Metadata">
      <TextInput
        label="Expansion"
        value={form.expansion}
        onChange={(value) =>
          update("expansion", value)
        }
      />

      <TextInput
        label="Artist"
        value={form.artist}
        onChange={(value) =>
          update("artist", value)
        }
      />

      <SelectInput
        label="Pool"
        value={form.pool}
        options={POOL_OPTIONS}
        onChange={(value) =>
          update("pool", value)
        }
      />
    </CardSection>
  );
}