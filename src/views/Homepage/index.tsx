import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import Intro from "./Intro";
import Subscribe from "./Subscribe";
import Sample from "./Sample";
import Features from "./Features";
import Roadmap from "./Roadmap";
import SocialMedia from "./SocialMedia";
import DeveloperCommunity from "./DeveloperCommunity";
import Faq from "./Faq";
import AboutTheTeam from "./AboutTheTeam";
import FollowUs from "~/components/FollowUs";
import AboutSpaceToken from "~/components/AboutSpaceToken";

import styles from "./styles.module.sass";

import * as pkgInfo from "@/package.json";

const Homepage: NextPage = () => {
  const router = useRouter();
  const canonicalUrl = `https://${
    process.env.NEXT_PUBLIC_SITE_DOMAIN || "thespace.game"
  }${router.asPath}`;
  return (
    <>
      <Head>
        <title key="title">{pkgInfo.title}</title>
        <link key="canonicalUrl" rel="canonical" href={canonicalUrl} />
      </Head>
      <main className={styles.index} id="main">
        <Intro />
        <Subscribe />
        <Sample />
        <Features />
        <AboutSpaceToken />
        <Roadmap />
        <SocialMedia />
        <DeveloperCommunity />
        <Faq />
        <AboutTheTeam />
        <FollowUs />
      </main>
    </>
  );
};

export default Homepage;
