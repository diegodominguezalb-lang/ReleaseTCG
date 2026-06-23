"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { PlayableCard } from "@/types/cards";

import { CardViewer } from "./viewer/CardViewer";

type Props = {
  card: PlayableCard | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CardModal({
  card,
  open,
  onOpenChange,
}: Props) {
  if (!card) {
    return null;
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent
        className="
            w-[95vw]
            max-w-[1400px]
            h-[90vh]
            sm:max-w-[50vw]
            rounded-3xl
            overflow-hidden
            p-0
            border-0
            shadow-none
            bg-transparent
        "
    >
        <DialogHeader className="sr-only">
            <DialogTitle>{card.name}</DialogTitle>
        </DialogHeader>

        <CardViewer card={card} />
      </DialogContent>
    </Dialog>
  );
}