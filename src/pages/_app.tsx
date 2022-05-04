import type { AppLayoutProps } from "next/app";
import Head from "next/head";

import "../styles/vendors.sass";
import "../styles/globals.sass";

import Layout from "~/components/Layout";

function TheSpaceApp({ Component, pageProps }: AppLayoutProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0"
        />
        <title>The Space: an everlasting, Draw-to-Earn public space</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default TheSpaceApp;
