import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AboutImages from '@/components/AboutImages'

import kesBg from '@/public/images/kes-founder.jpeg'

export const metadata = {
  title: 'About Us | Sea Moss Wellness',
  description:
    'Discover the full range of our natural sea moss products. From gels to capsules and dried moss, find everything for your wellness journey here.',
  alternates: {
    canonical: 'https://seamosswellness.com/about',
  },
}

const AboutUs = () => {
  return (
    <>
      <section>
        <div className="container max-w-5xl mx-auto mt-48 lg:my-40 px-6">
          <h1 className="text-7xl lg:text-7xl text-center my-14">Our Story</h1>
          <p className="text-xl mb-4">
            In 2020, we founded Sea Moss Wellness with a simple goal: to create
            top-notch sea moss supplements that truly make a difference.
          </p>
          <p className="text-xl mb-4">
            We're all about tapping into nature's bounty to boost your health
            and happiness.
          </p>
          <p className="text-xl mb-4">
            Our journey started with a promise to find the absolute best sea
            moss out there – a treasure trove of vitamins, minerals, and
            antioxidants straight from the sea.
          </p>
          <AboutImages />
          <p className="text-xl mb-4">
            We knew this superfood had incredible potential, so we got to work
            crafting products that not only meet our high standards but also
            help you feel your best.
          </p>
          <p className="text-xl mb-4">
            From the crystal-clear waters of St. Lucia to our careful production
            processes, every step is taken with your well-being in mind.
          </p>
          <p className="text-xl mb-4">What sets Sea Moss Wellness apart?</p>
          <p className="text-xl mb-4">
            Our endless quest for innovation and knowledge.
          </p>
          <p className="text-xl mb-4">
            We're always on the lookout for new ways to harness the power of sea
            moss, using the latest tech and scientific breakthroughs to create
            supplements that support your lifestyle.
          </p>
          <p className="text-xl mb-4">
            And don't worry – our products go through rigorous testing to ensure
            they're safe and effective, giving you peace of mind with every
            purchase.
          </p>
          <p className="text-xl mb-4">
            But we're not just here to sell you stuff.
          </p>
          <p className="text-xl mb-4">
            We're on a mission to help you take charge of your health in the
            most natural way possible.
          </p>
          <p className="text-xl mb-4">
            Through helpful info, personalized support, and a community-driven
            vibe, we're here to inspire and uplift you on your wellness journey.
          </p>
          <p className="text-xl mb-4">
            But our mission extends beyond just creating exceptional products.
            We're on a mission to educate and empower individuals to take
            control of their health naturally.
          </p>
          <p className="text-xl mb-4">
            At Sea Moss Wellness, we believe in honesty, transparency, and
            building relationships that last.
          </p>
          <p className="text-xl mb-4">
            So come join us as we dive into better health together. Discover the
            amazing benefits of sea moss with Sea Moss Wellness – where nature
            and innovation meet for your well-being.
          </p>
        </div>
      </section>
      <section>
        <div className="container max-w-5xl mx-auto my-20 px-6">
          <div className="md:grid grid-cols-2 gap-x-14">
            <Image
              src={kesBg}
              width={600}
              height={600}
              alt="Founder of Sea Moss Wellness"
              className="mx-auto md:mx-0"
            />
            <div>
              <h2 className="text-5xl mb-14 mt-8 md:mt-0">Meet the Founder</h2>
              <p className="text-xl mb-4">
                Hey there, I'm Kester, the passionate soul behind Sea Moss
                Wellness.
              </p>
              <p className="text-xl mb-4">
                From day one, my dream is to create something truly remarkable –
                a company that's more than just making a profit.
              </p>
              <p className="text-xl mb-4">
                Every single day, my amazing team and I pour our hearts into
                everything we do.
              </p>
              <p className="text-xl mb-4">
                From carefully sourcing our sea moss to designing our packaging,
                all with one goal in mind: to bring you the best and healthist
                products possible.
              </p>
              <p className="text-xl mb-4">
                Here at Sea Moss Wellness, it's not just about running a
                business; it's about creating products that we're truly proud of
                and that you'll absolutely love.
              </p>
              <p className="text-xl mb-4">
                I'm personally involved in every step of the process because
                when you see my name on something, I want you to know that it's
                the real deal.
              </p>
              <p className="text-xl mb-4">
                After all, my family and I use sea moss every single day, and we
                wouldn't have it any other way!
              </p>
              <p className="text-xl mb-4">
                Your trust means the world to me, and I'm so grateful to have
                you as part of our Sea Moss Wellness family.
              </p>
            </div>
          </div>
        </div>
        <div className="my-14 text-center">
          <Link href="/shop">
            <button className="py-4 px-10 bg-yellow-400 text-xl font-bold uppercase">
              Shop Our Products
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default AboutUs
