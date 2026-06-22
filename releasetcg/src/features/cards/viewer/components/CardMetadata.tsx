type Props = {
  artist: string;
  expansion: string;
};

export function CardMetadata({
  artist,
  expansion,
}: Props) {
  return (
    <section className="space-y-3">

      <h3 className="text-lg font-semibold">
        Metadata
      </h3>

      <div className="grid grid-cols-[120px_1fr] gap-y-2">

        <span className="font-medium">
          Artist
        </span>

        <span>
          {artist || "Unknown"}
        </span>

        <span className="font-medium">
          Expansion
        </span>

        <span>
          {expansion || "—"}
        </span>

      </div>

    </section>
  );
}