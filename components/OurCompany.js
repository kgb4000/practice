import React from 'react'
import Link from 'next/link'

const OurCompany = () => {
  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto px-4 pb-40">
          <p className="text-xl text-center font-bold">Sea Moss Wellness</p>
          <p className="text-5xl text-center py-8 leading-12 max-w-4xl mx-auto">
            We're a Conscientious & Moral Black Owned Sea Moss Company
          </p>
          <p className="text-2xl text-center max-w-3xl mx-auto">
            Nourishing your gut, enlightening your mind, rejuvenating your skin,
            energizing your heart, enhancing your total wellness
          </p>
          <div className="text-center my-10">
            <Link href="/shop">
              <button className="py-4 px-10  bg-yellow-400 text-xl font-bold">
                Shop now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurCompany
