import type { NextPage } from "next";
import { Provider, createClient } from "wagmi";
import Head from "next/head";

import Entrance from "./Entrance";
import Airdrop from "./Airdrop";
import FollowUs from "~/components/FollowUs";

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
  const [isEntrance, setIsEntrance] = useState(true);

  return (
    <>
      <Head>
        <title>The Space: an everlasting, Draw-to-Earn public space</title>
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
