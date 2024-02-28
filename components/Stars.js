import React from 'react'

const Stars = ({ product }) => {
  return (
    <>
      <div
        className="yotpo bottomLine"
        data-yotpo-product-id={product.id}
        data-url={`https://seamosswellness.com/products/${product.slug}`}
      ></div>
    </>
  )
}

export default Stars
