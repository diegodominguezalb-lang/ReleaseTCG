"use client";

import {
  type Dispatch,
  type RefObject,
  type SetStateAction,
  useCallback,
} from "react";

import type { CommunityDeck } from "@/types/community";
import type { PlayableCard } from "@/types/cards";

import { exportDeckCode } from "@/lib/export/exportDeckCode";
import { exportDeckImage } from "@/lib/export/exportDeckImage";

import { useRouter } from "next/navigation";
import { updateCommunityDeckDescription, deleteCommunityDeck } from "@/lib/community";

type Props = {
  deck: CommunityDeck | null;

  setDeck: Dispatch<
    SetStateAction<CommunityDeck | null>
  >;

  cards: PlayableCard[];

  deckOverviewRef:
    RefObject<HTMLDivElement | null>;
};

export function useCommunityDeckActions({
  deck,
  setDeck,
  cards,
  deckOverviewRef,
}: Props) {
  const handleSaveDescription = useCallback(
    async (description: string) => {
        if (!deck) {
        return;
        }

        // optimistic update
        setDeck({
        ...deck,
        description,
        });

        try {
        await updateCommunityDeckDescription({
            id: deck.id,
            description,
        });
        } catch (error) {
        console.error(error);

        // rollback
        setDeck(deck);

        alert("Unable to save description.");
        }
    },
    [deck, setDeck]
    );

  const router = useRouter();

    const handleDelete = useCallback(async () => {
        if (!deck) {
            return;
        }

        await deleteCommunityDeck(deck.id);

        router.push("/community");
    }, [deck, router]);

  const handleExportCode =
    useCallback(async () => {
      if (!deck) {
        return;
      }

      try {
        await exportDeckCode(
          deck.deck,
          cards
        );
      } catch (error) {
        console.error(error);
      }
    }, [deck, cards]);

  const handleExportImage =
    useCallback(async () => {
      if (
        !deck ||
        !deckOverviewRef.current
      ) {
        return;
      }

      try {
        await exportDeckImage(
          deckOverviewRef.current,
          `${deck.title}.png`
        );
      } catch (error) {
        console.error(error);
      }
    }, [deck, deckOverviewRef]);

  return {
    handleSaveDescription,
    handleDelete,
    handleExportCode,
    handleExportImage,
  };
}