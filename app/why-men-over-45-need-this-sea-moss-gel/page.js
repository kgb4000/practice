import React from 'react'
import Image from 'next/image'
import kesBg from '@/public/images/kes-founder.jpeg'
import Link from 'next/link'

const Why = () => {
  return (
    <>
      <div className="container max-w-5xl mx-auto px-8 lg:px-0">
        <div className="mt-44 mb-20">
          <div>
            <h1 className="text-3xl md:text-5xl max-w-4xl mx-auto font-bold leading-relaxed">
              11 Reasons Why Men Over 45 Need This Sea Moss Gel
            </h1>
            <p className="md:pl-16 pt-10">By: K. Browne</p>
          </div>
          <div className="py-14 max-w-4xl mx-auto">
            <div className="md:flex flex-row mb-20">
              <div className="md:w-2/5">
                <Image
                  src="https://res.cloudinary.com/browne-company/image/upload/v1710602624/SMWBolgImages/Untitled-41_btzqww.jpg"
                  width={500}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                  alt="Moringa sea moss gel."
                />
              </div>
              <div className="md:ml-10 md:w-3/5 mt-8">
                <h2 className="text-3xl">1. Supports Prostate Health</h2>
                <p className="text-xl pt-6">
                  Rich in zinc and anti-inflammatory properties, this gel
                  targets prostate health directly.
                </p>
                <p className="text-xl pt-6">
                  It helps reduce the risk of enlargement and protects against
                  prostate cancer, making it an effective preventive measure for
                  common male issues after 45.
                </p>
              </div>
            </div>
            <div className="md:flex flex-row mb-20">
              <div className="md:w-2/5">
                <Image
                  src="https://res.cloudinary.com/browne-company/image/upload/v1710602625/SMWBolgImages/Untitled-42_dzdv7p.jpg"
                  width={500}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                  alt="Improved sexual health and libido."
                />
              </div>
              <div className="md:ml-10 md:w-3/5 mt-8">
                <h2 className="text-3xl">
                  2. Improved Sexual Health and Libido
                </h2>
                <p className="text-xl pt-6">
                  The gel boosts libido and addresses erectile dysfunction
                  through improved blood flow and testosterone production.
                </p>
                <p className="text-xl pt-6">
                  Its nutrients support sexual function and endurance, offering
                  a natural remedy for enhancing sexual wellbeing in men over
                  45.
                </p>
              </div>
            </div>
            <div className="md:flex flex-row mb-20">
              <div className="md:w-2/5">
                <Image
                  src="https://res.cloudinary.com/browne-company/image/upload/v1710603581/SMWBolgImages/Untitled-43_k4nzup.jpg"
                  width={500}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                  alt="Boost testosterone."
                />
              </div>
              <div className="md:ml-10 md:w-3/5 mt-8">
                <h2 className="text-3xl">
                  3. Boosts Testosterone Levels Naturally
                </h2>
                <p className="text-xl pt-6">
                  Supporting testosterone production and muscle health, the gel
                  combats age-related decline in muscle mass and energy.
                </p>
                <p className="text-xl pt-6">
                  It’s ideal for sustaining muscle strength, vitality, and a
                  healthy libido, making it a key supplement for aging men.
                </p>
              </div>
            </div>
            <div className="md:flex flex-row mb-20">
              <div className="md:w-2/5">
                <Image
                  src="https://res.cloudinary.com/browne-company/image/upload/v1710602626/SMWBolgImages/Untitled-43_cp3lnm.jpg"
                  width={500}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                  alt="Muscle recovery."
                />
              </div>
              <div className="md:ml-10 md:w-3/5 mt-8">
                <h2 className="text-3xl">
                  4. Promotes Muscle Recovery and Strength
                </h2>
                <p className="text-xl pt-6">
                  Rich in amino acids, sea moss gel aids in muscle recovery
                  after exercise. It supports the growth and repair of muscle
                  tissue, making it easier for men over 45 to maintain their
                  strength and muscle mass.
                </p>
              </div>
            </div>
            <div className="md:flex flex-row mb-20">
              <div className="md:w-2/5">
                <Image
                  src="https://res.cloudinary.com/browne-company/image/upload/v1710602626/SMWBolgImages/Untitled-44_ez75h8.jpg"
                  width={500}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                  alt="Boost fertility."
                />
              </div>
              <div className="md:ml-10 md:w-3/5 mt-8">
                <h2 className="text-3xl">5. Boost Fertility</h2>
                <p className="text-xl pt-6">
                  The gel's rich zinc content and antioxidants significantly
                  enhance male fertility by improving sperm quality and
                  protecting against oxidative stress.
                </p>
                <p className="text-xl pt-6">
                  It supports hormonal balance and reproductive health, offering
                  a holistic fertility boost.
                </p>
              </div>
            </div>
            <div className="md:flex flex-row mb-20 bg-orange-500 py-20 px-10 rounded-3xl shadow-xl shadow-orange-500/50">
              <div className="md:w-2/5">
                <Image
                  src="https://res.cloudinary.com/browne-company/image/upload/v1708202866/moringaSeaMossGelAssets/SMW-SMG16oz-MORINGA-V1_f3koi2.png"
                  width={500}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                  className="rounded-xl"
                  alt="Moringa sea moss gel."
                />
              </div>
              <div className="md:ml-10 md:w-3/5">
                <p className="text-3xl text-white font-bold">
                  Get Your Moringa Sea Moss Gel and save 15% today!
                </p>
                <div className="flex items-center pt-6">
                  <Image
                    src="/images/check-mark.png"
                    height={35}
                    width={35}
                    className="mr-4"
                  />

                  <p className="text-2xl text-white font-semibold">
                    100% Organic
                  </p>
                </div>
                <div className="flex items-center pt-2">
                  <Image
                    src="/images/check-mark.png"
                    height={35}
                    width={35}
                    className="mr-4"
                  />
                  <p className="text-2xl text-white font-semibold">
                    Fast shipping
                  </p>
                </div>
                <div className="flex items-center pt-2">
                  <Image
                    src="/images/check-mark.png"
                    height={35}
                    width={35}
                    className="mr-4"
                  />
                  <p className="text-2xl text-white font-semibold">
                    Money Back Garauntee
                  </p>
                </div>
                <div className="mt-10">
                  <a href="/products/moringa-sea-moss-gel-16oz">
                    <button className="py-4 px-10 bg-yellow-400 text-xl font-bold uppercase rounded-xl hover:shadow-xl">
                      Order Now!
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:flex flex-row mb-20">
              <div className="md:w-2/5">
                <Image
                  src="https://res.cloudinary.com/browne-company/image/upload/v1710602628/SMWBolgImages/Untitled-46_lponmp.jpg"
                  width={500}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                  alt="Mental focus."
                />
              </div>
              <div className="md:ml-10 md:w-3/5 mt-8">
                <h2 className="text-3xl">6. Improves Mental Focus and Mood</h2>
                <p className="text-xl pt-6">
                  Iodine in sea moss gel supports thyroid health, which is
                  directly linked to cognitive function and mood stability.
                </p>
                <p className="text-xl pt-6">
                  This is particularly beneficial as men age and seek to
                  maintain mental sharpness.
                </p>
              </div>
            </div>
            <div className="md:flex flex-row mb-20">
              <div className="md:w-2/5">
                <Image
                  src="https://res.cloudinary.com/browne-company/image/upload/v1710602629/SMWBolgImages/Untitled-47_pndbgi.jpg"
                  width={500}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                  alt="Cardio."
                />
              </div>
              <div className="md:ml-10 md:w-3/5 mt-8">
                <h2 className="text-3xl">7. Supports Cardiovascular Health</h2>
                <p className="text-xl pt-6">
                  Moringa infused sea moss gel promotes heart health by
                  regulating blood pressure, reducing cholesterol, and
                  preventing plaque formation.
                </p>
                <p className="text-xl pt-6">
                  The high potassium content in sea moss gel helps regulate
                  blood pressure and supports overall heart health, addressing a
                  common concern for men over 45.
                </p>
              </div>
            </div>
            <div className="md:flex flex-row mb-20">
              <div className="md:w-2/5">
                <Image
                  src="https://res.cloudinary.com/browne-company/image/upload/v1710602630/SMWBolgImages/Untitled-48_y0pexa.jpg"
                  width={500}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                  alt="Reduces stress and anxiety."
                />
              </div>
              <div className="md:ml-10 md:w-3/5 mt-8">
                <h2 className="text-3xl">8. Reduces Stress and Anxiety</h2>
                <p className="text-xl pt-6">
                  With adaptogenic properties, the gel helps manage cortisol
                  levels, reducing stress and anxiety.
                </p>
                <p className="text-xl pt-6">
                  Its mineral content supports nervous system function,
                  promoting relaxation and improving mental health for a better
                  quality of life.
                </p>
              </div>
            </div>
            <div className="md:flex flex-row mb-20">
              <div className="md:w-2/5">
                <Image
                  src="https://res.cloudinary.com/browne-company/image/upload/v1710602631/SMWBolgImages/Untitled-49_mffz6c.jpg"
                  width={500}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                  alt="Weight loss."
                />
              </div>
              <div className="md:ml-10 md:w-3/5 mt-8">
                <h2 className="text-3xl">9. Aids in Weight Loss</h2>
                <p className="text-xl pt-6">
                  Aiding in weight management, the gel’s high fiber content and
                  fat breakdown properties support metabolic health.
                </p>
                <p className="text-xl pt-6">
                  It helps regulate appetite and digestion, making it easier to
                  maintain a healthy weight as metabolism slows with age.
                </p>
              </div>
            </div>
            <div className="md:flex flex-row mb-20">
              <div className="md:w-2/5">
                <Image
                  src="https://res.cloudinary.com/browne-company/image/upload/v1710602632/SMWBolgImages/Untitled-50_lxesf2.jpg"
                  width={500}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                  alt="Joint health."
                />
              </div>
              <div className="md:ml-10 md:w-3/5 mt-8">
                <h2 className="text-3xl">
                  10. Promotes Joint Health and Mobility
                </h2>
                <p className="text-xl pt-6">
                  The anti-inflammatory and mineral-rich gel improves joint
                  health and mobility.
                </p>
                <p className="text-xl pt-6">
                  It reduces pain and swelling associated with arthritis, while
                  strengthening bones and supporting cartilage health, crucial
                  for active aging.
                </p>
              </div>
            </div>
            <div className="md:flex flex-row mb-20">
              <div className="md:w-2/5">
                <Image
                  src="https://res.cloudinary.com/browne-company/image/upload/v1710602633/SMWBolgImages/Untitled-51_vj2pld.jpg"
                  width={500}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                  alt="Moringa sea moss gel."
                />
              </div>
              <div className="md:ml-10 md:w-3/5 mt-8">
                <h2 className="text-3xl">11. Supports Detoxification</h2>
                <p className="text-xl pt-6">
                  Supporting detoxification and immune function, the gel
                  enhances the body’s natural defenses against diseases and
                  aging.
                </p>
                <p className="text-xl pt-6">
                  Its chlorophyll and iodine content aid in blood purification
                  and thyroid health, promoting long-term wellness.
                </p>
              </div>
            </div>
            <div className="md:flex flex-row mb-10 bg-orange-500 py-20 px-10 rounded-3xl shadow-xl shadow-orange-500/50">
              <div className="md:w-2/5">
                <Image
                  src="https://res.cloudinary.com/browne-company/image/upload/v1708202866/moringaSeaMossGelAssets/SMW-SMG16oz-MORINGA-V1_f3koi2.png"
                  width={500}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                  className="rounded-xl"
                  alt="Moringa sea moss gel."
                />
              </div>
              <div className="md:ml-10 md:w-3/5">
                <p className="text-3xl text-white font-bold">
                  Get Your Moringa Sea Moss Gel and save 15% today!
                </p>
                <div className="flex items-center pt-6">
                  <Image
                    src="/images/check-mark.png"
                    height={35}
                    width={35}
                    className="mr-4"
                  />

                  <p className="text-2xl text-white font-semibold">
                    100% Organic
                  </p>
                </div>
                <div className="flex items-center pt-2">
                  <Image
                    src="/images/check-mark.png"
                    height={35}
                    width={35}
                    className="mr-4"
                  />
                  <p className="text-2xl text-white font-semibold">
                    Fast shipping
                  </p>
                </div>
                <div className="flex items-center pt-2">
                  <Image
                    src="/images/check-mark.png"
                    height={35}
                    width={35}
                    className="mr-4"
                  />
                  <p className="text-2xl text-white font-semibold">
                    Money Back Garauntee
                  </p>
                </div>
                <div className="mt-10">
                  <a href="/products/moringa-sea-moss-gel-16oz">
                    <button className="py-4 px-10 bg-yellow-400 text-xl font-bold uppercase rounded-xl hover:shadow-xl">
                      Order Now!
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Why
