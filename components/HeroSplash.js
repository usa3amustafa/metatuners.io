import Image from 'next/Image'

const HeroSplash = () => {
  return (
    <main className='hero-section'>
      <div className='container'>
        <a href='./homepage.html'>
          <Image
            src='/img/SPLASH PAGE/Splash Page Main Image.webp'
            alt=''
            width={1280}
            height={645}
          />
        </a>
      </div>
    </main>
  )
}

export default HeroSplash
