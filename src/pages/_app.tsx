import "./styles/tailwind.css";
import { AppProps } from "next/app";
import { Provider as NextAuthProvider } from "next-auth/client";

import "bootstrap/dist/css/bootstrap.css";
import "./styles/global.css";

import { Header } from "../components/Header/index";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
