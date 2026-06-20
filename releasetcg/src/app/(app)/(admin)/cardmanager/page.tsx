import { getCards } from "./utils/getCards";

import { CardManagerHeader } from "./components/CardManagerHeader";
import { CardFilters } from "./components/CardFilters";
import { CardTable } from "./components/CardTable";

export default async function CardManagerPage() {
  const cards = await getCards();

  return (
    <main className="space-y-8 p-8">
      <CardManagerHeader />

      <CardFilters />

      <CardTable cards={cards} />
    </main>
  );
}