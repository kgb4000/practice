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
      <section>
        <div className={`${backgroundHeight} ${heroMarginBottom}`}>
          {/* <Image
            src={backgroundImage}
            alt={alt}
            priority
            objectFit="cover"
            fill
          /> */}
          <div
            className={`max-w-5xl flex flex-col justify-center ${padding} px-12`}
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl pb-6">
              {heroText}
            </h1>
            <p className="text-xl lg:text-2xl pb-4 uppercase">{subText}</p>
            {buttonText && (
              <div className="md:flex items-center">
                <Link href={buttonLink}>
                  <button className="py-4 px-10 bg-yellow-400 md:text-xl font-bold uppercase">
                    {buttonText}
                  </button>
                </Link>
                <p className="md:ml-3 pt-2">Made in the USA 🇺🇸 </p>
              </div>
            )}
            <div className="flex justify-between w-[250px] py-4">
              <Image
                src="/icons/no-gmo.png"
                alt="No GMO."
                width={50}
                height={50}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
              <Image
                src="/icons/organic.png"
                alt="Organic."
                width={50}
                height={50}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
              <Image
                src="/icons/gluten-free.png"
                alt="Gluten free."
                width={50}
                height={50}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
              <Image
                src="/icons/vegan.png"
                alt="Vegan."
                width={50}
                height={50}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
