"use client";

import { useState } from "react";

import { normalizeCard } from "./cardform/normalizeCard";
import { DatabaseCard, CardForm } from "./cardform/types";

import { BasicInfoSection } from "./cardform/sections/BasicInfoSection";
import { PaletteSection } from "./cardform/sections/PaletteSection";
import { CardTextSection } from "./cardform/sections/CardTextSection";
import { MetadataSection } from "./cardform/sections/MetadataSection";
import { ImageSection } from "./cardform/sections/ImageSection";

import { getCardImageUrl } from "@/lib/images/getCardImageUrl";

type Props = {
  card: DatabaseCard;
};

export function CardDetailsForm({ card }: Props) {
  const [form, setForm] = useState<CardForm>(
    normalizeCard(card)
  );

  function update<K extends keyof CardForm>(
    key: K,
    value: CardForm[K]
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  async function handleSave() {
    console.log(form);
    // await updateCard(form);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_420px] h-screen">
      
      {/* LEFT SIDE — FORM */}
      <div className="overflow-y-auto p-8 space-y-8">
        <BasicInfoSection form={form} update={update} />
        <PaletteSection form={form} update={update} />
        <CardTextSection form={form} update={update} />
        <MetadataSection form={form} update={update} />
        <ImageSection form={form} update={update} />

        <div className="flex justify-end pt-4">
          <button
            onClick={handleSave}
            className="rounded-lg bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* RIGHT SIDE — PREVIEW */}
      <div className="hidden md:flex border-l bg-muted/10 p-6">
        <div className="sticky top-6 w-full flex items-start justify-center">
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