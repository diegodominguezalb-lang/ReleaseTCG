"use client";
import { AdminCardSummary } from "@/types/cards";

import { useRouter } from "next/navigation";
import { PaletteChips } from "./PaletteChips";

export function CardTable({
  cards,
}: {
  cards: AdminCardSummary[];
}) {
  const router = useRouter();

  return (
    <div className="overflow-hidden rounded-xl border">
        <table className="w-full border-collapse">
        <thead className="bg-muted">
            <tr className="border-b">
                <th className="p-3 text-left">
                    Card
                </th>

                <th className="p-3 text-left">
                    Stats
                </th>

                <th className="p-3 text-left">
                    Palette
                </th>
            </tr>
        </thead>

        <tbody>
            {cards.map((card) => (
            <tr
                key={card.id}
                className="cursor-pointer border-b hover:bg-muted"
                onClick={() =>
                    router.push(`/cardmanager/${card.id}`)
                }
            >
                <td className="p-3">
                {card.name}
                </td>

                <td className="p-3">
                {card.power}/{card.bulk}
                </td>

                <td className="p-3">
                    <PaletteChips palette={card.palette} />
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  );
}