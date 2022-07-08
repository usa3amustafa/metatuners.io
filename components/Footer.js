import Image from 'next/image'
import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footerMain}>
      <div className={`${styles.footer} container`}>
        <div className={styles.footerLogo}>
          <Image
            src='/img/HOME PAGE/logo-2.webp'
            className={styles.footerLogoImg}
            alt=''
            width={240}
            height={43}
          />
        </div>

        <div className={styles.footerRightCol}>
          <div className={styles.socialLinksFooter}>
            <a href='#' target={'_blank'} className={styles.socialLinkFooter}>
              <i className='fa-brands fa-youtube'></i>
            </a>
            <a href='#' target={'_blank'} className={styles.socialLinkFooter}>
              <i className='fa-brands fa-instagram'></i>
            </a>
            <a href='#' target={'_blank'} className={styles.socialLinkFooter}>
              <i className='fa-brands fa-discord'></i>
            </a>
            <a href='#' target={'_blank'} className={styles.socialLinkFooter}>
              <i className='fa-brands fa-twitter'></i>
            </a>
          </div>

          <p className={styles.footerText}>
            <a href='#'> METATUNERS LLC </a>
            <br />
            <a href='#'> Metatuners Terms & Conditions </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
