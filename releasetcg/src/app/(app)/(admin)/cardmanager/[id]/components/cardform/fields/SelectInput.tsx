type SelectInputProps = {
  label?: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

export function SelectInput({
  label,
  value,
  options,
  onChange,
}: SelectInputProps) {
  return (
    <div>
      {label && (
        <label className="mb-1 block font-medium">
          {label}
        </label>
      )}

      <select
        className="w-full rounded border p-2"
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option === ""
              ? "None"
              : option}
          </option>
        ))}
      </select>
    </div>
  );
}