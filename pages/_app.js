import '../styles/globals.css';
import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';

import * as gtag from '../lib/gtag';
import site from '../siteMetadata';

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const handleRouteChange = (url) => {
        gtag.pageview(url);
      };
      router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [router.events]);

  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: site.locale,
          url: site.url,
          site_name: site.title,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
