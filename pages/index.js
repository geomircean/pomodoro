import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Podoro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Why Pomodororo?
        </h1>

        <p className={styles.description}>
          This is my pomodoro app, it should help me spend time more efficiently when working. I tend to be easily distracted, therefore making sure I need to focus just on short stretches of time I might be able to move more efficiently.
        </p>

        <p className={styles.description}>
          Also I want to learn next.js, some CSS in js and other pretty tools that are out there.
        </p>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
