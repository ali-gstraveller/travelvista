import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import Dashboard from "./dashboard/page";


export default function Home() {
  const { data: session } = useSession() ;
  return (
    <div className={styles.container}>
      <Head>
        <title>Travel Vista</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
        <Dashboard/>
        </main>
      
    </div>
  );
}