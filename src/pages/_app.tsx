import AuthGuard from "@/components/common/AuthGuard/AuthGuard";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative">
      <ToastContainer />
      <AuthGuard>
        <Component {...pageProps} />
      </AuthGuard>
    </div>
  );
}
{
  /* <img src="/images/bg-image.svg" className="absolute bottom-0 right-0 w-full" /> */
}
