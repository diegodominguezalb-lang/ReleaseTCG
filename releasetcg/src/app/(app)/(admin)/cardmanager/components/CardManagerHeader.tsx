export function CardManagerHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">
          Card Manager
        </h1>

        <p className="text-muted-foreground">
          Manage the Release TCG card database.
        </p>
      </div>

      <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
        + New Card
      </button>
    </div>
  );
}