import React from 'react'
import Link from 'next/link'

import { IoCartOutline } from 'react-icons/io5'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { BiHappyHeartEyes } from 'react-icons/bi'

const Transforamtion = ({ text1, text2, text3 }) => {
  return (
    <>
      <section>
        <div className="container max-w-9xl mx-auto my-10 lg:my-24 px-4">
          <h2 className="text-3xl lg:text-5xl mx-auto text-center mb-4 max-w-2xl leading-relaxed">
            Boost Your Health & Energy In 3 Simple Steps
          </h2>
          <div className="lg:my-20 lg:flex">
            <div className="lg:w-1/3 py-4 px-4">
              <IoCartOutline className="text-5xl md:text-7xl mx-auto" />
              <p className="text-2xl py-5 text-center italic">Step 1.</p>
              <p className="text-xl px-4 text-center">
                Go to our shop and choose any of our sea moss products, then
                easily checkout using our safe secure checkout process.
              </p>
            </div>
            <div className="lg:w-1/3 py-4 px-4">
              <LiaShippingFastSolid className="text-5xl md:text-7xl mx-auto" />
              <p className="text-2xl py-5 text-center italic">Step 2.</p>
              <p className="text-xl px-4 text-center">
                Our staff will cafefully pick and pack your sea moss and send it
                to you. Expect your sea moss gel within 3 - 5 business days.
              </p>
            </div>
            <div className="lg:w-1/3 py-4 px-4">
              <BiHappyHeartEyes className="text-5xl md:text-7xl mx-auto" />
              <p className="text-2xl py-5 text-center italic">Step 3.</p>
              <p className="text-xl px-4 text-center">
                <span className="font-semibold underline">
                  Live a healthier and happier life
                </span>
                . Limit processed foods and opting for whole, natural
                ingredients whenever possible.
              </p>
            </div>
          </div>
          <div className="text-center my-10">
            <Link href="/shop">
              <button className="py-4 px-10  bg-yellow-400 text-xl font-bold uppercase">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Transforamtion
