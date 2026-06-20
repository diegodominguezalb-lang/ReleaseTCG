"use client";

import { useMemo, useState } from "react";

import {
  CardForm,
  DatabaseCard,
  UpdateCardDTO,
} from "../cardform/types";

import { normalizeCard } from "../cardform/normalizeCard";

export type SaveState =
  | "idle"
  | "saving"
  | "saved"
  | "error";

export function useCardForm(card: DatabaseCard) {
  // Keep a normalized copy of the original card
  const originalForm = useMemo(
    () => normalizeCard(card),
    [card]
  );

  const [form, setForm] = useState<CardForm>(
    originalForm
  );

  const [saveState, setSaveState] =
    useState<SaveState>("idle");

  function update<K extends keyof CardForm>(
    key: K,
    value: CardForm[K]
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  const hasChanges =
    JSON.stringify(form) !==
    JSON.stringify(originalForm);

  async function handleSave() {
    if (!hasChanges) return;

    setSaveState("saving");

    const payload: UpdateCardDTO = {
      id: card.id,
      data: form,
    };

    try {
      const res = await fetch(
        "/api/cards/update",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        setSaveState("error");
        return;
      }

      setSaveState("saved");

      setTimeout(() => {
        setSaveState("idle");
      }, 2500);
    } catch {
      setSaveState("error");
    }
  }

  return {
    form,
    update,

    hasChanges,

    saveState,

    handleSave,
  };
}