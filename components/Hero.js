import Link from 'next/link'
import Image from 'next/image'

const HeroSection = ({
  backgroundImage,
  heroText,
  subText,
  buttonText,
  backgroundHeight,
  buttonLink,
  alt,
  padding,
  heroMarginBottom,
}) => {
  return (
    <>
      <section className="relative">
        <div className={`${backgroundHeight} relative ${heroMarginBottom}`}>
          <Image
            src={backgroundImage}
            alt={alt}
            priority
            objectFit="cover"
            fill
            placeholder="blur"
          />
          <div
            className={`max-w-7xl mx-auto flex flex-col justify-center items-center ${padding}`}
          >
            <p className="text-3xl z-10">Sea Moss Wellness</p>
            <h1 className="text-7xl lg:text-9xl text-center pb-6 z-10">
              {heroText}
            </h1>
            <p className="text-2xl lg:text-3xl text-center pb-4 z-10 uppercase">
              {subText}
            </p>
            {buttonText && (
              <Link href={buttonLink} className="z-10">
                <button className="py-4 px-10  bg-yellow-400 text-xl font-bold uppercase">
                  {buttonText}
                </button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
