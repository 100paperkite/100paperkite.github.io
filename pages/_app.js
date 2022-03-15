import '../styles/globals.css';

import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
