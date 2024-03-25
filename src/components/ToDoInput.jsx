import React, { useState } from "react";

const FloatingLabelInput = ({ label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = (e) => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      setIsFocused(false);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="relative">
      <label
        className={`absolute left-2 transition-all text-gray-600 ${
          isFocused || value
            ? "top-0 text-sm"
            : "top-1/2 transform -translate-y-1/2"
        }`}
      >
        {label}
      </label>
      <input
        {...props}
        className="pr-16 pl-16 pt-3 pb-3 rounded-md indent-2 pt-4"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

// Kullanımı:
const ToDoInput = () => {
  // Form submit ve diğer state'ler buraya...
  const handleSubmit = () => {
    console.log("is clicked");
  };

  return (
    <>
      <div className="flex flex-col justify-center gap-4">
        <FloatingLabelInput label="Add Todo" placeholder=" " />
        <FloatingLabelInput label="Enter Description" placeholder=" " />
        <FloatingLabelInput label="Priority" placeholder=" " />
        <button
          onClick={handleSubmit}
          className="bg-lime-600 pr-4 pl-4 pt-3 pb-3 text-white rounded-md"
        >
          SAVE
        </button>
      </div>
    </>
  );
};

export default ToDoInput;
