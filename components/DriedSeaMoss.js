import React from 'react'

export async function getProductCategory(slug) {
  const res = await fetch(
    'https://api-us-east-1.hygraph.com/v2/clc75eeyc1srk01t6gd17elvj/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        query Product($slug: String!) {
            category(where: {slug: $slug}) {
            products {
              name
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
  return data.data.category
}

const DriedSeaMoss = () => {
  return (
    <>
      <section>
        <div className="container max-w-9xl mx-auto mt-20 px-8">
          {/* <p className="text-center">{category.name}</p> */}
          <h2 className="text-5xl max-w-2xl mx-auto text-center my-10">
            How To Make Sea Moss Gel With Dried Sea Moss
          </h2>
          <div className="xl:flex mb-14 gap-x-10">
            <div className="p-10 border rounded-xl mb-8">
              <p className="text-2xl mb-4">#1. Clean the Sea Moss</p>
              <ul>
                <li className="text-xl mb-4 ml-4 list-disc">
                  You'll need dried sea moss, a large bowl, and fresh water
                  (preferably spring or distilled water).
                </li>
                <li className="text-xl mb-4 ml-4 list-disc">
                  Place the sea moss in a large bowl. Run cold water over it to
                  remove any sea debris, sand, or salt.
                </li>
                <li className="text-xl mb-4 ml-4 list-disc">
                  Carefully check the sea moss for any remaining debris. Rinse
                  several times until the water runs clear.
                </li>
              </ul>
            </div>
            <div className="p-10 border rounded-xl mb-8">
              <p className="text-2xl mb-4">#2. Soak the Sea Moss</p>
              <ul>
                <li className="text-xl mb-4 ml-4 list-disc">
                  After rinsing, cover the sea moss with a generous amount of
                  water, as it will expand during soaking.
                </li>
                <li className="text-xl mb-4 ml-4 list-disc">
                  Leave the sea moss to soak for at least 12 hours, or ideally,
                  24 hours. The moss will absorb water and double in size.
                </li>
                <li className="text-xl mb-4 ml-4 list-disc">
                  For added flavor and nutrients, consider adding a slice of
                  lime or lemon to the soaking water.
                </li>
              </ul>
            </div>
            <div className="p-10 border rounded-xl mb-8">
              <p className="text-2xl mb-4">#3. Blend the Sea Moss</p>
              <ul>
                <li className="text-xl mb-4 ml-4 list-disc">
                  After soaking, drain off the water and give the sea moss
                  another rinse.
                </li>
                <li className="text-xl mb-4 ml-4 list-disc">
                  Place the sea moss in a blender. Add fresh, clean water -
                  about 1 cup of water for every ounce of sea moss.
                </li>
                <li className="text-xl mb-4 ml-4 list-disc">
                  Blend until smooth. The mixture should form a thick, creamy
                  gel.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="container max-w-9xl mx-auto mt-20 px-8">
          <h2 className="text-5xl max-w-2xl mx-auto text-center my-10">
            Questions and Answers
          </h2>
        </div>
      </section> */}
    </>
  )
}

export default DriedSeaMoss
