import React from 'react'

const CustomerReviewsApp = ({
  product,
  priceOfOne,
  pageURL,
  heroMossImage,
}) => {
  return (
    <>
      <section>
        <div className="container max-w-3xl mx-auto my-20 px-8">
          <h2 className="text-5xl text-center mb-10">Customer Reviews</h2>
          <div
            className="yotpo yotpo-main-widget"
            data-product-id={product.id}
            data-price={priceOfOne}
            data-currency="USD"
            data-name={product.name}
            data-url={pageURL}
            data-image-url={heroMossImage}
          ></div>
        </div>
      </section>
    </>
  )
}

export default CustomerReviewsApp
