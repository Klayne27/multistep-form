export default function InputFields({
  onChange,
  value,
  name,
  label,
  placeholder,
  error,
  onBlur,
}) {
  return (
    <div className="flex flex-col mb-4 gap-1">
      <div className="flex justify-between">
        <label htmlFor={name} className="text-md text-[#02295a]">
          {label}
        </label>
        {error && <p className="text-[#ed3548] text-sm font-bold">{error}</p>}
      </div>
      <input
        id={name}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        className={`border rounded-lg p-3 border-[#9699ab] text-[#02295a] font-medium focus:border-[#483EFF] focus:outline-none placeholder:text-[#9699ab] ${error ? 'border-[#ed3548]' : ''}`}
        placeholder={placeholder}
      />
    </div>
  );
}
