import React from "react";
const LoadingState: React.FC = () => {
  return (
    <div className="w-[90%] mx-auto py-10">
      <div className="md:w-[96%] animate-pulse mb-8 md:mb-16 flex justify-between items-center">
        <div className="bg-gray-300 h-8 w-40 rounded-md" />
        <div className="bg-gray-300 h-8 w-24 rounded-md" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-8 md:mb-16">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-[#092C39] max-w-[282px] max-h-[504px] !p-2 rounded-xl mx-auto sm:mx-0 relative"
          >
            <div className="bg-[#1f4d5e] h-[400px] rounded-md" />
            <div className="bg-gray-500 h-6 mt-3 w-3/4 rounded-md" />
            <div className="bg-gray-500 h-4 mt-2 w-1/2 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingState;
