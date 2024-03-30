import React from 'react'
import Image from 'next/image'
import soursopGel from '@/public/images/soursop-sea-moss-gel.png'
import AddToCart from './AddToCart'
import logo from '@/public/images/smw-logo-black.png'
import soursopEmoji from '@/public/icons/soursop.png'

import { IoCartOutline } from 'react-icons/io5'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { BiHappyHeartEyes } from 'react-icons/bi'

const SoursopBenefits = ({ priceOfOne, product }) => {
  return (
    <>
      <section>
        <div className="container max-w-9xl mx-auto my-10 lg:my-24 px-4">
          <h2 className="text-3xl lg:text-5xl mx-auto text-center mb-4 max-w-2xl leading-relaxed">
            Boost Your Health & Energy In 3 Simple Steps
          </h2>
          <div className="my-20 flex">
            <div className="w-1/3 flex flex-col">
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
            <div className="w-1/3 px-4">
              <LiaShippingFastSolid className="text-5xl md:text-7xl mx-auto" />
              <p className="text-3xl py-5 text-center italic">Step 2.</p>
              <p className="text-xl px-4 text-center">
                Our staff will cafefully pick and pack your sea moss and send it
                to you. Expect your sea moss gel within 3 - 5 business days.
              </p>
            </div>
            <div className="w-1/3 px-4">
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
        <div className="container max-w-9xl mx-auto my-10 lg:my-24 px-4">
          <h2 className="text-3xl lg:text-5xl mx-auto mb-4 max-w-2xl">
            <span className="flex justify-center items-center">
              <Image
                src={soursopEmoji}
                width={100}
                height={100}
                style={{ maxWidth: '100%', height: 'auto' }}
              />{' '}
              Soursop Sea Moss Gel Health Benefits
            </span>
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
                  1. Rich in Nutrients:
                </p>
                <p className="md:text-xl">
                  Soursop sea moss gel is a powerhouse of nutrients, providing a
                  wide range of vitamins and minerals, including iodine,
                  calcium, potassium, magnesium, selenium, vitamin C, and B
                  vitamins, supporting overall health.
                </p>
              </div>
              <div className="mb-8">
                <p className="text-xl md:text-2xl mb-4 font-bold">
                  2. Boosts Immune System:
                </p>
                <p className="md:text-xl">
                  The high vitamin C content in soursop and the antimicrobial
                  properties of sea moss can help strengthen the immune system,
                  making the body more resilient against infections and
                  diseases.
                </p>
              </div>
              <div className="mb-8">
                <p className="text-xl md:text-2xl mb-4 font-bold">
                  3. Digestive Health Support:
                </p>
                <p className="md:text-xl">
                  Sea moss is a natural source of prebiotic fiber, which can
                  help to improve gut health and digestion. It can soothe the
                  digestive tract, promote the growth of beneficial gut
                  bacteria, and ease issues like bloating and constipation.
                </p>
              </div>
              <div className="mb-8">
                <p className="text-xl md:text-2xl mb-4 font-bold">
                  4. Natural Energy Booster:
                </p>
                <p className="md:text-xl">
                  Rich in iron and B vitamins, soursop sea moss gel can help to
                  improve energy levels and combat fatigue. It's an excellent
                  supplement for those looking to boost their stamina and
                  vitality without relying on caffeinated products.
                </p>
              </div>
            </div>
            <Image
              src={soursopGel}
              alt="Soursop sea moss gel."
              width={500}
              height={500}
              className="self-center"
              loading="lazy"
            />
            <div>
              <div className="mb-8">
                <p className="text-xl md:text-2xl mb-4 font-bold">
                  5. Supports Joint and Muscle Health:
                </p>
                <p className="md:text-xl">
                  Because of its anti-inflammatory properties, soursop sea moss
                  gel can contribute to reducing joint pain and support muscle
                  recovery after exercise. This makes it beneficial for athletes
                  and those with arthritis or muscle soreness.
                </p>
              </div>
              <div className="mb-8">
                <p className="text-xl md:text-2xl mb-4 font-bold">
                  6. Improves Circulation:{' '}
                </p>
                <p className="md:text-xl">
                  The iron in sea moss helps to boost the production of red
                  blood cells, improving circulation and ensuring that oxygen is
                  efficiently distributed throughout the body. This enhanced
                  circulation can lead to better energy levels and overall
                  vitality.
                </p>
              </div>
              <div className="mb-8">
                <p className="text-xl md:text-2xl mb-4 font-bold">
                  7. Antioxidant Properties:
                </p>
                <p className="md:text-xl">
                  Soursop contains powerful antioxidants that can help combat
                  oxidative stress and may reduce the risk of chronic diseases.
                  These antioxidants also support cellular health and aging
                  gracefully.
                </p>
              </div>
              <div className="mb-8">
                <p className="text-xl md:text-2xl mb-4 font-bold">
                  8. Natural Detoxification:
                </p>
                <p className="md:text-xl">
                  Sea moss is known for its ability to absorb toxins from the
                  bowel and remove them from the body. Combined with the
                  cleansing properties of soursop, this gel can support natural
                  detoxification processes, promoting liver health and overall
                  bodily cleansing.
                </p>
              </div>
            </div>
          </div>
          <AddToCart product={product} priceOfOne={priceOfOne} />
        </div>
      </section>
      <section className=" bg-gray-100">
        <div className="container max-w-9xl mx-auto px-4 py-20">
          <h2 className="text-3xl lg:text-5xl mx-auto text-center max-w-2xl">
            Why Choose Us?
          </h2>
          <div className="md:flex flex-row max-w-9xl md:justify-around mt-8">
            <div className="md:w-1/3">
              <div className="flex ">
                <Image
                  src={logo}
                  alt="Soursop sea moss gel."
                  width={40}
                  height={40}
                  className="self-center mr-2"
                  loading="lazy"
                />
                <p className="text-2xl font-semibold">Sea Moss Wellness</p>
              </div>
              <div className="my-2">
                <p className="py-2">✅ Real Organic Soursop.</p>
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
                <p className="py-2">
                  ✅ Transparent Sourcing and Ethical Practices.
                </p>
              </div>
            </div>
            <Image
              src={soursopGel}
              alt="Soursop sea moss gel."
              width={400}
              height={400}
              className="md:w-1/3 mx-auto my-10"
              loading="lazy"
            />
            <div className="md:w-1/3 mb-8">
              <p className="text-2xl font-bold">Them</p>
              <div className="my-2">
                <p></p>
                <p className="py-2">❌ Fake Pool Grown Sea Moss.</p>
                <p className="py-2">❌ Made in home kitchen.</p>
                <p className="py-2">❌ Using Artificial Preservatives.</p>
                <p className="py-2">❌ Long Shipping Times</p>
                <p className="py-2">❌ No Third party Testing</p>
              </div>
            </div>
          </div>
          <AddToCart product={product} priceOfOne={priceOfOne} />
        </div>
      </section>
    </>
  )
}

export default SoursopBenefits
