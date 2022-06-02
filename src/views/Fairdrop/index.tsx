import type { NextPage } from "next";
import { Provider, createClient } from "wagmi";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

import Entrance from "./Entrance";
import Steps from "./Steps";
import Results from "./Results";
import FollowUs from "~/components/FollowUs";
import AboutSpaceToken from "~/components/AboutSpaceToken";

import aboutIllu3Svg from "../../../public/img/about-illu-3.svg";

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
  connectors: [
    injectedConnector,
    // walletConnectConnector
  ],
  provider,
  webSocketProvider,
});

const Fairdrop: NextPage = () => {
  const router = useRouter();
  const canonicalUrl = `https://${
    process.env.NEXT_PUBLIC_SITE_DOMAIN || "thespace.game"
  }${router.asPath}`;
  const [isEnter, setEnter] = useState(false);
  const [isStatus, setStatus] = useState();
  const [isResults, setResults] = useState(false);

  return (
    <>
      <Head>
        <title key="title">Claim Your $SPACE | {pkgInfo.title}</title>
        <link key="canonicalUrl" rel="canonical" href={canonicalUrl} />
      </Head>
      <Provider client={client}>
        <main className={styles.claim} id="main">
          {isResults ? (
            <Results status={isStatus} />
          ) : (
            isEnter ? (
              <Steps
                next={(val: any) => {
                  setStatus(val);
                  setResults(true);
                }}
              />
            ) : (
              <>
                <Entrance next={() => setEnter(false)} />
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
              </>
            )
          )}
          <FollowUs />
        </main>
      </Provider>
    </>
  );
};

export default Fairdrop;
