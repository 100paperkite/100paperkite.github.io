import { Html, Head, Main, NextScript } from 'next/document';

import site from '../siteMetadata';
import * as gtag from '../lib/gtag';

export default function Document() {
  return (
    <Html lang={site.locale}>
      <Head>
        {process.env.NODE_ENV === 'production' && (
          <>
            <script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
              }}
            ></script>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
          </>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
