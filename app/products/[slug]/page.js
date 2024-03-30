'use server'

import Link from 'next/link'
import Image from 'next/image'
import HeroImage from '@/components/HeroImage'
import { buildImage } from '@/lib/cloudinary/cloudinary'
import CallToAction from '@/components/CallToAction'
import MoreInfo from '@/components/MoreInfo'
import { RichText } from '@graphcms/rich-text-react-renderer'
import Price from '@/components/Price'
import Natural from '@/components/Natural'
import Stars from '@/components/Stars'
import CustomerReviewsApp from '@/components/CustomerReviewsApp'
import { limitFit, fit } from '@cloudinary/url-gen/actions/resize'
import { getPlaiceholder } from 'plaiceholder'
import SoursopBenefits from '@/components/SoursopBenefits'
import StrawberrySeaMossGelBenefits from '@/components/StrawberrySeaMossGelBenefits'
import Check from '@/public/icons/check.webp'
import AddToCart from '@/components/AddToCart'
import FloatingButton from '@/components/FloatingButton'

export async function getProductSlug(slug) {
  const res = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query Product($slug: String!) {
            product(where: {slug: $slug}) {
            id
            name
            seoTitle
            metaDescription
            productDescription
            featuredBenefit
            bulletPoint1 {
              raw
            }
            price
            slug
            image
            origin
            ingredients {
              raw
            }
            flavor {
              raw
            }
            shipping {
              raw
            }
            returnPolicy {
              raw
            }
            benefits {
              raw
            }
            faq {
              question
              answer
            }
            categories {
              products(where: { slug_not: "featured" }, last: 4){
                id
                name
                price
                image
                slug
              }
            }
          }
        }`,
      variables: {
        slug: slug,
      },
    }),
  })
  const data = await res.json()
  return data.data.product
}

export async function generateMetadata({ params }) {
  const product = await getProductSlug(params.slug)

  return {
    title: product.seoTitle,
    description: product.metaDescription,
    alternates: {
      canonical: `https://seamosswellness.com/products/${product.slug}`,
    },
  }
}

export default async function Product({ params }) {
  const product = await getProductSlug(params.slug)
  const priceOfOne = product.price
  const heroMossImage = buildImage(product.image[0].public_id).toURL()
  const pageURL = `https://seamosswellness.com/products/${product.slug}`

  const data = product.categories

  const src = buildImage(product.image[0].public_id)
    .resize(limitFit().width(800).height(760))
    .toURL()

  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer())
  })

  const { base64 } = await getPlaiceholder(buffer)

  {
    product.slug === 'soursop-sea-moss-gel-16oz' ? <SoursopBenefits /> : ' '
  }

  let content

  // if (product.slug.includes('soursop-sea-moss-gel')) {
  //   return <SoursopBenefits />
  // } else if (product.slug.includes('strawberry-sea-moss-gel')) {
  //   return <StrawberrySeaMossGelBenefits />
  // }

  return (
    <>
      <section>
        <div className="container max-w-3xl lg:max-w-5xl mx-auto lg:px-0 mt-20 md:mt-32 mb-8">
          <div className="lg:flex">
            <HeroImage
              product={product}
              heroMossImage={buildImage(product.image[0].public_id)
                .resize(limitFit().width(800).height(760))
                .toURL()}
              alt={product.name}
            />
            <div className="lg:w-3/5 px-4 xl:px-0">
              {/* <Stars product={product} /> */}
              <h1 className="text-2xl md:text-4xl py-2 font-bold">
                {product.name}
              </h1>

              <p className="text-gray-400 text-2xl mb-2">
                {/* <Natural /> */}
                {product.featuredBenefit}
              </p>
              {/* <Natural /> */}
              {/* <p className="py-2">{product.productDescription}</p> */}
              {product.bulletPoint1 ? (
                <RichText
                  content={product.bulletPoint1.raw}
                  renderers={{
                    ul: ({ children }) => (
                      <ul className="list-disc list-outside ml-4">
                        {children}
                      </ul>
                    ),
                    li: ({ children }) => (
                      <li className="leading-8">{children}</li>
                    ),
                  }}
                />
              ) : (
                ' '
              )}
              <Natural />
              <div className="bg-gray-600 rounded-xl text-white py-3 px-4 text-[0.8rem] text-center md:text-left">
                ⭐ Enjoy 15% Off Today | No Code Needed ⭐
              </div>
              <Price product={product} priceOfOne={priceOfOne} />
            </div>
          </div>
        </div>
      </section>
      {product.slug.includes('soursop-sea-moss-gel') ? (
        <SoursopBenefits product={product} priceOfOne={priceOfOne} />
      ) : product.slug.includes('strawberry-sea-moss-gel') ? (
        <StrawberrySeaMossGelBenefits
          product={product}
          priceOfOne={priceOfOne}
        />
      ) : (
        ' '
      )}
      <section>
        <div className="container max-w-5xl mx-auto my-10 md:my-20 px-4">
          <h2 className="text-3xl lg:text-5xl text-center mb-8">
            Questions and Answers
          </h2>
          <div>
            <div className="lg:grid grid-cols-2 gap-x-14">
              {product.faq.map((faq) => (
                <div key={faq.id}>
                  <div>
                    <p className="text-xl md:text-2xl mb-4">{faq.question}</p>
                    <p className="md:text-xl mb-4">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <AddToCart product={product} priceOfOne={priceOfOne} />
        </div>
      </section>
      <section>
        <div className="container max-w-7xl mx-auto my-14 md:my-20 px-8">
          <h2 className="text-3xl lg:text-5xl text-center mb-8">
            Other Products You May Like
          </h2>
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4">
            {data[0].products.map((product) => (
              <div key={product.id}>
                <div className="text-center mx-auto">
                  <Link href={`/products/${product.slug}`}>
                    <Image
                      src={buildImage(product.image[0].public_id)
                        .resize(limitFit().width(400).height(400))
                        .toURL()}
                      alt={product.name}
                      className="mx-auto"
                      width={400}
                      height={400}
                      style={{
                        maxWidth: '80%',
                        height: 'auto',
                      }}
                      placeholder="blur"
                      blurDataURL={base64}
                    />
                    <p className="text-xl mb-5 max-w-[250px] mx-auto">
                      {product.name}
                    </p>
                    <p className="my-5 font-semibold">${product.price}</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="my-5 text-center">
            <Link href="/shop">
              <button className="py-4 px-10 bg-yellow-400 text-xl font-bold uppercase">
                Shop Some More
              </button>
            </Link>
          </div>
        </div>
      </section>
      <FloatingButton product={product} priceOfOne={priceOfOne} />
      {/* <CustomerReviewsApp
        product={product}
        heroMossImage={heroMossImage}
        priceOfOne={priceOfOne}
        pageURL={pageURL}
      /> */}

      <CallToAction />
      {/* <div className="max-w-4xl mx-auto px-4 flex justify-center lg:hidden">
        <div className="fixed bottom-0 ">
          <div className="">
            <FloatingButton product={product} priceOfOne={priceOfOne} />
          </div>
        </div>
      </div> */}
    </>
  )
}
