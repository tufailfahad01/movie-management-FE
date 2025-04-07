import React from "react";

const LoadingState: React.FC = () => {
  return (
    <div className="w-[90%] mx-auto py-10 text-white">
      {/* Top Bar */}
      <div className="md:w-[96%] animate-pulse mb-8 md:mb-16 flex justify-between items-center">
        <div className="bg-gray-300 h-8 w-40 rounded-md" />
        <div className="bg-gray-300 h-8 w-24 rounded-md" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-8 md:mb-16">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-[#092C39] max-w-[282px] max-h-[504px] p-2 rounded-xl mx-auto sm:mx-0 relative animate-pulse"
          >
            {/* Image area with centered dots */}
            <div className="bg-[#1f4d5e] h-[400px] rounded-md relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex space-x-1">
                  <span className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:0s]" />
                  <span className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:0.4s]" />
                </span>
              </div>
            </div>

            {/* Text placeholders */}
            <div className="bg-gray-500 h-6 w-3/4 rounded-md mb-2 mt-3" />
            <div className="bg-gray-500 h-4 w-1/2 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingState;
