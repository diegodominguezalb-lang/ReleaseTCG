"use client";

import { useEffect, useState } from "react";

import type {
  Deck,
  DeckSummary,
} from "@/types/decks";

import {
  listDecks,
  getDeck,
} from "@/utils/decks";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import PublishDeckList from "./PublishDeckList";

import { publishDeck } from "@/utils/community";

export default function PublishDeckDialog() {
  const [open, setOpen] = useState(false);

  const [step, setStep] = useState<1 | 2>(1);

  const [decks, setDecks] =
    useState<DeckSummary[]>([]);

  const [selectedDeck, setSelectedDeck] =
    useState<Deck | null>(null);

  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  useEffect(() => {
    if (!open) return;

    async function loadDecks() {
      try {
        const result = await listDecks();

        setDecks(result);
      } catch (err) {
        console.error(err);
      }
    }

    loadDecks();
  }, [open]);

  async function handleSelect(
    summary: DeckSummary
  ) {
    try {
      const deck = await getDeck(summary.id);

      setSelectedDeck(deck);

      setTitle(deck.name);

      setStep(2);
    } catch (err) {
      console.error(err);
    }
  }

  async function handlePublish() {
    if (!selectedDeck) {
        return;
    }

    try {
        await publishDeck(
        selectedDeck,
        title,
        description
        );

        alert("Deck published!");

        setOpen(false);

        setStep(1);

        setSelectedDeck(null);

        setTitle("");

        setDescription("");
    } catch (err) {
        console.error(err);

        alert("Unable to publish deck.");
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button>
          Publish Deck
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl">

        {step === 1 ? (
          <>
            <DialogHeader>
              <DialogTitle>
                Select a Deck
              </DialogTitle>

              <DialogDescription>
                Choose one of your saved decks to publish.
              </DialogDescription>
            </DialogHeader>

            <PublishDeckList
              decks={decks}
              onSelect={handleSelect}
            />
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>
                Publish Deck
              </DialogTitle>

              <DialogDescription>
                Add a title and description for your guide.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">

              <Input
                placeholder="Title"
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
              />

              <Textarea
                placeholder="Describe your deck..."
                rows={10}
                value={description}
                onChange={(e) =>
                  setDescription(
                    e.target.value
                  )
                }
              />

              <div className="flex justify-end gap-2">

                <Button
                  variant="outline"
                  onClick={() =>
                    setStep(1)
                  }
                >
                  Back
                </Button>

                <Button
                  onClick={handlePublish}
                >
                  Publish
                </Button>

              </div>

            </div>
          </>
        )}

      </DialogContent>
    </Dialog>
  );
}