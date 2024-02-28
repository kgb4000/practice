import React from 'react'

export const metadata = {
  title: 'Customer Testimonials and Reviews | Sea moss Wellness',
  description:
    'Read what our customers think f our products and our customers service.',
  alternates: {
    canonical: 'https://seamosswellness.com/reviews',
  },
}

const Reviews = () => {
  return (
    <>
      <section>
        <div className="max-w-5xl mx-auto my-10 py-36">
          <h1 className="text-4xl lg:text-5xl text-center mb-14">
            Customer Reviews
          </h1>
          <div id="yotpo-testimonials-custom-tab"></div>
        </div>
      </section>
    </>
  )
}

export default Reviews
