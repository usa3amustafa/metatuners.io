import Image from 'next/image'
import styles from '../styles/splash-text.module.css'

const SplashText = () => {
  return (
    <section className={styles.splashText}>
      <div className={`container ${styles.splashTextSection}`}>
        <a href='./homepage.html' className={styles.splashEnter}>
          ENTER
        </a>

        <div className={styles.splashTextImg}>
          <Image
            src='/img/SPLASH PAGE/splash-text-img.webp'
            alt=''
            className={styles.splashTextImg}
            width={60}
            height={15}
          />
        </div>

        <p className={styles.splashDesc}>
          Welcome to the world’s first car-culture inspired NFT collection. join
          the Meta Tuners and resist against the Machine’s efforts to destroy
          tuner culture In Hardrive City.
        </p>
      </div>
    </section>
  )
}

export default SplashText
