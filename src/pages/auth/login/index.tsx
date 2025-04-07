import Button from "@/components/common/Button/Button";
import InputField from "@/components/common/InputField/InputField";
import api from "@/services/api";
import Error from "next/error";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleCheckedChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      if (response.data && response.data.data?.access_token) {
        localStorage.setItem("access_token", response.data.data.access_token);
        router.push("/");
        toast.success("Login successful!");
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
    } catch (err: unknown) {
      setLoading(false);
      if (err && typeof err === "object" && "message" in err) {
        toast.error((err as { message: string }).message);
      } else {
        toast.error("An unknown error occurred");
      }
    }

    setEmail("");
    setPassword("");
    setChecked(false);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
        Sign in
      </h1>
      <form
        className="flex flex-col gap-5 w-full md:w-1/2 mx-auto items-center"
        onSubmit={(e) => handleSubmit(e)}
      >
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

        <div className="flex gap-2">
          <input
            type="checkbox"
            id="remember-me"
            name="rememberMe"
            className="w-5 h-5 rounded-xl !bg-[#224957] !border-0"
            style={{ border: "none !important",  }}
            onChange={handleCheckedChange}
            checked={checked}
          />
          <label htmlFor="remember-me" className="text-[14px]">
            Remember me
          </label>
        </div>
        <Button label="Login" type="submit" size="lg" loading={loading} />
      </form>
      <p className="text-sm">
        Don&apos;t have an account?{" "}
        <span
          className="text-[#2BD17E] cursor-pointer underline hover:text-[#1cbb6b]"
          onClick={() => router.push("/auth/register")}
        >
          Register
        </span>
      </p>
    </div>
  );
};

export default Login;
