import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Destiny</title>
        <meta name="description" content="Website made by altair becoz a guy gave this domain for free lmao" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I’m<a href="https://destiny.devpage.me">Destiny!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://destiny.devpage.me" className={styles.card}>
            <h2>About Me &rarr;</h2>
            <p>Find in-depth information about Me and my Skills.</p>
          </a>

          <a href="https://destiny.devpage.me" className={styles.card}>
            <h2>Behance;</h2>
            <p>Checkout My Behance Portfolio where i make art and stuff for some of my projects!</p>
          </a>

          <a
            href="https://destiny.devpage.me"
            className={styles.card}
          >
            <h2>MineTrek &rarr;</h2>
            <p>A Minecraft Server made by me and my friends to provide users a good and best experience of high tech modern cities!</p>
          </a>

          <a
            href="https://discord.com/oauth2/authorize?client_id=894936574284935199&permissions=2213544768&scope=bot"
            className={styles.card}
          >
            <h2>D-Tune &rarr;</h2>
            <p>
              D-Tune is a discord bot project ive been working recently to provide users Listen to music right from your Discord server with the most stable and intuitive music bot 24/7.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
