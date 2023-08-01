import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>TrainGood</title>
        <meta name="description" content="Welcome to TrainGood" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="svg" href="/traingood-icon.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>TrainGood</h1>
          <p>
            Where your best you begins.
          </p>
        </div>

        <div className={styles.center}>
          <img src="/traingood-icon.svg" alt="TrainGood Logo" className={styles.logo} />
        </div>

        <div className={styles.grid}>
          <a href="/register" className={styles.card}>
            <h2>Register &rarr;</h2>
            <p>
              Click here to create an account.
            </p>
          </a>

          {/* Add more cards or sections as needed */}
          <a href="/login" className={styles.card}>
            <h2>Login &rarr;</h2>
            <p>
              Already have an account? Login here.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
