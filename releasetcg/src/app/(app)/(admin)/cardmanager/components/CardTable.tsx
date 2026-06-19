import { StatusBadge } from "./StatusBadge";

type Card = {
  id: number;
  number: string;
  name: string;
  type: string;
  cost: number;
  pool: string;
};

export function CardTable({
  cards,
}: {
  cards: Card[];
}) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b">
          <th className="p-3 text-left">
            #
          </th>

          <th className="p-3 text-left">
            Name
          </th>

          <th className="p-3 text-left">
            Type
          </th>

          <th className="p-3 text-left">
            Cost
          </th>

          <th className="p-3 text-left">
            Pool
          </th>

          <th />
        </tr>
      </thead>

      <tbody>
        {cards.map((card) => (
          <tr
            key={card.id}
            className="border-b"
          >
            <td className="p-3">
              {card.number}
            </td>

            <td className="p-3">
              {card.name}
            </td>

            <td className="p-3">
              {card.type}
            </td>

            <td className="p-3">
              {card.cost}
            </td>

            <td className="p-3">
              <StatusBadge
                status={card.pool}
              />
            </td>

            <td className="p-3">
              <button>
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}