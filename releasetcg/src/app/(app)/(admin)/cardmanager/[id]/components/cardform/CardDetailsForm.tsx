"use client";

import { BasicInfoSection } from "./sections/BasicInfoSection";
import { PaletteSection } from "./sections/PaletteSection";
import { CardTextSection } from "./sections/CardTextSection";
import { MetadataSection } from "./sections/MetadataSection";
import { ImageSection } from "./sections/ImageSection";

import { DatabaseCard } from "./types";
import { useCardForm } from "../hooks/useCardForm";

import { getCardImageUrl } from "@/lib/images/getCardImageUrl";

type Props = {
  card: DatabaseCard;
};

export function CardDetailsForm({ card }: Props) {
  const {
    form,
    update,
    handleSave,
    hasChanges,
    saveState,
  } = useCardForm(card);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_420px] h-screen">

      {/* ================= LEFT ================= */}

      <div className="overflow-y-auto p-8 space-y-8">

        <BasicInfoSection
          form={form}
          update={update}
        />

        <PaletteSection
          form={form}
          update={update}
        />

        <CardTextSection
          form={form}
          update={update}
        />

        <MetadataSection
          form={form}
          update={update}
        />

        <ImageSection
          form={form}
          update={update}
        />

        {/* Footer */}

        <div className="flex items-center justify-end gap-4 pt-4">

          {/* Status */}

          {hasChanges ? (
            <span className="text-sm font-medium text-amber-600">
              ● Unsaved Changes
            </span>
          ) : saveState === "saved" ? (
            <span className="text-sm font-medium text-green-600">
              ✓ Saved
            </span>
          ) : saveState === "error" ? (
            <span className="text-sm font-medium text-red-600">
              Save Failed
            </span>
          ) : null}

          {/* Save Button */}

          <button
            onClick={handleSave}
            disabled={
              !hasChanges ||
              saveState === "saving"
            }
            className="
              rounded-lg
              px-6
              py-2
              text-white
              transition

              bg-blue-600
              hover:bg-blue-700

              disabled:bg-gray-400
              disabled:cursor-not-allowed
            "
          >
            {saveState === "saving"
              ? "Saving..."
              : "Save Changes"}
          </button>

        </div>

      </div>

      {/* ================= RIGHT ================= */}

      <div className="hidden border-l bg-muted/10 p-6 md:flex">

        <div className="sticky top-6 flex w-full items-start justify-center">

          <img
            src={getCardImageUrl(form.image_url)}
            alt={form.name}
            className="w-[320px] rounded-lg shadow-lg object-contain"
          />

        </div>

      </div>

    </div>
  );
}