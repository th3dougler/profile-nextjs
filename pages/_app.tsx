import Head from 'next/head';
import '@/styles/globals.css';

import { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Doug Jones - Web Developer in Toronto</title>
        <meta
          name="description"
          content="Doug Jones - Web Developer in Toronto"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Doug Jones, Web Developer, Toronto, FinTech, Node.js, AWS, Software Engineer, Douglas Jones, Typescript, React, Next.js, Postgres, DynamoDB"
        />
        <meta name="author" content="Doug Jones" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Doug Jones - Web Developer in Toronto"
        />
        <meta
          property="og:description"
          content="Doug Jones - Web Developer in Toronto"
        />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:site_name" content="Doug Jones - Web Developer" />

        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Doug Jones - Web Developer in Toronto"
        />
        <meta
          name="twitter:description"
          content="Doug Jones - Web Developer in Toronto"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
