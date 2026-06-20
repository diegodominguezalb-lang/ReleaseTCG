import { notFound } from "next/navigation";
import { getCard } from "./utils/getCard";
import { CardDetailsForm } from "./components/CardDetailsForm";

export default async function EditCardPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const card = await getCard(id);

  if (!card) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl p-8">
      <CardDetailsForm card={card} />
    </main>
  );
}