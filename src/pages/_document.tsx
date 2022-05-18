import Document, { Html, Head, Main, NextScript } from "next/document";

class TheSpaceDocument extends Document {
  render() {
    const title = "The Space: an everlasting, Draw-to-Earn public space";
    const description =
      "The Space is a pixel map where players can tokenize, own, trade and color pixels. Pixels are tokenized as ERC721 tokens and traded under Harberger Tax, while owners of pixels receive Universal Basic Income(UBI). In the Future, The administration of The Space will be transfered to SpaceDAO, a decentralized autonomous organization formed by all $SPACE token holders.";
    const canonicalUrl = "https://thespace.game";
    const imageUrl = "https://thespace.game/img/thumb.jpg?v=1";
    const keywords = [
      "space",
      "spacedao",
      "pixels",
      "harberger",
      "decentralized",
      "ubi",
      "thespace",
      "matterslab",
      "matters.news",
      "創作有價",
    ];

    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover"
          />
          <meta name="description" content={description} />
          <meta key="keywords" name="keywords" content={keywords.join(",")} />
          <meta
            property="fb:app_id"
            content={process.env.NEXT_PUBLIC_FB_APP_ID}
          />
          <meta property="og:title" content={title} key="og:title" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={imageUrl} />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content="TheSpace" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={imageUrl} />
          <meta name="twitter:image:alt" content={description} />
          <meta name="twitter:site" content="@thespace2022" />
          <meta name="twitter:creator" content="@Mattersw3b" />
          <link rel="canonical" href={canonicalUrl} />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
            <>
              {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date); gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {page_path: window.location.pathname});`,
                }}
              />
            </>
          )}
        </body>
      </Html>
    );
  }
}

export default TheSpaceDocument;
