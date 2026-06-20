"use client";

import { useState } from "react";

import { normalizeCard } from "./cardform/normalizeCard";
import { DatabaseCard, CardForm } from "./cardform/types";

import { BasicInfoSection } from "./cardform/sections/BasicInfoSection";
import { PaletteSection } from "./cardform/sections/PaletteSection";
import { CardTextSection } from "./cardform/sections/CardTextSection";
import { MetadataSection } from "./cardform/sections/MetadataSection";
import { ImageSection } from "./cardform/sections/ImageSection";

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

    // TODO:
    // await updateCard(form);
  }

  return (
    <div className="space-y-8">
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

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="rounded-lg bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}