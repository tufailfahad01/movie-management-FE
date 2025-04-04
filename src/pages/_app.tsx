import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative">
      <Component {...pageProps} />
      {/* <img src="/images/bg-image.svg" className="absolute bottom-0 right-0 w-full" /> */}
    </div>
  );
}
