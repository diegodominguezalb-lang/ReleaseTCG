const colorMap: Record<
  string,
  { label: string; bg: string }
> = {
  Red: { label: "R", bg: "bg-red-500" },
  Orange: { label: "O", bg: "bg-orange-500" },
  Yellow: { label: "Y", bg: "bg-yellow-400 text-black" },
  Green: { label: "G", bg: "bg-green-500" },
  Cyan: { label: "C", bg: "bg-cyan-500" },
  Blue: { label: "B", bg: "bg-blue-600" },
  Violet: { label: "V", bg: "bg-violet-600" },
  Magenta: { label: "M", bg: "bg-fuchsia-600" },
  Pink: { label: "P", bg: "bg-pink-500" },
};

export function PaletteChips({
  palette,
}: {
  palette: string[];
}) {
  return (
    <div className="flex flex-wrap gap-1">
      {palette.map((color) => {
        const chip = colorMap[color];

        return (
          <span
            key={color}
            className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white ${chip.bg}`}
          >
            {chip.label}
          </span>
        );
      })}
    </div>
  );
}