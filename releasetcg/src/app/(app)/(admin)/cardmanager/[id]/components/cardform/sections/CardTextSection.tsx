import { CardForm, UpdateCard } from "../types";
import { CardSection } from "../CardSection";
import { TextAreaInput } from "../fields/TextAreaInput";

type Props = {
  form: CardForm;
  update: UpdateCard;
};

export function CardTextSection({
  form,
  update,
}: Props) {
  return (
    <CardSection title="Card Text">
      <TextAreaInput
        rows={5}
        placeholder="Effect 1"
        value={form.effect1}
        onChange={(value) =>
          update("effect1", value)
        }
      />

      <TextAreaInput
        rows={5}
        placeholder="Effect 2"
        value={form.effect2}
        onChange={(value) =>
          update("effect2", value)
        }
      />

      <TextAreaInput
        rows={3}
        placeholder="Flavor Text"
        value={form.flavor_text}
        onChange={(value) =>
          update("flavor_text", value)
        }
      />
    </CardSection>
  );
}