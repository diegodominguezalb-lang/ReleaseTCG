type Props = {
  power: number;
  bulk: number;
  size?: "sm" | "md";
};

export function StatChips({
  power,
  bulk,
  size = "sm",
}: Props) {
  const classes =
    size === "sm"
      ? "h-5 w-5 text-[10px]"
      : "h-6 w-6 text-xs";

  return (
    <div className="flex gap-1">
      <span
        className={`
          flex items-center justify-center
          rounded-full
          bg-zinc-700
          font-bold text-white
          ${classes}
        `}
      >
        {power}
      </span>

      <span
        className={`
          flex items-center justify-center
          rounded-full
          bg-zinc-300
          font-bold text-zinc-900
          ${classes}
        `}
      >
        {bulk}
      </span>
    </div>
  );
}