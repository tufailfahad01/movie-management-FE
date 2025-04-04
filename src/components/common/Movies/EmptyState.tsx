import React from "react";
import Button from "../Button/Button";

const EmptyState = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-8">
      <h1 className="text-3xl md:text-4xl font-medium">
        Your movie list is empty
      </h1>
      <Button label="Add a new movie" size="md" />
    </div>
  );
};

export default EmptyState;
