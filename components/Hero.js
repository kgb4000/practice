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
      <section className="bg-green-600">
        <div>
          {/* <Image
            src={backgroundImage}
            alt={alt}
            priority
            objectFit="cover"
            fill
          /> */}
          <div className="lg:h-[100vh] text-white py-32 px-4 md:pt-44 md:pb-24 md:pl-14 lg:mt-8">
            {/* backgroundHeight="lg:h-[100vh]" padding="py-[10rem] sm:py-[12rem]
            md:py-[10rem] md:pl-[8rem] lg:pl-[14rem] xl:py-[20rem]"
            heroMarginBottom="mb-20 lg:mb-40" */}
            <h1 className="text-6xl lg:text-9xl pb-6 lg:max-w-5xl">
              {heroText}
            </h1>
            <p className="text-xl lg:text-2xl pb-4 uppercase lg:max-w-xl">
              {subText}
            </p>
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
