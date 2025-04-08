import AuthGuard from "@/components/common/AuthGuard/AuthGuard";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative">
      <ToastContainer />
      <AuthGuard>
        <Component {...pageProps} />
      </AuthGuard>
      <div className="absolute -bottom-20 w-full h-[100px] hidden sm:block">
        <Image
          src="/images/bg-image.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
