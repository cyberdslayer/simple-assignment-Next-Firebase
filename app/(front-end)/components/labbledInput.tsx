function LabelledInput({
    label,
    placeholder,
    type,
    value,
    setValue,
  }: any) {
    return (
      <div>
        <label className="block mb-2 text-sm font-semibold pt-4">{label}</label>
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          type={type || "text"}
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          required
        />
      </div>
    );
  }

  
  export default LabelledInput