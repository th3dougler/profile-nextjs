import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
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
          <meta property="og:image" content="/profile.jpg" />
          <meta property="og:url" content="https://dougjones.ca" />
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
