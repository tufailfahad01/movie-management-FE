import React, { ChangeEvent } from "react";
interface InputFieldProps {
  inputId: string;
  inputPlaceholder: string;
  inputType: string;
  maxWidth?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
}

const InputField: React.FC<InputFieldProps> = ({
  inputId,
  inputPlaceholder,
  inputType,
  maxWidth = "300px",
  handleChange,
  value,
}) => {
  // console.log(`w-full max-w-["${maxWidth}"]`);
  
  return (
    <div
      style={{ maxWidth: maxWidth }}
      className={`w-full`}
    >
      <label htmlFor={inputId} className="sr-only">
        {inputPlaceholder}
      </label>
      <input
        id={inputId}
        className={`bg-[#224957] rounded-md text-white focus:outline-none px-3 py-2 placeholder:text-white placeholder:text-sm placeholder:font-light w-full`}
        placeholder={inputPlaceholder}
        type={inputType}
        required
        onChange={(e) => handleChange(e)}
        value={value}
      />
    </div>
  );
};

export default InputField;
