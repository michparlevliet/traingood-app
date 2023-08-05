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

        <div className={styles.description}>
          <h1>Hello, User!</h1>
          <p>What will you work on today?</p>
        </div>

        <div className={styles.flex}>
          <div className={styles.col}>
            <h2>Your Progress:</h2>
            <img src="/fitness-chart-ex.png" />
            <img src="/fitness-chart-ex.png" />
            <img src="/fitness-chart-ex.png" />
          </div>

          <div className={styles.col}>
            <a href="/" className={styles.card}>
              <h2>Add Workout</h2>
              <p>
                Track your workouts here.
              </p>
            </a>

            <a href="/" className={styles.card}>
              <h2>Training Plans</h2>
              <p>
                Create, edit, and review training plans.
              </p>
            </a>

            <a href="/" className={styles.card}>
              <h2>Personal Records</h2>
              <p>
                Recent PRs go here.
              </p>
            </a>
          </div>
        </div>
      </main>
    </Layout>
    </>
  );
}
