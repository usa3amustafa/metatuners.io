import Head from 'next/head'
import Footer from '../components/Footer'
import HeroSplash from '../components/HeroSplash'
import NavbarSplash from '../components/NavbarSplash'
import SplashText from '../components/SplashText'
import Preloader from '../components/Preloader'
import { useState, useEffect } from 'react'

const Index = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      <Head>
        <title>Metatuners</title>
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />

        {/* font awsome cdn */}
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'
          integrity='sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=='
          crossOrigin='anonymous'
          referrerpolicy='no-referrer'
        />

        {/* franker font */}
        <link rel='stylesheet' href='/FONTS/FranckerW10/franckerW.css' />
      </Head>

      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <NavbarSplash />
          <HeroSplash />
          <SplashText />
          <Footer />
        </>
      )}
    </>
  )
}

export default Index
