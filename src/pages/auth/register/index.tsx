import Button from "@/components/common/Button/Button";
import InputField from "@/components/common/InputField/InputField";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      if (response.data) {
        toast.success(response.data?.message);
        router.push("/auth/login");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (err: unknown) {
      setLoading(false);
      if (err && typeof err === "object" && "message" in err) {
        toast.error((err as { message: string }).message);
      } else {
        toast.error("An unknown error occurred");
      }
    }

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-8">
      <h1 className="text-4xl sm:text-5xl md:text-[64px] font-semibold">
        Sign up
      </h1>
      <form
        className="flex flex-col gap-5 w-full md:w-1/2 mx-auto items-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <InputField
          inputId="name"
          inputPlaceholder="Name"
          inputType="text"
          handleChange={handleNameChange}
          value={name}
        />

        <InputField
          inputId="email"
          inputPlaceholder="Email"
          inputType="email"
          handleChange={handleEmailChange}
          value={email}
        />

        <InputField
          inputId="password"
          inputPlaceholder="Password"
          inputType="password"
          handleChange={handlePasswordChange}
          value={password}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button label="Register" type="submit" size="lg" loading={loading} />
      </form>
      <p className="text-sm">
        Aleady have an account?{" "}
        <span
          className="text-[#2BD17E] cursor-pointer underline hover:text-[#1cbb6b]"
          onClick={() => router.push("/auth/login")}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default Register;
