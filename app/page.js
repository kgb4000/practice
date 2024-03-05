import Image from 'next/image'
import Link from 'next/link'
import Shop from '@/components/Shop'
import Vitamins from '@/components/Vitamins'
import BlogSection from '@/components/BlogSection'
import Faq from '@/components/Faqs'
import womanBg from '../public/images/black-woman-in-kitchen.webp'
import AboutUs from '@/components/AboutUs'
import CallToAction from '@/components/CallToAction'
import Hero from '@/components/Hero'
import OurCompany from '@/components/OurCompany'
import HeroImage from '@/public/images/ocean-bg.webp'

export const metadata = {
  title: 'Buy Premium Sea Moss Products Online | Sea Moss Wellness',
  description:
    'Explore our top-quality dried sea moss, infused gels, and capsules. Boost your health with our natural sea moss products. Shop now at Sea Moss Wellness.',
  alternates: {
    canonical: 'https://seamosswellness.com/',
  },
}

export default function Home() {
  return (
    <>
      <Hero
        backgroundImage={HeroImage}
        backgroundHeight="h-[100vh]"
        alt="Sea Moss Wellness - Ocean background."
        padding="py-[16.5rem]"
        heroMarginBottom="mb-20 lg:mb-40"
        heroText="Organic Sea Moss"
        subText="Buy premium dreid sea moss, sea moss gels, and capsules"
        buttonText="Shop Now"
        buttonLink="/shop"
      />
      <OurCompany />
      <Shop />
      <section className="bg-yellow-100 py-10">
        <div className="container max-w-7xl mx-auto my-20">
          <div className="lg:grid grid-cols-2 items-center gap-x-10 h-full">
            <Image
              src={womanBg}
              quality={100}
              alt="Black woman in a kitchen."
              width={700}
              height={700}
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            <div className="px-4 my-10 py-10">
              <h2 className="text-4xl lg:text-5xl text-center lg:text-left mb-4">
                Change What You Eat
              </h2>
              {/* <p className="text-xl mb-4 leading-loose">
                Eating processed foods and red meat is linked to an increased
                risk of heart disease, obesity, diabetes, and certain cancers,
                advocating for a transition to diets rich in fruits, vegetables,
                whole grains, and lean proteins.
              </p> */}
              <p className="text-xl mb-4 leading-loose">
                Changing what we eat is not merely a personal choice but a
                necessity to foster a healthier you.
              </p>
              <p className="text-xl mb-4 leading-loose">
                Consuming organic foods like sea moss can help:
              </p>
              <p className="text-xl mb-4 leading-loose">
                <b>Reduced Risk of Chronic Diseases:</b> Studies show that
                people who eat more plant-based foods lower the risk of
                developing chronic diseases like heart disease, diabetes, and
                certain cancers.
              </p>
              <p className="text-xl mb-4 leading-loose">
                <b>Heart Health:</b> A diet rich in fruits, vegetables, legumes,
                and whole grains can lower blood pressure, reduce cholesterol
                levels, and decrease the risk of heart disease.
              </p>
              <p className="text-xl mb-4 leading-loose">
                <b> Blood Sugar Control:</b> High-fiber foods can help regulate
                blood sugar levels by slowing down sugar absorption in the
                bloodstream. This is particularly beneficial for preventing and
                managing diabetes.
              </p>
              <div className="text-center lg:text-left my-5">
                <Link href="/shop">
                  <button className="py-4 px-10  bg-yellow-400 text-xl font-bold uppercase">
                    Shop now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogSection />
      {/* <PromoSection /> */}
      <Vitamins />
      <AboutUs />
      <CallToAction />
      <Faq />
    </>
  )
}
