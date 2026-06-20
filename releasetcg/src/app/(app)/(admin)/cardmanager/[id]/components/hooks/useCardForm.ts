"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import { CardForm } from "../cardform/types";

export type FormState =
  | "idle"
  | "saving"
  | "deleting"
  | "saved"
  | "error";

type UseCardFormArgs = {
  id?: string;
  initial: CardForm;
};

export function useCardForm({
  id,
  initial,
}: UseCardFormArgs) {

  const router = useRouter();

  const isNew = !id;

  const [originalForm] =
    useState(initial);

  const [form, setForm] =
    useState(initial);

  const [state, setState] =
    useState<FormState>("idle");

  const hasChanges = useMemo(() => {
    return !shallowEqual(
      form,
      originalForm
    );
  }, [form, originalForm]);

  useEffect(() => {
    if (state !== "saved") return;

    const timer = setTimeout(() => {
      setState("idle");
    }, 2000);

    return () => clearTimeout(timer);
  }, [state]);

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
    if (
      !hasChanges ||
      state === "saving" ||
      state === "deleting"
    ) {
      return;
    }

    setState("saving");

    const endpoint = isNew
      ? "/api/cards/create"
      : "/api/cards/update";

    const payload = isNew
      ? { data: form }
      : { id, data: form };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setState("error");
        return;
      }

      setState("saved");

    } catch {
      setState("error");
    }
  }

  async function handleDelete() {

    if (
      !id ||
      state === "deleting"
    ) {
      return;
    }

    const confirmed = confirm(
      `Delete "${form.name}"?`
    );

    if (!confirmed) return;

    setState("deleting");

    try {

      const res = await fetch(
        "/api/cards/delete",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            id,
          }),
        }
      );

      if (!res.ok) {
        setState("error");
        return;
      }

      router.push("/cardmanager");
      router.refresh();

    } catch {
      setState("error");
    }
  }

  return {
    form,
    update,

    handleSave,
    handleDelete,

    hasChanges,

    state,

    isSaving:
      state === "saving",

    isDeleting:
      state === "deleting",

    isNew,
  };
}

function shallowEqual(
  a: CardForm,
  b: CardForm
) {
  const keys =
    Object.keys(a) as (keyof CardForm)[];

  for (const key of keys) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}