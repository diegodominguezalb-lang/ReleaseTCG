type NumberInputProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
};

export function NumberInput({
  label,
  value,
  onChange,
}: NumberInputProps) {
  return (
    <div>
      <label className="mb-1 block font-medium">
        {label}
      </label>

      <input
        type="number"
        className="w-full rounded border p-2"
        value={value ?? 0}
        onChange={(e) =>
          onChange(Number(e.target.value))
        }
      />
    </div>
  );
}