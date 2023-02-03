import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
    <Analytics />
    </>
  );
}

export default MyApp;
