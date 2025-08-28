import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";
import Head from "next/head";


/* eslint-disable @next/next/no-img-element */
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize Crisp once
    Crisp.configure("92580adf-bda9-44c7-a1ce-a83b917cea7b");
  }, []);

  return (
    <>
      {/* Meta Pixel Script */}
      <Head>
        <meta
          name="facebook-domain-verification"
          content="37mjzeust6hsewa26wseaztnephvi1"
        />
      </Head>

      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '740601925279946');
            fbq('track', 'PageView');
          `,
        }}
      />

      {/* No-JS Fallback Pixel */}
      <div
        dangerouslySetInnerHTML={{
          __html: `<noscript>
            <img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=740601925279946&ev=PageView&noscript=1" />
          </noscript>`,
        }}
      />

      {/* Your app content */}
      <Component {...pageProps} />
    </>
  );
}
/* eslint-enable @next/next/no-img-element */
