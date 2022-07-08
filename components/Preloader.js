import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/preloader.module.css'

const Preloader = () => {
  const [image, setImage] = useState('/img/gliched-logo.gif')
  const [hide, setHide] = useState(false)

  useEffect(() => {
    setInterval(function () {
      setImage('/img/gliched-logo.gif')
      setTimeout(function () {
        setImage('/img/SPLASH PAGE/MetaTuners_M.webp')
      }, 1000)
    }, 4000)
  }, [])

  return (
    <>
      <div className={`${styles.preloader} ${hide && 'hidden'}`}>
        <Image
          src={image}
          alt=''
          className={styles.preloaderImg}
          height={164}
          width={300}
        />
      </div>
    </>
  )
}

export default Preloader
