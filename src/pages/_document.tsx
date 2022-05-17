import Document, { Html, Head, Main, NextScript } from "next/document";

class TheSpaceDocument extends Document {
  render() {
    const title = "The Space: an everlasting, Draw-to-Earn public space";
    const description =
      "The Space is a pixel map where players can tokenize, own, trade and color pixels. Pixels are tokenized as ERC721 tokens and traded under Harberger Tax, while owners of pixels receive Universal Basic Income(UBI). In the Future, The administration of The Space will be transfered to SpaceDAO, a decentralized autonomous organization formed by all $SPACE token holders.";
    const canonicalSiteDomain =
      process.env.NEXT_PUBLIC_SITE_DOMAIN || "thespace.game";
    const canonicalUrl = `https://${canonicalSiteDomain}`;
    const imageUrl = `https://${canonicalSiteDomain}/img/thumb.jpg?v=1`;
    const keywords = [
      "TheSpace",
      "Space",
      "SpaceDAO",
      "pixels",
      "Harberger Tax",
      "Decentralized",
      "UBI",
      "thespace",
      "MattersLab",
      "Matters.News",
      "創作有價",
    ];
    const isProd = process.env.NEXT_PUBLIC_RUNTIME_ENV === "production"; // process.env.NEXT_PUBLIC_VERCEL_URL === canonicalSiteDomain;

    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

          <meta key="description" name="description" content={description} />
          <meta key="keywords" name="keywords" content={keywords.join(",")} />
          {process.env.NEXT_PUBLIC_FB_APP_ID && (
            <meta
              key="fb:app_id"
              property="fb:app_id"
              content={process.env.NEXT_PUBLIC_FB_APP_ID}
            />
          )}
          <meta key="og:title" property="og:title" content={title} />
          <meta key="og:type" property="og:type" content="website" />
          <meta key="og:image" property="og:image" content={imageUrl} />
          <meta key="og:url" property="og:url" content={canonicalUrl} />
          <meta
            key="og:description"
            property="og:description"
            content={description}
          />
          <meta key="og:site_name" property="og:site_name" content="TheSpace" />
          <meta
            key="twitter:card"
            name="twitter:card"
            content="summary_large_image"
          />
          <meta key="twitter:image" name="twitter:image" content={imageUrl} />
          <meta
            key="twitter:image:alt"
            name="twitter:image:alt"
            content={description}
          />
          <meta
            key="twitter:site"
            name="twitter:site"
            content="@TheSpace2022"
          />
          <meta
            key="twitter:creator"
            name="twitter:creator"
            content="@Mattersw3b"
          />
          {/* <link key="canonicalUrl" rel="canonical" href={canonicalUrl} /> */}

          {!isProd && (
            <meta name="robots" content="noindex, nofollow" key="robots" />
          )}
          {!isProd && (
            <meta
              name="googlebot"
              content="noindex, nofollow"
              key="googlebot"
            />
          )}

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
