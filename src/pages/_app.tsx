import "./styles/tailwind.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify";
import NextNProgress from "@/components/ProgressBar";
import { BaseStyles, ThemeProvider } from "@primer/react";

import "react-toastify/dist/ReactToastify.css";
import "./styles/global.css";
import Script from "next/script";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link rel="shortcut icon" href="./favicon.png" type="image/x-icon" />
        <Script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "l805e911lq");
      </Script>
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
