import { useRouter } from "next/router";
import { useEffect } from "react";

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (!access_token) {
      router.push("/auth/login");
    }
  }, [router]);

  return <>{children}</>;
};

export default AuthGuard;
