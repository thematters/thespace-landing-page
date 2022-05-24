import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import introIlluSvg from "@/public/img/intro-illu.svg";
import introDividerSvg from "@/public/img/intro-divider.svg";

import styles from "./styles.module.sass";

// keep a central place to manage all meta information
import * as pkgInfo from "@/package.json";

const Intro = () => {
  const [isClaim, setClaim] = useState(false);
  useEffect(() => {
    if (
      new Date() > new Date(process.env.NEXT_PUBLIC_CLAIM_START_AT || "") &&
      new Date() < new Date(process.env.NEXT_PUBLIC_CLAIM_END_AT || "")
    ) {
      setClaim(true);
    }
  }, []);
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
                {/* re-use {pkgInfo.title} as much as possible */}
                The Space: <br />
                World’s First NFT Pixel Art Game Governed by Radical Markets
              </h1>
            </div>
            <div className={styles.text}>
              <p>{pkgInfo.description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className={`${styles.buttons} buttons`}>
              <a
                className={`btn ${isClaim ? "frame" : "fill"}`}
                href="https://discord.gg/thespace"
                target="_blank"
                rel="noreferrer"
              >
                Join Discord
              </a>
              {isClaim && (
                <Link href="/claim">
                  <a className="btn fill">Claim $SPACE</a>
                </Link>
              )}
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
