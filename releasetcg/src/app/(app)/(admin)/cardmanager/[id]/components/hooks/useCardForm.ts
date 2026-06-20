"use client";

import { useMemo, useState } from "react";

import { CardForm, UpdateCardDTO } from "../cardform/types";

export type SaveState = "idle" | "saving" | "saved" | "error";

type UseCardFormArgs = {
  id?: string;
  initial: CardForm;
};

export function useCardForm({ id, initial }: UseCardFormArgs) {
  const isNew = !id;

  /**
   * Stable baseline (DO NOT recompute)
   */
  const [originalForm] = useState(initial);

  const [form, setForm] = useState<CardForm>(initial);
  const [saveState, setSaveState] = useState<SaveState>("idle");

  function update<K extends keyof CardForm>(
    key: K,
    value: CardForm[K]
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  const hasChanges = useMemo(() => {
    return !shallowEqual(form, originalForm);
  }, [form, originalForm]);

  async function handleSave() {
    if (!hasChanges || saveState === "saving") return;

    setSaveState("saving");

    const endpoint = isNew
      ? "/api/cards/create"
      : "/api/cards/update";

    const payload = isNew
      ? { data: form }
      : { id, data: form };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setSaveState("error");
        return;
      }

      setSaveState("saved");

      setTimeout(() => setSaveState("idle"), 2000);
    } catch {
      setSaveState("error");
    }
  }

  return {
    form,
    update,
    handleSave,
    hasChanges,
    saveState,
    isNew,
  };
}

/**
 * Safer than JSON.stringify
 */
function shallowEqual(a: CardForm, b: CardForm) {
  const keys = Object.keys(a) as (keyof CardForm)[];

  for (const key of keys) {
    if (a[key] !== b[key]) return false;
  }

  return true;
}