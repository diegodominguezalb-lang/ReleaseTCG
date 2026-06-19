export function StatusBadge({
  status,
}: {
  status: string;
}) {
  return (
    <span className="rounded-full border px-3 py-1 text-xs">
      {status}
    </span>
  );
}