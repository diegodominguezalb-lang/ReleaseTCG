const pools = [
  "All",
  "Public",
  "Beta",
  "Draft",
];

export function CardFilters() {
  return (
    <div className="flex gap-2">
      {pools.map((pool) => (
        <button
          key={pool}
          className="rounded-md border px-3 py-2"
        >
          {pool}
        </button>
      ))}
    </div>
  );
}