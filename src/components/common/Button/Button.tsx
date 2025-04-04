import React from "react";

interface ButtonProps {
  label: string;
  variant?: "contained" | "outlined";
  type?: "submit" | "reset" | "button";
  size: "sm" | "md" | "lg";
}

const sizes = {
  sm: "py-4 max-w-[139px]",
  md: "py-4 max-w-[202px]",
  lg: "py-2 max-w-[300px]",
};

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "contained",
  type = "button",
  size,
}) => {
  return (
    <button
      type={type}
      className={`cursor-pointer text-white rounded-[10px] ${sizes[size]} ${
        variant === "contained"
          ? "bg-[#2BD17E] w-full"
          : "bg-transparent border-white border-2 text-white py-4 w-full"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
