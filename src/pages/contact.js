import Head from 'next/head';
import styles from '@/styles/Home.module.css';

import Layout from '/components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>TrainGood</title>
        <meta name="description" content="Welcome to TrainGood" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="svg" href="/traingood-icon.svg" />
      </Head>
      <Layout>
      <main className={styles.main}>
        <div className={styles.center}>
          <img src="/traingood-icon.svg" alt="TrainGood Logo" className={styles.logo} />
        </div>

        <div className={styles.description}>
          <h1>TrainGood</h1>
          <p>Get in touch with us:</p>
        </div>

        <div className={styles.flex}>
          <div className={styles.card}>
            <h2>Email:</h2>
            <p>contact@traingood.ca</p>
          </div>
          <div className={styles.card}>
            <h2>Call:</h2>
            <p>1-(234)-5678</p>
          </div>
        </div>
      </main>
    </Layout>
    </>
  );
}
