import "./styles/tailwind.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify";
import NextNProgress from "@/components/ProgressBar";
import { BaseStyles, ThemeProvider } from "@primer/react";

import "react-toastify/dist/ReactToastify.css";
import "./styles/global.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link rel="shortcut icon" href="./favicon.png" type="image/x-icon" />
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
  );
}

export default MyApp;
