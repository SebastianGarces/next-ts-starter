import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.scss"
import Counter from "../components/Counter"

import config from "../config"

const Home: NextPage = () => {
    const { featureFlags } = config
    return (
        <div className={styles.container}>
            <Head>
                <title>Next.js TS App</title>
                <meta name="description" content="Next.js TS App Starter" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 data-testid="home-main-title">Next.js TS App</h1>
                {featureFlags.counter ? <Counter /> : null}
            </main>
        </div>
    )
}

export default Home
