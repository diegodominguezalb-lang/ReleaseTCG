import { FormState } from "../hooks/useCardForm";

type Props = {
  isNew: boolean;
  hasChanges: boolean;
  state: FormState;

  onSave: () => void;
  onDelete: () => void;
};

export function Footer({
  isNew,
  hasChanges,
  state,
  onSave,
  onDelete,
}: Props) {
  return (
    <div className="flex items-center justify-between pt-4">

      <div>
        {!isNew && (
          <button
            onClick={onDelete}
            disabled={state === "deleting"}
            className="rounded-lg bg-red-600 px-6 py-2 text-white transition hover:bg-red-700 disabled:bg-gray-400"
          >
            {state === "deleting"
              ? "Deleting..."
              : "Delete Card"}
          </button>
        )}
      </div>

      <div className="flex items-center gap-4">

        <span className="text-sm">
          {state === "saving" ? (
            <span className="text-blue-600">
              Saving...
            </span>
          ) : state === "saved" ? (
            <span className="text-green-600">
              ✓ Saved
            </span>
          ) : state === "error" ? (
            <span className="text-red-600">
              Action Failed
            </span>
          ) : hasChanges ? (
            <span className="text-amber-600">
              ● Unsaved Changes
            </span>
          ) : null}
        </span>

        <button
          onClick={onSave}
          disabled={
            state === "saving" ||
            state === "deleting"
          }
          className="rounded-lg px-6 py-2 text-white transition bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {state === "saving"
            ? "Saving..."
            : "Save Changes"}
        </button>

      </div>
    </div>
  );
}