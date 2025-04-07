import React from "react";

interface LoaderProps {
  size?: number; 
  color?: string; 
}

const Loader: React.FC<LoaderProps> = ({ size = 40, color = "#ffffff" }) => {
  return (
    <div className="flex items-center justify-center h-screen w-screen" style={{ backgroundColor: "#083545" }}>
      <div
        className="rounded-full animate-spin border-4 border-t-transparent"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderColor: color,
          borderTopColor: "transparent",
        }}
      />
    </div>
  );
};

export default Loader;
