import { Html, Head, Main, NextScript } from 'next/document';

import site from '../siteMetadata';

export default function Document() {
  return (
    <Html lang={site.locale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
