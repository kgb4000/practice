'use server'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { buildImage } from '@/lib/cloudinary/cloudinary'
import CallToAction from '@/components/CallToAction'
import DriedSeaMoss from '@/components/DriedSeaMoss'
import SeaMossGels from '@/components/SeaMossGels'
import { limitFill } from '@cloudinary/url-gen/actions/resize'
import { getPlaiceholder } from 'plaiceholder'

async function getCategorySlug(slug) {
  const res = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT, {
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
            products(last: 40){
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
  })
  const data = await res.json()
  console.log(data)
  return data.data.categories
}

export async function generateMetadata({ params }) {
  const categories = await getCategorySlug(params.slug)
  const category = categories[0]
  return {
    title: category.seoTitle,
    description: category.description,
    alternates: {
      canonical: `https://seamosswellness.com/categories/${category.slug}`,
    },
  }
}

export default async function Category({ params }) {
  const categories = await getCategorySlug(params.slug)
  const category = categories[0]
  console.log(category)

  let content

  if (category.slug === 'dried-sea-moss') {
    content = <DriedSeaMoss />
  } else if (category.slug === 'sea-moss-gels') {
    content = ' '
  }

  const src = buildImage(category.products[0].image[0].public_id)
    .resize(limitFill().width(600).height(600))
    .toURL()

  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer())
  })

  const { base64 } = await getPlaiceholder(buffer)
  return (
    <>
      <section>
        <div className="container max-w-9xl mx-auto mt-40 px-4">
          <h1 className="text-3xl lg:text-5xl text-center py-10">
            Buy {category.name}
          </h1>
          <div className="flex gap-x-[20px] py-4 justify-center items-center mb-4">
            <p className="text-center">
              <Link href="/shop">All products</Link>
            </p>
            <p className="text-center">
              <Link href="/categories/dried-sea-moss">Dried Sea Moss</Link>
            </p>
            <p className="text-center">
              <Link href="/categories/sea-moss-gels">Sea Moss Gels</Link>
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 my-4">
            {category.products.map((product) => {
              return (
                <div className="mx-auto text-center hover:bg-slate-100 pt-10 pb-10 rounded-2xl">
                  <a href={`/products/${product.slug}`}>
                    <Image
                      src={buildImage(product.image[0].public_id)
                        .resize(limitFill().width(600).height(600))
                        .toURL()}
                      priority
                      alt={product.name}
                      width={400}
                      height={380}
                      className="mx-auto"
                      placeholder="blur"
                      blurDataURL={base64}
                    />
                  </a>
                  <div
                    className="yotpo bottomLine"
                    data-yotpo-product-id={product.id}
                  ></div>
                  <p className="text-xl mb-5 max-w-[300px] mx-auto font-semibold">
                    {product.name}
                  </p>
                  <p className="my-5 font-semibold">${product.price}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {content}
      <section>
        <div className="container max-w-5xl mx-auto my-20 px-8">
          <h2 className="text-5xl text-center leading-relaxed font-normal mb-10 lg:mb-20">
            Questions About {category.name}
          </h2>
          <div className="grid lg:grid-cols-2 gap-x-10">
            {categories[0].faq.map((faq) => (
              <div>
                <p className="text-2xl lg:text-3xl leading-10 mb-5">
                  {faq.question}
                </p>
                <p className="text-xl lg:max-w-2xl leading-10 mb-10">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  )
}
