import Document, { Head, Html, Main, NextScript } from "next/document";
import { Widget } from "../components/Widget";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
          {/* <link
            rel="icon"
            type="image/svg+xml"
            href="https://github.githubassets.com/favicons/favicon.svg"
          ></link> */}
        </Head>
        <body>
          <Main />
          <Widget />
          <NextScript />
        </body>
      </Html>
    );
  }
}
