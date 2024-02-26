import Document, { Head, Html, Main, NextScript } from "next/document";
import { Widget } from "../components/Widget";
import Script from "next/script";

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
          <Script
            id="clarity-analytics"
            type="text/javascript"
            strategy="afterInteractive"
          >
            {` 
           (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "l805e911lq");
          `}
          </Script>
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
