"use client";

type Props = {
  onEdit?: () => void;
  onDelete?: () => void;
  onExportCode?: () => void;
  onExportImage?: () => void;
};

export default function CommunityGuideToolbar({
  onEdit,
  onDelete,
  onExportCode,
  onExportImage,
}: Props) {
  return (
    <div className="mt-auto flex flex-wrap gap-2 border-t pt-4">

      <button
        onClick={onEdit}
        className="rounded-md border px-3 py-2 text-sm hover:bg-accent"
      >
        Edit
      </button>

      <button
        onClick={onDelete}
        className="rounded-md border border-red-500 px-3 py-2 text-sm text-red-500 hover:bg-red-500/10"
      >
        Delete
      </button>

      <div className="ml-auto flex gap-2">

        <button
          onClick={onExportCode}
          className="rounded-md border px-3 py-2 text-sm hover:bg-accent"
        >
          Export Deck Code
        </button>

        <button
          onClick={onExportImage}
          className="rounded-md border px-3 py-2 text-sm hover:bg-accent"
        >
          Export Image
        </button>

      </div>

    </div>
  );
}