import Button from "@/components/common/Button/Button";
import InputField from "@/components/common/InputField/InputField";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

const Page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
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
    // console.log({ email, password, checked });

    try {
      const response = await api.post("/api/login", {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);

        router.push("/movies/list");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      console.log(err)
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
            className="w-5 h-5 rounded-xl"
            onChange={handleCheckedChange}
            checked={checked}
          />
          <label htmlFor="remember-me" className="text-[14px]">
            Remember me
          </label>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button label="Login" type="submit" size="lg" />
      </form>
    </div>
  );
};

export default Page;
