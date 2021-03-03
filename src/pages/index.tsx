import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from "../styles/pages/Home.module.css";

import Head from "next/head";
import { GetServerSideProps } from "next";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountDownProvider } from "../context/CountdownContext";
import { ChallengesProvider } from "../context/ChallengesContext";

interface HomeProps {
  level: number,
  currentExperience: number
  challendsCompleted: number
}

export default function Home(props) {
  return (
    <ChallengesProvider 
    level={props.level} 
    currentExperience={props.currentExperience}
    challendsCompleted={props.challengesCompleted}
    >
    <div className={styles.container}>
      <Head>
        <title>Inicio move.it</title>
      </Head>
      <ExperienceBar />

      <CountDownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountDownProvider>
    </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level : Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(currentExperience)
    },
  };
};
