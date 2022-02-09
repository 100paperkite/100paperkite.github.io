import '../styles/globals.css';

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow max-w-screen-md w-full mx-auto">
          <Component className="flex" {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
