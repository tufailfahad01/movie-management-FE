import React, { ChangeEvent } from "react";
interface InputFieldProps {
  inputId: string;
  inputPlaceholder: string;
  inputType: string;
  textCenter?: boolean;
  maxWidth?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
}

const InputField: React.FC<InputFieldProps> = ({
  inputId,
  inputPlaceholder,
  inputType,
  textCenter = true,
  maxWidth = "300px",
  handleChange,
  value,
}) => {
  // console.log(maxWidth);
  return (
    <div className={`w-full ${textCenter && "text-center"}`}>
      <label htmlFor={inputId} className="sr-only">
        {inputPlaceholder}
      </label>
      <input
        id={inputId}
        className={`bg-[#224957] max-w-[${maxWidth}] rounded-md text-white focus:outline-none px-3 py-2 placeholder:text-white placeholder:text-sm placeholder:font-light w-full`}
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
