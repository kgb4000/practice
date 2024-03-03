import React from 'react'
import CallToAction from '@/components/CallToAction'
import Image from 'next/image'

async function getCategorySlug(slug) {
  const res = await fetch(
    'https://api-us-east-1.hygraph.com/v2/clc75eeyc1srk01t6gd17elvj/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        query Category($slug: String!) {
            categories(where: {slug: $slug}) {
            id
            seoTitle
            name
            description
            slug
            faq {
              question
              answer
            }
            products(orderBy: createdAt_DESC, last: 20){
              id
              image 
              name
              price
              slug
            }
          }
        }`,
        variables: {
          slug: slug,
        },
      }),
    }
  )
  const data = await res.json()
  console.log(data)
  return data.data.categories
}

export const metadata = {
  title: 'Track My order | Sea Moss Wellness',
  description:
    'Discover the full range of our natural sea moss products. From gels to capsules and dried moss, find everything for your wellness journey here.',
  robots: {
    index: false,
  },
  googleBot: {
    index: false,
  },
  alternates: {
    canonical: 'https://seamosswellness.com/track-order',
  },
}

const TrackOrder = () => {
  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto mt-40 mb-20 px-8">
          <h1 className="text-5xl text-center">Track Your order</h1>
          <p className="text-xl text-center my-4">
            Track your order 2 days after you ordered it.
          </p>
          <div className="my-8 flex flex-col">
            <form className="mx-auto ">
              <div>
                <input className="w-full border py-2 px-4 mb-2" />
              </div>
              <div>
                <input
                  type="submit"
                  value="Submit"
                  className="w-full border py-2 px-4 mb-2"
                />
              </div>
            </form>
          </div>
          <div className="my-14">
            <h2 className="text-5xl text-center">Have You Tried Theese?</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-between my-20">
            <a href="/products/soursop-sea-moss-gel-16oz">
              <Image
                src="https://res.cloudinary.com/browne-company/image/upload/v1708203042/soursopSeaMossGelAssets/SMW-SMG16oz-SOURSOP-V1_q3xzso.png"
                alt="Soursop Sea Moss Gel."
                width={400}
                height={400}
                className="mx-auto"
                sizes="(max-width: 400px) 100vw, 400px"
              />
            </a>
            <a href="/products/pineapple-sea-moss-gel-16oz">
              <Image
                src="https://res.cloudinary.com/browne-company/image/upload/v1708120768/pineappleSeaMossGelAssets/SMW-SMG16oz-PINEAPPLE-V1_p77dzz.png"
                alt="Pineapple Sea Moss Gel."
                width={400}
                height={400}
                className="mx-auto"
              />
            </a>
            <a href="/products/mango-sea-moss-gel-16oz">
              <Image
                src="https://res.cloudinary.com/browne-company/image/upload/v1708110923/mangoSeaMossGelAssets/SMW-SMG16oz-MANGO-V1_qsmgzk.png"
                alt="Mango Sea Moss Gel."
                width={400}
                height={400}
                className="mx-auto"
              />
            </a>
            <a href="/products/strawberry-sea-moss-gel-16oz">
              <Image
                src="https://res.cloudinary.com/browne-company/image/upload/v1708111033/strawberrySeaMossGelAssets/SMW-SMG16oz-STRAWBERRY-V1_fx3d4d.png"
                alt="Strawberry Sea Moss Gel."
                width={400}
                height={400}
                className="mx-auto"
              />
            </a>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  )
}

export default TrackOrder
