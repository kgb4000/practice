import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GraphQLClient, gql } from 'graphql-request'
import { buildImage } from '@/lib/cloudinary/cloudinary'
import RefreshLink from '@/components/RefreshLink'

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
  return (
    <>
      <section>
        <div className=" my-20 lg:my-20 px-5">
          <h2 className="text-5xl lg:text-5xl leading-relaxed text-ui-fg-base font-normal my-5 text-center">
            Explore Our Products
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
                        src={buildImage(product.image[0].public_id).toURL()}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="mx-auto"
                        style={{
                          width: '70%',
                          height: 'auto',
                        }}
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
          <div className="text-center my-20">
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
