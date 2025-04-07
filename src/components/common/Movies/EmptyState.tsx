import React from "react";
import Button from "../Button/Button";
import { useRouter } from "next/router";

const EmptyState = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-8">
      <h1 className="text-3xl md:text-4xl font-medium">
        Your movie list is empty
      </h1>
      <Button
        handleClick={() => router.push("/create-movie")}
        label="Add a new movie"
        size="md"
      />
    </div>
  );
};

export default EmptyState;
