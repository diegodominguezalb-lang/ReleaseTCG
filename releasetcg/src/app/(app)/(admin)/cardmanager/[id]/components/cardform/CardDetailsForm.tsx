"use client";

import { BasicInfoSection } from "./sections/BasicInfoSection";
import { PaletteSection } from "./sections/PaletteSection";
import { CardTextSection } from "./sections/CardTextSection";
import { MetadataSection } from "./sections/MetadataSection";
import { ImageSection } from "./sections/ImageSection";

import { CardForm } from "./types";
import { useCardForm } from "../hooks/useCardForm";

import { getCardImageUrl } from "@/lib/images/getCardImageUrl";

type Props = {
  id?: string;
  initial: CardForm;
};

export function CardDetailsForm({ id, initial }: Props) {
  const {
    form,
    update,
    handleSave,
    hasChanges,
    saveState,
  } = useCardForm({ id, initial });

  const imageSrc =
    form.image_url?.trim()
      ? getCardImageUrl(form.image_url)
      : "/placeholder.png";

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_420px] h-screen">

      {/* LEFT SIDE */}
      <div className="overflow-y-auto p-8 space-y-8">

        <BasicInfoSection form={form} update={update} />
        <PaletteSection form={form} update={update} />
        <CardTextSection form={form} update={update} />
        <MetadataSection form={form} update={update} />
        <ImageSection form={form} update={update} />

        {/* FOOTER */}
        <div className="flex items-center justify-end gap-4 pt-4">

          {/* STATUS (no hydration gating) */}
          <span className="text-sm">
            {saveState === "saving" ? (
              <span className="text-blue-600">Saving...</span>
            ) : saveState === "saved" ? (
              <span className="text-green-600">✓ Saved</span>
            ) : saveState === "error" ? (
              <span className="text-red-600">Save Failed</span>
            ) : hasChanges ? (
              <span className="text-amber-600">● Unsaved Changes</span>
            ) : null}
          </span>

          {/* SAVE BUTTON */}
          <button
            onClick={handleSave}
            disabled={saveState === "saving"}
            className="rounded-lg px-6 py-2 text-white transition bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {saveState === "saving" ? "Saving..." : "Save Changes"}
        </button>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex border-l bg-muted/10 p-6">
        <div className="sticky top-6 w-full flex justify-center">
          <img
            src={imageSrc}
            alt={form.name}
            className="w-[320px] rounded-lg shadow-lg object-contain"
          />
        </div>
      </div>

    </div>
  );
}