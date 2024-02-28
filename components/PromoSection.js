import React from 'react'
import Image from 'next/image'

const PromoSection = () => {
  return (
    <>
      <section className="relative">
        <div>
          <Image
            src="/images/ocean-bg.jpeg"
            alt="Bg image"
            priority
            objectFit="cover"
            fill
          />
          <div
            className={`max-w-7xl mx-auto flex flex-col justify-center items-center py-40`}
          >
            <p className="text-center text-2xl mb-10 font-bold z-10">
              Sea Moss Wellness
            </p>
            <p className="text-4xl lg:text-5xl max-w-4xl mx-auto text-center mb-10 uppercase z-10">
              We're a Conscientious & Moral Black Owned Sea Moss Company
            </p>

            <p className="text-2xl max-w-3xl text-center mx-auto leading-loose mb-10 z-10">
              Nourishing your gut, enlightening your mind, rejuvenating your
              skin, energizing your heart, enhancing your total wellness
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default PromoSection
