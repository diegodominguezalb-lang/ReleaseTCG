import { PaletteChips } from "@/app/(app)/(admin)/cardmanager/components/PaletteChips";

type Props = {
  power: number;
  bulk: number;
  colors: string[];
};

export function CardStats({
  power,
  bulk,
  colors,
}: Props) {
  return (
    <section className="space-y-1">
      <h3 className="text-lg font-semibold">
        Stats
      </h3>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <p className="text-sm text-muted-foreground">
            Power
          </p>

          <p className="text-xl font-semibold">
            {power}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Bulk
          </p>

          <p className="text-xl font-semibold">
            {bulk}
          </p>
        </div>

      </div>

      <div>
        <p className="mb-2 text-sm text-muted-foreground">
          Colors
        </p>

        <div>
          {colors.length === 0 ? (
            <span className="text-sm text-muted-foreground">
              Colorless
            </span>
          ) : (
            <PaletteChips palette={colors} />
          )}
        </div>

      </div>
    </section>
  );
}