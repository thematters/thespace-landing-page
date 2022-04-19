import type { NextPage } from 'next'
import Head from 'next/head'

import Entrance from "./Entrance";

import styles from "./styles.module.sass";

const Claim: NextPage = () => {
  return (
    <>
      <main className={styles.claim} id="main">
        <Entrance />
        <section className={styles.about}>
          <div className="container">
            <div className={styles.title}>
              <h2>About $SPACE</h2>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Claim
