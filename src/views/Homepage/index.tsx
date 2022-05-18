import type { NextPage } from "next";
import Head from "next/head";

import Intro from "./Intro";
import Subscribe from "./Subscribe";
import Sample from "./Sample";
import Features from "./Features";
import About from "./About";
import Roadmap from "./Roadmap";
import SocialMedia from "./SocialMedia";
import DeveloperCommunity from "./DeveloperCommunity";
import Faq from "./Faq";
import AboutTheTeam from "./AboutTheTeam";
import FollowUs from "~/components/FollowUs";

import styles from "./styles.module.sass";

const Homepage: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Space: an everlasting, Draw-to-Earn public space</title>
      </Head>
      <main className={styles.index} id="main">
        <Intro />
        <Subscribe />
        <Sample />
        <Features />
        <About />
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
