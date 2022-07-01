import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import introIlluSvg from "@/public/img/intro-illu.svg";
import introDividerSvg from "@/public/img/intro-divider.svg";

import { useCountdown } from "~/hooks";

import styles from "./styles.module.sass";

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className="container">
        <div className="row">
          <div className="col-12 p-0">
            <div className={styles.illu}>
              <figure className="text-end">
                <Image
                  className="img-fluid"
                  src={introIlluSvg}
                  alt="Intro Illustration"
                />
              </figure>
            </div>
          </div>
          <div className="col-md-5">
            <div className={styles.divider}>
              <figure>
                <Image
                  className="img-fluid"
                  src={introDividerSvg}
                  alt="Intro Divider"
                />
              </figure>
            </div>
            <div className={styles.title}>
              <h1 className={styles.bar}>
                The Space: <br />
                World&apos;s First NFT Pixel Art Game Governed by Radical
                Markets
              </h1>
            </div>
            <div className={styles.text}>
              <p>
                Inspired by r/place, The Space is the world&apos;s NFT pixel art
                graffiti wall where players can own, color, and trade pixels
                under Harberger Tax and Universal Basic Income (UBI). Pixels are
                minted as ERC-721 tokens, and are fractional NFTs under common
                ownership.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className={`${styles.buttons} buttons`}>
              <>
                <a
                  className="btn frame"
                  href="https://discord.gg/thespace"
                  target="_blank"
                  rel="noreferrer"
                >
                  Join Discord
                </a>
                <a
                  className="btn fill"
                  href="https://app.thespace.game/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Launch App
                </a>
              </>
            </div>
          </div>
          <div className="col-md-4 position-relative">
            <div className={styles.tips}>
              <span className={styles.icon}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
