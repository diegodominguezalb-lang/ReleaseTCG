"use client";

import DeletePostDialog from "./DeletePostDialog";

type Props = {
  canEdit?: boolean;

  isEditing: boolean;

  onStartEditing: () => void;
  onSave: () => void;
  onCancel: () => void;

  onDelete: () => void;
  onExportCode: () => void;
  onExportImage: () => void;
};

export default function CommunityGuideToolbar({
  canEdit = true,

  isEditing,

  onStartEditing,
  onSave,
  onCancel,

  onDelete,
  onExportCode,
  onExportImage,
}: Props) {
  return (
    <div className="mt-8 flex flex-wrap gap-3 border-t pt-4">

      {canEdit && !isEditing && (
        <>
          <button
            onClick={onStartEditing}
            className="rounded-md border px-3 py-2 text-sm hover:bg-muted"
          >
            Edit Guide
          </button>

          <DeletePostDialog
            onDelete={onDelete}
          />
        </>
      )}

      {canEdit && isEditing && (
        <>
          <button
            onClick={onSave}
            className="rounded-md border bg-primary px-3 py-2 text-sm text-primary-foreground"
          >
            Save
          </button>

          <button
            onClick={onCancel}
            className="rounded-md border px-3 py-2 text-sm hover:bg-muted"
          >
            Cancel
          </button>
        </>
      )}

      <button
        onClick={onExportCode}
        className="rounded-md border px-3 py-2 text-sm hover:bg-muted"
      >
        Export Deck Code
      </button>

      <button
        onClick={onExportImage}
        className="rounded-md border px-3 py-2 text-sm hover:bg-muted"
      >
        Export Deck Image
      </button>

    </div>
  );
}