import type { NextPage } from "next";
import { Provider, createClient } from "wagmi";
import Head from "next/head";
import { useRouter } from "next/router";

import Entrance from "./Entrance";
import Airdrop from "./Airdrop";
import FollowUs from "~/components/FollowUs";

import * as pkgInfo from "@/package.json";

import {
  provider,
  webSocketProvider,
  injectedConnector,
  walletConnectConnector,
} from "~/utils";

import styles from "./styles.module.sass";
import { useState } from "react";

const client = createClient({
  autoConnect: true,
  connectors: [injectedConnector, walletConnectConnector],
  provider,
  webSocketProvider,
});

const Claim: NextPage = () => {
  const router = useRouter();
  const canonicalUrl = `https://${
    process.env.NEXT_PUBLIC_SITE_DOMAIN || "thespace.game"
  }${router.asPath}`;
  const [isEntrance, setIsEntrance] = useState(true);

  return (
    <>
      <Head>
        <title key="title">{pkgInfo.title} - Claim</title>
        <link key="canonicalUrl" rel="canonical" href={canonicalUrl} />
      </Head>
      <Provider client={client}>
        <main className={styles.claim} id="main">
          {isEntrance && <Entrance next={() => setIsEntrance(false)} />}
          {!isEntrance && <Airdrop back={() => setIsEntrance(true)} />}
          <FollowUs />
        </main>
      </Provider>
    </>
  );
};

export default Claim;
