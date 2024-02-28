'use client'

import React from 'react'
import { useState } from 'react'
import { buildImage } from '@/lib/cloudinary/cloudinary'

const AmountButtons = ({ priceOfOne, productSlug, product }) => {
  const [quantity, setQuantity] = useState(3)

  const [price, setPrice] = useState()

  const price1 = 35.99
  const price2 = 71.98
  const price3 = 107.97
  const price4 = 143.96

  const quantity1 = 1
  const quantity2 = 2
  const quantity3 = 3
  const quantity4 = 4

  const discount1 = 5
  const discount2 = 9
  const discount3 = 12
  const discount4 = 17

  const [discount, setDiscount] = useState(discount3)

  const discountedPrice =
    priceOfOne - ((priceOfOne * discount) / 100).toFixed(2)

  function BagsOrJars() {
    if (productSlug.includes('gel') && quantity > 1) {
      content = 'Jars'
    } else {
      content = 'Jar'
    }
  }

  let content

  return (
    <>
      <div className="my-4 grid grid-cols-2">
        <div className="my-1 p-4 mr-1 border flex justify-center items-center">
          <label onClick={() => setDiscount(discount3)}>
            <input
              type="radio"
              name="myRadio"
              value={quantity3}
              defaultChecked={true}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <span className="py-4 px-2 text-md">{quantity3}</span>
            <span>{content}</span>
            <span
              className="pl-1 text-sm"
              onClick={() => setDiscount(discount3)}
            >
              <i>
                {(price3 - (price3 * discount3) / 100).toFixed(2)}
                /each
              </i>
            </span>
          </label>
        </div>
        <div className="my-1 p-4 mr-1 border flex justify-center items-center">
          <label onClick={() => setDiscount(discount4)}>
            <input
              type="radio"
              name="myRadio"
              value={quantity4}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <span className="py-4 px-2 text-md">{quantity4}</span>
            <span>{content}</span>
            <span
              className="pl-1 text-sm"
              onClick={() => setDiscount(discount4)}
            >
              <i>
                {(priceOfOne - (priceOfOne * discount4) / 100).toFixed(2)}
                /each
              </i>
            </span>
          </label>
        </div>
        <div className="my-1 p-4 mr-1 border flex justify-center items-center">
          <label onClick={() => setDiscount(discount2)}>
            <input
              type="radio"
              id={3}
              name="myRadio"
              value={quantity2}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <span className="pl-1 text-md">{quantity2}</span>{' '}
            <span>{content}</span>
            <span
              className="pl-1 text-sm"
              onClick={() => setDiscount(discount2)}
            >
              <i>
                {(priceOfOne - (priceOfOne * discount2) / 100).toFixed(2)}
                /each
              </i>
            </span>
          </label>
        </div>
        <div className="my-1 p-4 mr-1 border flex justify-center items-center">
          <label onClick={() => setDiscount(discount1)}>
            <input
              type="radio"
              name="myRadio"
              value={quantity1}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <span className="py-4 px-2 text-md">{quantity1}</span>
            <span>
              <span>{content}</span>
            </span>
            <span
              className="pl-1 text-sm"
              onClick={() => setDiscount(discount1)}
            >
              <i>
                {(priceOfOne - (priceOfOne * discount1) / 100).toFixed(2)}
                /each
              </i>
            </span>
          </label>
        </div>
      </div>
      <div>
        <div className="my-4">
          <div className="flex items-center justify-between">
            <p className="text-2xl text-green-600 font-bold my-1">
              You're saving: {discount}%
            </p>
            <p className="text-2xl text-green-600 font-bold">
              ${(quantity * discountedPrice).toFixed(2)}{' '}
              <span className="line-through text-gray-900 text-xl">
                ${(priceOfOne * quantity).toFixed(2)}
              </span>
            </p>
          </div>
        </div>
        <button
          className="px-4 py-5 rounded-xl w-full text-2xl font-bold bg-yellow-300 hover:bg-yellow-400 snipcart-add-item"
          onChange={(e) => setQuantity(e.target.value)}
          data-item-id={product.id}
          data-item-price={discountedPrice}
          data-item-description={product.metaDescription}
          data-item-image={buildImage(product.image[0].public_id).toURL()}
          data-item-name={product.name}
          data-item-url={`/products/${product.slug}`}
          data-item-quantity={quantity}
        >
          Add to Cart
        </button>
        {/* <button className="snipcart-checkout px-4 py-5 rounded-xl w-full text-2xl font-bold bg-yellow-500 mt-3">
          Checkout
        </button> */}
        {/* <div className="flex justify-between">
          <span>QTY: {quantity}</span>
          <span>Total Price: ${(priceOfOne * quantity).toFixed(2)}</span>
        </div> */}
        {/* <button
          className="py-5 snipcart-add-item"
          data-item-id={product.id}
          data-item-price={product.price}
          data-item-description={product.metaDescription}
          data-item-image={buildImage(product.image[0].public_id).toURL()}
          data-item-name={product.name}
          data-item-url="/products/green-sea-moss"
        >
          Add to Cart
        </button> */}
      </div>
    </>
  )
}

export default AmountButtons
