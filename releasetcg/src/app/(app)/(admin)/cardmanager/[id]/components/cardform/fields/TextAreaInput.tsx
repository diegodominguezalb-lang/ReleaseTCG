type TextAreaInputProps = {
  label?: string;
  value: string;
  rows?: number;
  placeholder?: string;
  onChange: (value: string) => void;
};

export function TextAreaInput({
  label,
  value,
  rows = 4,
  placeholder,
  onChange,
}: TextAreaInputProps) {
  return (
    <div>
      {label && (
        <label className="mb-1 block font-medium">
          {label}
        </label>
      )}

      <textarea
        rows={rows}
        className="w-full rounded border p-2"
        value={value}
        placeholder={placeholder}
        onChange={(e) =>
          onChange(e.target.value)
        }
      />
    </div>
  );
}