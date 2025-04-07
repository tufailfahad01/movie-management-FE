import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../Loader";

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (router.pathname === "/auth/login") {
      setLoading(false);
      return;
    }
    if (!access_token) {
      router.push("/auth/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default AuthGuard;
