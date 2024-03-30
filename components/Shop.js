import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GraphQLClient, gql } from 'graphql-request'
import { buildImage } from '@/lib/cloudinary/cloudinary'
import { limitFit } from '@cloudinary/url-gen/actions/resize'
import { getPlaiceholder } from 'plaiceholder'

const hygraph = new GraphQLClient(
  'https://api-us-east-1.hygraph.com/v2/clc75eeyc1srk01t6gd17elvj/master'
)

const FeaturedCategory = gql`
  {
    category(where: { slug: "featured" }) {
      id
      name
      products(first: 20) {
        id
        name
        price
        image
        slug
      }
    }
  }
`

export default async function Shop() {
  const { category } = await hygraph.request(FeaturedCategory)
  console.log(FeaturedCategory)

  const src = buildImage(category.products[0].image[0].public_id)
    .resize(limitFit().width(400).height(380))
    .toURL()

  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer())
  })

  const { base64 } = await getPlaiceholder(buffer)
  return (
    <>
      <section>
        <div className="my-14 lg:my-36 px-8">
          <h2 className="text-4xl lg:text-5xl leading-relaxed my-5 text-center">
            Featured Products
          </h2>
          <p className="text-xl text-center max-w-2xl mx-auto mb-16">
            Our products include dried sea moss, sea moss gels, and capsules,
            all ethically sourced and harvested of the coast of St. Lucia.
          </p>
          <div className="container mx-auto">
            <div className="mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-1 text-center">
                {category.products.map((product) => (
                  <div key={product.id} className="mb-10">
                    <a href={`/products/${product.slug}`}>
                      <Image
                        src={buildImage(product.image[0].public_id)
                          .resize(limitFit().width(400).height(380))
                          .toURL()}
                        alt={product.name}
                        className="mx-auto w-[400px]"
                        width={400}
                        height={380}
                        style={{
                          width: '80%',
                          height: 'auto',
                        }}
                        priority
                        placeholder="blur"
                        blurDataURL={base64}
                      />
                      <div
                        className="yotpo bottomLine"
                        data-yotpo-product-id={product.id}
                      ></div>
                      <p className="text-xl mb-5 max-w-[300px] mx-auto">
                        {product.name}
                      </p>
                      <p className="text-sm md:text-xl">${product.price}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center my-10">
            <Link href="/shop">
              <button className="py-4 px-10  bg-yellow-400 text-xl font-bold uppercase">
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
