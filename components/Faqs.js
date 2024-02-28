/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'

const Faq = () => {
  return (
    <>
      <section>
        <div className="items-center px-10 my-20">
          <h2 className="text-5xl lg:text-7xl text-center leading-relaxed font-normal mb-10 lg:mb-20">
            Questions and Answers
          </h2>
          <div className="container grid lg:grid-cols-2 lg:gap-16 max-w-7xl mx-auto">
            <div>
              <div>
                <h3 className="text-2xl lg:text-3xl leading-10 mb-5">
                  What Does Sea Moss Gel Taste Like?
                </h3>
                <p className="text-xl lg:max-w-2xl leading-10 mb-10">
                  Sea moss gel has a very mild, slightly oceanic flavor, which
                  many describe as neutral. It doesn't have a strong taste,
                  which makes it incredibly versatile in various dishes. When
                  added to foods or drinks, sea moss gel often adopts the
                  flavors of those ingredients, making it an excellent addition
                  to smoothies, teas, soups, and sauces without altering the
                  taste significantly. This subtle flavor profile is one of the
                  reasons why sea moss gel is so popular; it boosts the
                  nutritional content of meals without impacting the overall
                  flavor.
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl leading-10 mb-5">
                  Where Do You Get Your Sea Moss From?
                </h3>
                <p className="text-xl lg:max-w-2xl leading-loose mb-10">
                  Our sea moss is harvested from the clean, unpolluted waters of
                  St. Lucia, which is known for their high-quality sea moss. We
                  encourage and ensure sustainable harvesting practices to
                  maintain ecological balance.
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl leading-10 mb-5">
                  Is Your Sea Moss Organic?
                </h3>
                <p className="text-xl lg:max-w-2xl leading-loose mb-10">
                  Yes, our sea moss is completely organic, free from any
                  synthetic fertilizers, pesticides, or additives, ensuring you
                  receive the product in its most natural and pure form.
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl leading-10 mb-5">
                  What Is Your Return and Refund Policy?
                </h3>
                <p className="text-xl lg:max-w-2xl leading-loose mb-10">
                  We accept returns within a specific period from the purchase
                  date, provided the products are unopened and in their original
                  condition. Refunds are processed upon the receipt and
                  inspection of the returned item. Please refer to our detailed
                  Return Policy on our website.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-2xl lg:text-3xl leading-10 mb-5">
                  How long does it take to see the first sea moss effect?
                </h3>
                <p className="text-xl lg:max-w-2xl leading-loose mb-10">
                  The time it takes to notice the effects of sea moss can vary
                  significantly from person to person, depending on various
                  factors such as individual health, the specific benefits being
                  sought, the form of sea moss being consumed, and the
                  consistency of its use.
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl leading-10 mb-5">
                  Is Sea Moss Vegan?
                </h3>
                <p className="text-xl lg:max-w-2xl leading-loose mb-10">
                  Yes, sea moss is vegan. It is a type of seaweed, which means
                  it's a marine plant and not an animal product or byproduct.
                  This makes it suitable for individuals following a vegan diet.
                  It's often used as a thickening agent in vegan cooking, making
                  it a popular choice for plant-based diets.
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl leading-10 mb-5">
                  Is Your Sea Moss Natural and GMO-free?
                </h3>
                <p className="text-xl lg:max-w-2xl leading-loose mb-10">
                  Our sea moss is 100% natural, sourced directly from the
                  pristine waters of the ocean. It grows in its natural habitat,
                  ensuring that you receive the product just as nature intended.
                  Our sea moss is also completely GMO-free. We do not use any
                  genetically modified organisms in the cultivation or
                  processing of our sea moss.
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl leading-10 mb-5">
                  How Long Does Sea Moss Gel Last After Purchase?
                </h3>
                <p className="text-xl lg:max-w-2xl leading-loose mb-10">
                  The shelf life of sea moss depends on the form in which you
                  purchase it. Dry sea moss can last up to a year if stored
                  properly. For sea moss gel, we recommend using it within 2-3
                  weeks when stored in the refrigerator.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center my-20">
            <Link href="/faqs">
              <button className="py-4 px-10  bg-slate-400 text-xl text-white font-bold uppercase">
                Read More FAQs
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq
