import "./styles/tailwind.css";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "./styles/global.css";

import Head from "next/head";
import { BaseStyles, ThemeProvider } from "@primer/react";
import NextNProgress from "src/components/ProgressBar";

const contextClass = {
  success: "bg-blue-600",
  error: "bg-red-600",
  info: "bg-gray-600",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
};

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ThemeProvider preventSSRMismatch colorMode="dark">
          <BaseStyles>
            <NextNProgress options={{ showSpinner: false }} />
            <Component {...pageProps} />
          </BaseStyles>
          <ToastContainer />
        </ThemeProvider>
        <Analytics />
      </>
    </SessionProvider>
  );
}

export default MyApp;
