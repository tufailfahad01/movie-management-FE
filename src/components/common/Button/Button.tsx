import React from "react";
import { ThreeDots } from "react-loader-spinner";
interface ButtonProps {
  label: string;
  variant?: "contained" | "outlined";
  type?: "submit" | "reset" | "button";
  size: "sm" | "md" | "lg";
  handleClick?: () => void;
  loading?: boolean;
}

const sizes = {
  sm: "h-[56px] w-[179px] flex justify-center items-center",
  md: "py-4 max-w-[202px]",
  lg: "py-4 max-w-[300px]",
};

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "contained",
  type = "button",
  size,
  handleClick,
  loading = false,
}) => {
  return (
    <button
      onClick={handleClick}
      type={type}
      className={` text-[16px] font-bold cursor-pointer text-white rounded-[10px] ${sizes[size]} ${
        variant === "contained"
          ? "bg-[#2BD17E] w-full"
          : "bg-transparent border-white border-2 text-white py-4 w-full"
      } flex items-center justify-center`}
      disabled={loading}
    >
      {loading ? (
        <ThreeDots
          height="24"
          width="40"
          radius="9"
          color="#ffffff"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
