"use client";

export type CardFiltersState = {
  search: string;
  pool: string;
  power: string;
  bulk: string;
  color: string;
};

type Props = {
  filters: CardFiltersState;
  setFilters: React.Dispatch<
    React.SetStateAction<CardFiltersState>
  >;

  counts: {
    all: number;
    draft: number;
    private: number;
    beta: number;
    public: number;
  };
};

const pools = [
  "all",
  "draft",
  "private",
  "beta",
  "public",
];

const powers = [
  "all",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
];

const bulks = powers;

const colors = [
  "all",
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Cyan",
  "Blue",
  "Violet",
  "Magenta",
  "Pink",
];

export function CardFilters({
  filters,
  setFilters,
}: Props) {
  function update<K extends keyof CardFiltersState>(
    key: K,
    value: CardFiltersState[K]
  ) {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  return (
    <div className="space-y-4 rounded-xl border p-4">

      {/* Search */}
      <input
        className="w-full rounded-md border p-2"
        placeholder="Search by name, trait, or effect..."
        value={filters.search}
        onChange={(e) =>
          update("search", e.target.value)
        }
      />

      {/* Filters */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

        {/* Pool */}
        <div>
          <label className="mb-1 block text-sm font-medium">
            Pool
          </label>

          <select
            className="w-full rounded border p-2"
            value={filters.pool}
            onChange={(e) =>
              update("pool", e.target.value)
            }
          >
            {pools.map((pool) => (
              <option
                key={pool}
                value={pool}
              >
                {pool}
              </option>
            ))}
          </select>
        </div>

        {/* Power */}
        <div>
          <label className="mb-1 block text-sm font-medium">
            Power
          </label>

          <select
            className="w-full rounded border p-2"
            value={filters.power}
            onChange={(e) =>
              update("power", e.target.value)
            }
          >
            {powers.map((power) => (
              <option
                key={power}
                value={power}
              >
                {power}
              </option>
            ))}
          </select>
        </div>

        {/* Bulk */}
        <div>
          <label className="mb-1 block text-sm font-medium">
            Bulk
          </label>

          <select
            className="w-full rounded border p-2"
            value={filters.bulk}
            onChange={(e) =>
              update("bulk", e.target.value)
            }
          >
            {bulks.map((bulk) => (
              <option
                key={bulk}
                value={bulk}
              >
                {bulk}
              </option>
            ))}
          </select>
        </div>

        {/* Color */}
        <div>
          <label className="mb-1 block text-sm font-medium">
            Color
          </label>

          <select
            className="w-full rounded border p-2"
            value={filters.color}
            onChange={(e) =>
              update("color", e.target.value)
            }
          >
            {colors.map((color) => (
              <option
                key={color}
                value={color}
              >
                {color}
              </option>
            ))}
          </select>
        </div>

      </div>
    </div>
  );
}