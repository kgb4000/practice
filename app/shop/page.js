import Image from 'next/image'
import Link from 'next/link'
import { GraphQLClient, gql } from 'graphql-request'
import { buildImage } from '@/lib/cloudinary/cloudinary'
import CallToAction from '@/components/CallToAction'
import { getPlaiceholder } from 'plaiceholder'
import { limitFill } from '@cloudinary/url-gen/actions/resize'

const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT)

const Products = gql`
  {
    products(orderBy: createdAt_DESC, last: 25) {
      id
      name
      metaDescription
      price
      image
      slug
    }
  }
`

export const metadata = {
  title: 'Buy Sea Moss Online | 100% Organic | Free Shipping',
  description:
    'Discover the full range of our natural sea moss products. From gels to capsules and dried moss, find everything for your wellness journey here.',
  alternates: {
    canonical: 'https://seamosswellness.com/shop',
  },
  openGraph: {
    title: 'Buy Sea Moss Online | 100% Organic | Free Shipping',
    description:
      'Discover the full range of our natural sea moss products. From gels to capsules and dried moss, find everything for your wellness journey here.',
    url: 'https://seamosswellness.com/shop',
    siteName: 'seamosswellness.com',
    images: [
      {
        url: 'https://nextjs.org/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Sea Moss Wellness Shop',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default async function Shop() {
  const { products } = await hygraph.request(Products)
  console.log('products', products)

  const src = buildImage(products[0].image[0].public_id)
    .resize(limitFill().width(600).height(600))
    .toURL()

  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer())
  })

  const { base64 } = await getPlaiceholder(buffer)

  return (
    <>
      <section>
        <div className="container max-w-9xl mx-auto lg:px-0 pt-20 md:pt-36 pb-16 px-4">
          <h1 className="text-4xl lg:text-5xl text-center">
            Our Sea Moss Products
          </h1>
          <div className="flex gap-x-[20px] py-4 justify-center items-center mb-4">
            <p className="text-center">
              <Link href="/shop">All</Link>
            </p>
            <p className="text-center">
              <Link href="/categories/dried-sea-moss">Dried</Link>
            </p>
            <p className="text-center">
              <Link href="/categories/sea-moss-gels">Gels</Link>
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 my-4">
            {products.map((product) => (
              <div key={product.slug}>
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
                    <div
                      className="yotpo bottomLine"
                      data-yotpo-product-id={product.id}
                    ></div>
                    <p className="text-xl mb-5 max-w-[300px] mx-auto font-semibold">
                      {product.name}
                    </p>
                    <p className="my-5 font-semibold">${product.price}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto max-w-7xl py-20">
            <h2 className="text-3xl mb-5 font-bold">Why Sea Moss?</h2>
            <p className="text-xl leading-10 mb-10">
              Sea moss is a nutrient-rich superfood that supports thyroid
              health, boosts immunity, promotes digestive and skin health, aids
              in weight management and energy levels, and provides a natural
              source of collagen, making it an all-around powerhouse for
              improving overall health and wellbeing.
            </p>
            <h2 className="text-3xl mb-5 font-bold">
              What are the Health Benefits of Sea Moss
            </h2>
            <p className="text-xl leading-10 mb-4">Sea Moss is:</p>
            <div className="lg:grid grid-cols-3 gap-x-4 mb-8">
              <p className="text-xl leading-10 mb-4 border-4 p-16 rounded-xl">
                Rich in Nutrients: Sea moss is packed with essential vitamins
                and minerals, including iodine, potassium, calcium, and Vitamin
                C, which are crucial for overall health.
              </p>
              <p className="text-xl leading-10 mb-4 border-4 p-16 rounded-xl">
                Supports Thyroid Health: The high iodine content in sea moss
                helps in the production of thyroid hormones, which regulate
                metabolism, energy levels, and the body's growth and
                development.
              </p>
              <p className="text-xl leading-10 mb-4 border-4 p-16 rounded-xl">
                Boosts Immunity: Its antioxidant properties and nutrients
                support the immune system, helping to fight off infections and
                illnesses.
              </p>
              <p className="text-xl leading-10 mb-4 border-4 p-16 rounded-xl">
                Promotes Digestive Health: Sea moss is a great source of fiber
                and live bacteria that can improve gut health and digestion, and
                relieve issues like bloating and constipation.
              </p>
              <p className="text-xl leading-10 mb-4 border-4 p-16 rounded-xl">
                Improves Skin Health: Applied topically or ingested, sea moss
                can enhance skin health due to its vitamin and mineral content,
                helping with conditions like eczema, psoriasis, and acne.
              </p>
              <p className="text-xl leading-10 mb-4 border-4 p-16 rounded-xl">
                Supports Weight Management: Being low in calories yet dense in
                nutrients, sea moss can help in feeling full longer, aiding in
                weight management efforts.
              </p>
              <p className="text-xl leading-10 mb-4 border-4 p-16 rounded-xl">
                Enhances Energy Levels: The iron content in sea moss helps in
                reducing fatigue and boosting energy levels, making it a great
                supplement for those leading active lifestyles.
              </p>
              <p className="text-xl leading-10 mb-4 border-4 p-16 rounded-xl">
                Natural Source of Collagen: Sea moss contains amino acids and
                nutrients that are building blocks for collagen, essential for
                healthy joints, skin elasticity, and muscle repair.
              </p>
            </div>
            <h2 className="text-3xl mb-5 font-bold">How To Use Sea Moss?</h2>
            <p className="text-xl leading-10 mb-4">
              To use{' '}
              <Link
                href="/categories/dried-sea-moss"
                className="text-red-500 underline"
              >
                dried sea moss
              </Link>{' '}
              first rinse it thoroughly to remove any debris, then soak it in
              water for at least 12-24 hours until it expands and softens. After
              soaking, blend it with fresh water until smooth to create a gel.
            </p>
            <p className="text-xl leading-10 mb-4">
              <Link
                href="/categories/sea-moss-gels"
                className="text-red-500 underline"
              >
                Sea moss gel
              </Link>{' '}
              can be used by incorporating it into smoothies, teas, soups, and
              sauces as a thickening agent, or applied directly to the skin as a
              moisturizing face mask. Both forms offer a versatile way to enjoy
              the health benefits of sea moss.
            </p>
            <h2 className="text-3xl mb-5 font-bold">
              Frequently Asked Questions
            </h2>
            <div>
              <h3 className="text-2xl mb-5 font-semibold">
                Can sea moss help people with diabetes?
              </h3>
              <p className="text-xl leading-10 mb-4">
                Sea moss may help manage diabetes by regulating blood sugar
                levels due to its high fiber content. It also aids in improving
                insulin sensitivity, potentially reducing the need for insulin
                in people with type 2 diabetes.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-5 font-semibold">
                Is sea moss good for managing high blood pressure?
              </h3>
              <p className="text-xl leading-10 mb-4">
                Yes, the potassium in sea moss can help lower blood pressure by
                counteracting the effects of sodium in the diet. Regular
                consumption can contribute to cardiovascular health and prevent
                hypertension.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-5 font-semibold">
                Can sea moss help reduce anxiety and improve mental health?
              </h3>
              <p className="text-xl leading-10 mb-4">
                The magnesium and potassium found in sea moss play vital roles
                in brain function and may help reduce symptoms of anxiety and
                depression, promoting a sense of calm and improving sleep
                quality.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-5 font-semibold">
                What are the benefits of sea moss for liver health?
              </h3>
              <p className="text-xl leading-10 mb-4">
                Sea moss's antioxidants can protect the liver from damage and
                support liver health by helping to detoxify the body, reduce fat
                accumulation in the liver, and enhance liver function,
                potentially benefiting those with liver disease.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-5 font-semibold">
                Can sea moss help in weight loss efforts?
              </h3>
              <p className="text-xl leading-10 mb-4">
                Its fiber content promotes feelings of fullness, reducing
                overall calorie intake. Additionally, iodine in sea moss boosts
                metabolism, aiding in more efficient calorie burn.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-5 font-semibold">
                Can sea moss support heart health in people with high
                cholesterol?
              </h3>
              <p className="text-xl leading-10 mb-4">
                Yes, sea moss can support heart health by reducing bad LDL
                cholesterol and triglycerides, thanks to its omega-3 fatty
                acids, potassium, and magnesium content, thereby lowering the
                risk of heart disease.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-5 font-semibold">
                Is sea moss effective for skin conditions like eczema and
                psoriasis?
              </h3>
              <p className="text-xl leading-10 mb-4">
                The high sulfur content in sea moss, along with its
                anti-inflammatory and antimicrobial properties, can help treat
                skin conditions like eczema and psoriasis, promoting healing and
                improving skin barrier function.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-5 font-semibold">
                Can sea moss improve respiratory health for those with
                conditions like asthma?
              </h3>
              <p className="text-xl leading-10 mb-4">
                Sea moss helps dissolve mucus and reduce inflammation in the
                respiratory tract, making breathing easier for individuals with
                respiratory conditions like asthma and bronchitis.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-5 font-semibold">
                Does sea moss have benefits for people suffering from arthritis?
              </h3>
              <p className="text-xl leading-10 mb-4">
                Its anti-inflammatory properties and content of omega-3 fatty
                acids, calcium, and magnesium can alleviate joint pain and
                stiffness associated with arthritis, improving joint mobility.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-5 font-semibold">
                Can sea moss contribute to overall digestive health?
              </h3>
              <p className="text-xl leading-10 mb-4">
                Sea moss acts as a prebiotic, feeding the good bacteria in the
                gut, which is essential for a healthy digestive system. It can
                also help relieve symptoms of gut disorders like IBS (Irritable
                Bowel Syndrome).
              </p>
            </div>
            <div className="my-14 text-center">
              <Link href="/shop">
                <button className="py-4 px-10 bg-yellow-400 text-xl font-bold uppercase">
                  Back to Shop
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  )
}
