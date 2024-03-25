import React from 'react'
import Image from 'next/image'
import kesBg from '../public/images/kes-founder.webp'
import Link from 'next/link'

const AboutUs = () => {
  return (
    <>
      <section className="py-10">
        <div className="container max-w-7xl mx-auto my-20 px-4">
          <div className="lg:grid grid-cols-2 lg:justify-center lg:items-center gap-x-10 h-full">
            <Image
              src={kesBg}
              quality={100}
              alt="Black couple in a kitchen."
              style={{
                width: '100%',
                height: 'auto',
              }}
              placeholder="blur"
            />
            <div>
              <div className="mt-10">
                <h2 className="text-3xl md:text-5xl mb-8">
                  About Sea Moss Wellness
                </h2>
                <p className="md:text-xl mb-4">
                  I'm Kester, the heart and soul behind Sea Moss Wellness.
                </p>
                <p className="md:text-xl mb-4">
                  From the very start, my dream was to create something truly
                  special – a company that stands for more than just profit.
                </p>
                <p className="md:text-xl mb-4">
                  Every day, my team and I pour our values, integrity, and
                  unwavering dedication into everything we do, from sourcing our
                  sea moss, to our packaging.
                </p>
                <p className="md:text-xl mb-4">
                  At Sea Moss Wellness, it's not just about running a business;
                  it's about giving you the best products.
                </p>
                <p className="md:text-xl mb-4">
                  I'm personally involved in every part of the process because
                  putting my name on it means something.
                </p>
                <p className="md:text-xl mb-4">
                  After all, my family and I use sea moss every day, and I
                  wouldn't have it any other way.
                </p>
                <p className="md:text-xl mb-4">
                  Your trust means the world to me.
                </p>
                <p className="md:text-xl mb-4">
                  Thank you for being part of our journey at Sea Moss Wellness.
                </p>

                <p className="md:text-xl mb-4">Warm regards,</p>
                <p className="md:text-xl mb-4">Kester</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-20">
            <Link href="/about">
              <button className="py-4 px-10 bg-yellow-400 text-xl  font-bold uppercase">
                Learn About Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
