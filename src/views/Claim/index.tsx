import type { NextPage } from "next";
import { createClient, WagmiConfig } from "wagmi";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

import Entrance from "./Entrance";
import Fairdrop from "./Fairdrop";
import FollowUs from "~/components/FollowUs";
import AboutSpaceToken from "~/components/AboutSpaceToken";

import aboutIllu3Svg from "../../../public/img/about-illu-3.svg";

import pkgInfo from "@/package.json";

import { provider, injectedConnector, walletConnectConnector } from "~/utils";

import styles from "./styles.module.sass";
import { useState } from "react";

const amountPerAddress =
  process.env.NEXT_PUBLIC_FAIRDROP_AMOUNT_PER_ADDRESS || "your";

const client = createClient({
  autoConnect: false,
  connectors: [injectedConnector, walletConnectConnector],
  provider,
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
        <title key="title">
          Claim {amountPerAddress} $SPACE | {pkgInfo.title}
        </title>
        <link key="canonicalUrl" rel="canonical" href={canonicalUrl} />
      </Head>
      <WagmiConfig client={client}>
        <main className={styles.claim} id="main">
          {isEntrance && <Entrance next={() => setIsEntrance(false)} />}

          {!isEntrance && <Fairdrop back={() => setIsEntrance(true)} />}
          {isEntrance && (
            <AboutSpaceToken
              // extraBtn={
              //   <a
              //     className="btn fill"
              //     href="#"
              //     target="_blank"
              //     rel="noreferrer"
              //   >
              //     How to claim
              //   </a>
              // }
              illu={
                <div className={`${styles.illu_3}`}>
                  <figure>
                    <Image
                      className="img-fluid"
                      src={aboutIllu3Svg}
                      alt="About Illustration"
                    />
                  </figure>
                </div>
              }
            />
          )}
          <FollowUs />
        </main>
      </WagmiConfig>
    </>
  );
};

export default Claim;
