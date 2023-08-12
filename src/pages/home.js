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
            <a href="/add-workout" className={styles.card}>
              <h2>Add Workout</h2>
              <p>
                Track your workouts here.
              </p>
            </a>

            <a href="/training-plans" className={styles.card}>
              <h2>Training Plans</h2>
              <p>
                Create, edit, and review training plans.
              </p>
            </a>

            <a href="/personal-records" className={styles.card}>
              <h2>Personal Records</h2>
              <p>
                See all your achievements!
              </p>
            </a>
          </div>
        </div>
      </main>
    </Layout>
    </>
  );
}
