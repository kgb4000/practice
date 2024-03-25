import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import womanBg from '../public/images/black-woman-in-kitchen.webp'

const CallToAction = () => {
  return (
    <>
      <section className=" bg-yellow-100">
        <div className="container mx-auto max-w-5xl py-14 lg:py-40 px-4">
          <div className="lg:grid grid-cols-2 items-center  gap-x-10">
            <Image
              src={womanBg}
              quality={100}
              alt="Black woman in a kitchen."
              style={{
                width: '100%',
                height: 'auto',
              }}
              placeholder="blur"
            />
            <div className="pt-10">
              <h2 className="text-3xl lg:text-5xl text-center lg:text-left max-w-5xl mx-auto mb-8">
                Win Free Sea Moss!
              </h2>
              <p className="md:text-xl text-center max-w-3xl mx-auto lg:text-left">
                Don't miss your chance to elevate your health with our
                high-quality sea moss – it's your first step towards a more
                vibrant, healthier you, all on us! Join our VIP community and
                win free sea moss today!
              </p>
              <div className="text-center lg:text-left mt-10">
                <Link href="/shop">
                  <button className="py-4 px-10 bg-yellow-400 text-xl  font-bold uppercase">
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CallToAction
