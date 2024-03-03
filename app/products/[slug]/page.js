import Link from 'next/link'
import Image from 'next/image'
import HeroImage from '@/components/HeroImage'
import { buildImage } from '@/lib/cloudinary/cloudinary'
import CallToAction from '@/components/CallToAction'
import MoreInfo from '@/components/MoreInfo'
import Price from '@/components/Price'
import Natural from '@/components/Natural'
import Stars from '@/components/Stars'
import CustomerReviewsApp from '@/components/CustomerReviewsApp'

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
            metaDescription
            productDescription
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
              products(where: { slug_not: "featured" }, first: 4){
                id
                name
                price
                image
                slug
                faq {
                  question
                  answer
                }
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
    title: product.name,
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

  return (
    <>
      <script type="application/ld+json"></script>
      <section>
        <div className="container max-w-3xl lg:max-w-7xl mx-auto px-4 lg:px-0 mt-44 mb-14">
          <div className="lg:flex">
            <HeroImage
              product={product}
              heroMossImage={buildImage(product.image[0].public_id).toURL()}
              alt={product.name}
            />
            <div className="lg:w-2/5 px-4 xl:px-0">
              <Stars product={product} />
              <h1 className="text-5xl py-2 mt-4">{product.name}</h1>
              <p className="text-xl my-2 text-green-600">
                PLANT-BASED | VEGAN | RAW FOOD | NON-GMO
              </p>
              <p className="text-xl my-4">{product.productDescription}</p>
              <Price product={product} priceOfOne={priceOfOne} />
              <Natural />
            </div>
          </div>
        </div>
      </section>
      {/* <MoreInfo product={product} /> */}
      <section>
        <div className="container max-w-7xl mx-auto my-20">
          <h2 className="text-5xl text-center mb-20">
            More Products You May Like
          </h2>
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4">
            {data[0].products.map((product) => (
              <div key={product.id}>
                <div className="text-center mx-auto">
                  <a href={`/products/${product.slug}`}>
                    <Image
                      src={buildImage(product.image[0].public_id).toURL()}
                      alt={product.name}
                      className="mx-auto"
                      width={400}
                      height={400}
                      style={{
                        width: '80%',
                        height: 'auto',
                      }}
                      priority
                    />
                    <p className="text-xl mb-5 max-w-[250px] mx-auto">
                      {product.name}
                    </p>
                    <p className="my-5 font-semibold">${product.price}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="my-5 text-center">
            <Link href="/shop">
              <button className="py-4 px-10 bg-yellow-400 text-xl font-bold uppercase">
                Back to Shop
              </button>
            </Link>
          </div>
        </div>
      </section>
      <CustomerReviewsApp
        product={product}
        heroMossImage={heroMossImage}
        priceOfOne={priceOfOne}
        pageURL={pageURL}
      />
      <section>
        <div className="container max-w-5xl mx-auto my-20 px-8">
          <h2 className="text-5xl text-center mb-10">Questions and Answers</h2>
          <div>
            <div className="lg:grid grid-cols-2 gap-x-14">
              {product.faq.map((faq) => (
                <div key={faq.id}>
                  <div>
                    <p className="text-2xl mb-4">{faq.question}</p>
                    <p className="text-xl mb-4">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  )
}