export function CardFilters() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-card p-4">
      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Search cards..."
          className="w-80 rounded-md border px-3 py-2"
        />

        <div className="flex gap-2">
          <button className="rounded-md border px-4 py-2">
            Refresh
          </button>

          <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
            + New Card
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <select className="rounded-md border px-3 py-2">
          <option>All Pools</option>
          <option>Public</option>
          <option>Beta</option>
          <option>Draft</option>
          <option>Internal</option>
        </select>

        <select className="rounded-md border px-3 py-2">
          <option>All Palettes</option>
          <option>1 Color</option>
          <option>2 Colors</option>
          <option>3 Colors</option>
          <option>4 Colors</option>
        </select>

        <select className="rounded-md border px-3 py-2">
          <option>Sort: Name</option>
          <option>Power</option>
          <option>Bulk</option>
          <option>Palette Size</option>
          <option>Status</option>
        </select>
      </div>
    </div>
  );
}