import Document, { Html, Head, Main, NextScript } from 'next/document'

class TheSpaceDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8"/>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          <meta name="description" content="The Space is a pixel map where players can tokenize, own, trade and color pixels. Pixels are tokenized as ERC721 tokens and traded under Harberger Tax, while owners of pixels receive Universal Basic Income(UBI). In the Future, The administration of The Space will be transfered to SpaceDAO, a decentralized autonomous organization formed by all $SPACE token holders."/>
          <meta property="og:title" content="The Space: an everlasting, Draw-to-Earn public space"/>
          <meta property="og:type" content="website"/>
          <meta property="og:image" content="https://www.thespace.game/img/thumb.jpg?v=1"/>
          <meta property="og:url" content="https://www.thespace.game/"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta property="og:description" content="The Space is a pixel map where players can tokenize, own, trade and color pixels. Pixels are tokenized as ERC721 tokens and traded under Harberger Tax, while owners of pixels receive Universal Basic Income(UBI). In the Future, The administration of The Space will be transfered to SpaceDAO, a decentralized autonomous organization formed by all $SPACE token holders."/>
          <meta property="og:site_name" content="The Space: an everlasting, Draw-to-Earn public space"/>
          <meta name="twitter:image:alt" content="The Space is a pixel map where players can tokenize, own, trade and color pixels. Pixels are tokenized as ERC721 tokens and traded under Harberger Tax, while owners of pixels receive Universal Basic Income(UBI). In the Future, The administration of The Space will be transfered to SpaceDAO, a decentralized autonomous organization formed by all $SPACE token holders."/>
          <meta property="fb:app_id" content=""/>
          <meta name="twitter:site" content=""/>
          <link rel="shortcut icon" href="/favicon.ico"/>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default TheSpaceDocument