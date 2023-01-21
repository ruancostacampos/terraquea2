import { useEffect, useState } from "react";
import Head from "next/head";
import Intro from "../components/Intro/Intro";
import styles from "../styles/Home.module.css";
import HomeScroll from "../components/HomeScroll/HomeScroll";
import Soap from "../components/Soap/Soap";
import MobileProductShower from "../components/MobileProductShower/MobileProductShower";

export default function Home() {
  const [width, setWidth] = useState(620);
  const breakpoint = 620;

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeScroll />
      <Intro />
      {width > breakpoint ? (
        <Soap />
      ) : (
        <>
          <MobileProductShower />
        </>
      )}
    </div>
  );
}
