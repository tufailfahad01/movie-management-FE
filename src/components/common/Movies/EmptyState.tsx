import React from "react";
import Button from "../Button/Button";
import { useRouter } from "next/router";
import Image from "next/image";
import { toast } from "react-toastify";

const EmptyState = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    router.push("/auth/login");
    toast.success("Logged out successfully");
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-8">
      <button
        className="absolute top-10 right-15 flex items-center gap-2 cursor-pointer"
        onClick={handleLogout}
      >
        Logout
        <Image src="/images/Group.svg" alt="logout" width={18} height={18} />
      </button>

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
