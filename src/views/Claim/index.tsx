import type { NextPage } from "next";
import { Provider, createClient } from "wagmi";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

import Entrance from "./Entrance";
import Airdrop from "./Airdrop";
import Fairdrop from "./Fairdrop";
import FollowUs from "~/components/FollowUs";
import AboutSpaceToken from "~/components/AboutSpaceToken";

import aboutIllu1Svg from "../../../public/img/about-illu-1.svg";
import aboutIllu2Svg from "../../../public/img/about-illu-2.svg";
import aboutIllu3Svg from "../../../public/img/about-illu-3.svg";

import pkgInfo from "@/package.json";

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
  connectors: [
    injectedConnector,
    // walletConnectConnector
  ],
  provider,
  webSocketProvider,
});

const Claim: NextPage = () => {
  const router = useRouter();
  const canonicalUrl = `https://${
    process.env.NEXT_PUBLIC_SITE_DOMAIN || "thespace.game"
  }${router.asPath}`;
  const [isEntrance, setIsEntrance] = useState(true);
  const amountPerAddress =
    process.env.NEXT_PUBLIC_FAIRDROP_AMOUNT_PER_ADDRESS || "your";

  return (
    <>
      <Head>
        <title key="title">
          Claim {amountPerAddress} $SPACE | {pkgInfo.title}
        </title>
        <link key="canonicalUrl" rel="canonical" href={canonicalUrl} />
      </Head>
      <Provider client={client}>
        <main className={styles.claim} id="main">
          {isEntrance && <Entrance next={() => setIsEntrance(false)} />}

          {/********** Airdrop **********/}
          {/* {!isEntrance && <Airdrop back={() => setIsEntrance(true)} />} */}          
          {/* <AboutSpaceToken
            extraBtn={
              <a
                className="btn fill"
                href="https://wiki.thespace.game/space-initial-airdrop"
                target="_blank"
                rel="noreferrer"
              >
                Initial Airdrop
              </a>
            }
            illu={
              <>
                <div className={`${styles.illu_1} d-none d-md-block`}>
                  <figure>
                    <Image
                      className="img-fluid"
                      src={aboutIllu1Svg}
                      alt="About Illustration"
                    />
                  </figure>
                </div>
                <div className={`${styles.illu_2}`}>
                  <figure>
                    <Image
                      className="img-fluid"
                      src={aboutIllu2Svg}
                      alt="About Illustration"
                    />
                  </figure>
                </div>
              </>
            }
          /> */}

          {/********** Fairdrop **********/}
          {!isEntrance && <Fairdrop back={() => setIsEntrance(true)} />}
          <AboutSpaceToken
            extraBtn={
              <a
                className="btn fill"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                How to claim
              </a>
            }
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
          <FollowUs />
        </main>
      </Provider>
    </>
  );
};

export default Claim;
