import Image from 'next/image'
import styles from '../styles/nav-splash.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navMain}>
      <div className={`container ${styles.nav}`}>
        <div className={styles.logoContianer}>
          <Image
            src='/img/SPLASH PAGE/MetaTuners_M.webp'
            height={88}
            width={160}
          />
        </div>
      </div>

      <div className={`${styles.socialLinks} container`}>
        <a href='#' target={'_blank'} className={styles.socialLink}>
          <i className='fa-brands fa-youtube'></i>
        </a>
        <a href='#' target={'_blank'} className={styles.socialLink}>
          <i className='fa-brands fa-instagram'></i>
        </a>
        <a href='#' target={'_blank'} className={styles.socialLink}>
          <i className='fa-brands fa-discord'></i>
        </a>
        <a href='#' target={'_blank'} className={styles.socialLink}>
          <i className='fa-brands fa-twitter'></i>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
