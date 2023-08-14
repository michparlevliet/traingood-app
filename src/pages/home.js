import Head from 'next/head';
import { useState } from 'react';
import styles from '@/styles/Home.module.css';
import BarChart from '/components/BarChart';
import LineChart from '/components/LineChart';
import { UserData } from '../Data';

import Layout from '/components/Layout';
// import { Chart } from 'react-chartjs-2';

export default function Home() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Users Gained",
      data: UserData.map((data) => data.userGain),
      backgroundColor: ["green", "blue", "red"],
    }],
  });
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
            <BarChart chartData={userData}/>
            <LineChart chartData={userData}/>
          </div>

          <div className={styles.col}>
            <Link href="/add-activity" className={styles.card}>
              <h2>New Activity</h2>
              <p>
                Track your workouts here.
              </p>
            </Link>

            <Link href="/view-activities" className={styles.card}>
              <h2>View Past Activities</h2>
              <p>
                Review your training.
              </p>
            </Link>

            <Link href="/personal-records" className={styles.card}>
              <h2>Personal Records</h2>
              <p>
                See all your achievements.
              </p>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
    </>
  );
}
