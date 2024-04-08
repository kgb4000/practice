import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import strawberryGel from '@/public/images/strawberry-sea-moss-gel.png'
import AddToCart from './AddToCart'
import logo from '@/public/images/smw-logo-black.png'

import { IoCartOutline } from 'react-icons/io5'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { BiHappyHeartEyes } from 'react-icons/bi'

const StrawberrySeaMossGelBenefits = ({ priceOfOne, product }) => {
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
              <p className="text-3xl py-5 text-center italic">Step 1.</p>
              <p className="text-xl px-4 text-center">
                Click the{' '}
                <span className="font-semibold underline">
                  Get My 15% Off Now{'>'}
                </span>{' '}
                button to easily order your sea moss gel and checkout using our
                secure checkout.
              </p>
            </div>
            <div className="lg:w-1/3 py-5 px-4">
              <LiaShippingFastSolid className="text-5xl md:text-7xl mx-auto" />
              <p className="text-3xl py-5 text-center italic">Step 2.</p>
              <p className="text-xl px-4 text-center">
                Our staff will cafefully pick and pack your sea moss and send it
                to you. Expect your sea moss gel within 3 - 5 business days.
              </p>
            </div>
            <div className="lg:w-1/3 py-5 px-4">
              <BiHappyHeartEyes className="text-5xl md:text-7xl mx-auto" />
              <p className="text-3xl py-5 text-center italic">Step 3.</p>
              <p className="text-xl px-4 text-center">
                <span className="font-semibold underline">
                  Live a healthier and happier life
                </span>
                . Limit processed foods and opting for whole, natural
                ingredients whenever possible.
              </p>
            </div>
          </div>
          <AddToCart product={product} priceOfOne={priceOfOne} />
        </div>
      </section>
      <section>
        <div className="container max-w-9xl mx-auto my-10 lg:my-20 px-4">
          <h2 className="text-3xl lg:text-5xl mx-auto text-center mb-4 max-w-2xl">
            🍓 Strawberry Sea Moss Gel Health Benefits
          </h2>
          <p className="text-[1.1rem] max-w-3xl mx-auto text-center mb-4 md:text-xl">
            Soursop sea moss gel combines the nutritional benefits of sea moss,
            with the potent properties of soursop, a tropical fruit known for
            its health benefits.
          </p>
          <div className="lg:grid grid-cols-3 md:py-8">
            <div>
              <div className="mb-8">
                <div className="pulsating-circle"></div>
                <p className="text-xl md:text-2xl mb-4 font-bold">
                  1. Digestive Harmony Elixir:
                </p>
                <p className="md:text-xl">
                  Say goodbye to digestive discomfort with our Strawberry Sea
                  Moss Gel. Infused with fiber-rich strawberries and gut-loving
                  sea moss, it aids digestion, soothes inflammation, and
                  supports a balanced gut microbiome, promoting optimal
                  digestive health and regularity.
                </p>
              </div>
              <div className="mb-8">
                <p className="text-xl md:text-2xl mb-4 font-bold">
                  2. Energy Revitalizer:
                </p>
                <p className="md:text-xl">
                  Fuel your day with a burst of natural energy from our
                  Strawberry Sea Moss Gel. Loaded with vitamins, minerals, and
                  natural sugars, it provides a sustained energy boost,
                  enhancing endurance, focus, and vitality without the crash,
                  making it the perfect pre-workout or midday pick-me-up.
                </p>
              </div>
              <div className="mb-8">
                <p className="text-xl md:text-2xl mb-4 font-bold">
                  3. Skin Glow Booster:
                </p>
                <p className="md:text-xl">
                  Indulge in the luscious sweetness of our Strawberry Sea Moss
                  Gel, crafted to nourish your skin from within. Packed with
                  antioxidants and vitamins, it promotes a radiant complexion,
                  combats dullness, and supports overall skin health, leaving
                  you with a natural, lit-from-within glow
                </p>
              </div>
              <div className="mb-8">
                <p className="text-xl md:text-2xl mb-4 font-bold">
                  4. Mood-Lifting Delight:
                </p>
                <p className="md:text-xl">
                  Lift your spirits with a spoonful of our Strawberry Sea Moss
                  Gel. Packed with mood-boosting nutrients like vitamin C and
                  folate, it helps combat stress, reduce anxiety, and promote a
                  positive outlook, leaving you feeling uplifted, refreshed, and
                  ready to seize the day.
                </p>
              </div>
            </div>
            <Image
              src={strawberryGel}
              alt="Strawberry sea moss gel."
              width={700}
              height={700}
              className="self-center"
            />
            <div>
              <div className="mb-8">
                <p className="text-xl md:text-2xl mb-4 font-bold">
                  5. Heart Health Hero:
                </p>
                <p className="md:text-xl">
                  Love your heart with our Strawberry Sea Moss Gel. Rich in
                  heart-friendly antioxidants and potassium, it supports
                  cardiovascular health, helps regulate blood pressure, and
                  promotes healthy cholesterol levels, keeping your heart strong
                  and resilient for years to come.
                </p>
              </div>
              <div className="mb-8">
                <p className="text-xl md:text-2xl mb-4 font-bold">
                  6. Immunity Fortress:
                </p>
                <p className="md:text-xl">
                  Strengthen your body's defenses with our Strawberry Sea Moss
                  Gel. Bursting with immune-boosting vitamin C and antioxidants,
                  it fortifies your immune system, defends against infections,
                  and reduces the severity and duration of colds and flu,
                  keeping you healthy and vibrant year-round.
                </p>
              </div>
              <div className="mb-8">
                <p className="text-xl md:text-2xl mb-4 font-bold">
                  7. Weight Management Ally:
                </p>
                <p className="md:text-xl">
                  Achieve your wellness goals with the help of our Strawberry
                  Sea Moss Gel. Low in calories and fat, yet high in fiber and
                  nutrients, it promotes satiety, reduces cravings, and supports
                  healthy weight management, making it a guilt-free treat you
                  can enjoy daily.
                </p>
              </div>
              <div className="mb-8">
                <p className="text-xl md:text-2xl mb-4 font-bold">
                  8. Brain Power Enhancer:
                </p>
                <p className="md:text-xl">
                  Feed your mind with our Strawberry Sea Moss Gel. Enriched with
                  brain-boosting nutrients like antioxidants and omega-3 fatty
                  acids, it enhances cognitive function, improves memory
                  retention, and supports mental clarity, helping you stay sharp
                  and focused throughout the day.
                </p>
              </div>
            </div>
          </div>
          <AddToCart product={product} priceOfOne={priceOfOne} />
        </div>
      </section>
      <section className=" bg-gray-100">
        <div className="container max-w-9xl mx-auto px-4 py-20">
          <h2 className="text-3xl lg:text-5xl mx-auto text-center max-w-2xl mb-14">
            Why Choose Us?
          </h2>
          <div className="md:flex flex-row max-w-9xl md:justify-around">
            <div className="md:w-1/3">
              <div className="flex ">
                <Image
                  src={logo}
                  alt="Soursop sea moss gel."
                  width={40}
                  height={40}
                  className="self-center mr-2"
                />
                <p className="text-2xl font-semibold">Sea Moss Wellness</p>
              </div>
              <div className="my-2">
                <p className="py-2">✅ Real Organic Strawberries.</p>
                <p className="py-2">
                  ✅ Authentic Wild-Harvested Sea Moss from St. Lucia.
                </p>
                <p className="py-2">✅ FDA-Approved Food-Grade Facility.</p>

                <p className="py-2">
                  ✅ Third-Party Tested for Purity and Potency.
                </p>
                <p className="py-2">
                  ✅ No Artificial Additives or Preservatives.
                </p>
                <p className="py-2">✅ Fast Processing and Shipping Times.</p>
              </div>
            </div>
            <Image
              src={strawberryGel}
              alt="Soursop sea moss gel."
              width={400}
              height={400}
              className="md:w-1/3 mx-auto my-10"
            />
            <div className="md:w-1/3 mb-8">
              <p className="text-2xl font-bold">Them</p>
              <div className="my-2">
                <p className="py-2">❌ After Market Strawberries.</p>
                <p className="py-2">❌ Bulk Fake Pool Grown Sea Moss.</p>
                <p className="py-2">❌ Made In Cloud Kitchens.</p>
                <p className="py-2">❌ Using Artificial Preservatives.</p>
                <p className="py-2">❌ Long Processing and Shipping Times</p>
              </div>
            </div>
          </div>
          <AddToCart product={product} priceOfOne={priceOfOne} />
        </div>
      </section>
    </>
  )
}

export default StrawberrySeaMossGelBenefits
