const TextInputs = ({ label, name, value, onChange, required = "false" }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold">
        {label}:
        <input
          type="text"
          id="title"
          name={name}
          className="w-full p-2 border rounded-lg"
          value={value}
          onChange={onChange}
          required={required}
        />
      </label>
    </div>
  );
};

export default TextInputs;
