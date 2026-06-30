"use client";

import CommunityGuideToolbar from "./CommunityGuideToolbar";

type Props = {
  title: string;
  author: string;
  description: string;

  onEdit?: () => void;
  onDelete?: () => void;
  onExportCode?: () => void;
  onExportImage?: () => void;
};

export default function CommunityGuide({
  title,
  author,
  description,
  onEdit,
  onDelete,
  onExportCode,
  onExportImage,
}: Props) {
  return (
    <div className="flex h-full flex-col rounded-xl border bg-card p-6">

      <div className="border-b pb-4">

        <h1 className="text-3xl font-bold">
          {title}
        </h1>

        <p className="text-sm text-muted-foreground">
          by {author}
        </p>

      </div>

      <div className="mt-6 flex-1 whitespace-pre-wrap leading-7">
        {description}
      </div>

      <CommunityGuideToolbar
        onEdit={onEdit}
        onDelete={onDelete}
        onExportCode={onExportCode}
        onExportImage={onExportImage}
      />

    </div>
  );
}