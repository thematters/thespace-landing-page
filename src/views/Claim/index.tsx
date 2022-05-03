import type { NextPage } from 'next'

import Entrance from "./Entrance";
import Airdrop from "./Airdrop";
import Toast from "./Toast";
import FollowUs from "~/components/FollowUs";

import styles from "./styles.module.sass";

const Claim: NextPage = () => {
  return (
    <>
      <main className={styles.claim} id="main">
        <Toast status={'failed'}/>
        <Entrance />
        <Airdrop wallet="{}"/>
        <section className={`${styles.about} text-center`}>
          <div className={`${styles.container} container`}>
            <div className={styles.illu_1}>
              <figure><img className="img-fluid" src="/img/about-illu-1.svg"/></figure>
            </div>
            <div className={styles.illu_2}>
              <figure><img className="img-fluid" src="/img/about-illu-2.svg"/></figure>
            </div>
            <div className={styles.title}>
              <h2>About $SPACE</h2>
            </div>
            <div className={styles.text}>
              <p>The Space is a pixel space owned by a decentralized autonomous organization (DAO), where members can tokenize, own, trade and color pixels. Pixels are tokenized as ERC721 tokens and traded under Harberger Tax, while members receive Universal Basic Income(UBI) based on the number of pixel they own.</p>
            </div>
            <div className={`${styles.buttons} buttons`}>
              <button className="btn fill">Whitepaper</button>
            </div>
          </div>
        </section>
        <FollowUs />
      </main>
    </>
  )
}

export default Claim
