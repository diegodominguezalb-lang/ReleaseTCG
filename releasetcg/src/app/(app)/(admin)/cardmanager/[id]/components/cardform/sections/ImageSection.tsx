import { CardForm, UpdateCard } from "../types";
import { CardSection } from "../CardSection";
import { TextInput } from "../../../../../../components/fields/TextInput";

type Props = {
  form: CardForm;
  update: UpdateCard;
};

export function ImageSection({
  form,
  update,
}: Props) {
  return (
    <CardSection title="Card Image">
      <TextInput
        label="Image URL"
        value={form.image_url}
        placeholder="Image URL"
        onChange={(value) =>
          update("image_url", value)
        }
      />
    </CardSection>
  );
}